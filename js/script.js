class VideoHeader {
    constructor() {
        this.desktopVideo = document.querySelector('.video-background.desktop');
        this.mobileVideo = document.querySelector('.video-background.mobile');
        this.firstFrameContainer = document.querySelector('.first-frame-container');
        this.videoHeader = document.querySelector('.video-header');
        this.currentVideo = null;
        this.loadingTimeout = null;
        
        this.init();
    }
    
    init() {
        this.videoHeader.classList.add('loading');
        this.currentVideo = window.innerWidth <= 768 ? this.mobileVideo : this.desktopVideo;
        this.preloadOtherVideo();
        this.playVideo();
        
        this.currentVideo.addEventListener('canplaythrough', () => this.onVideoReady(), { once: true });
        this.currentVideo.addEventListener('error', (e) => {
            console.error('Video loading error:', e);
            this.handleVideoError();
        });
        
        // Fallback
        this.loadingTimeout = setTimeout(() => {
            if (this.videoHeader.classList.contains('loading')) {
                console.log('Video taking too long, keeping first frame visible');
            }
        }, 3000);
        
        window.addEventListener('resize', this.debounce(() => this.handleResize(), 250));
        document.addEventListener('visibilitychange', () => {
            document.hidden ? this.currentVideo.pause() : this.currentVideo.play().catch(e => console.log('Autoplay prevented:', e));
        });
    }
    
    playVideo() {
        const playPromise = this.currentVideo.play();
        if (playPromise !== undefined) {
            playPromise.catch(() => {
                const playOnInteraction = () => {
                    this.currentVideo.play();
                    ['click', 'scroll', 'touchstart'].forEach(e => document.removeEventListener(e, playOnInteraction));
                };
                ['click', 'scroll', 'touchstart'].forEach(e => document.addEventListener(e, playOnInteraction, { once: true }));
            });
        }
    }
    
    onVideoReady() {
        if (this.loadingTimeout) clearTimeout(this.loadingTimeout);
        setTimeout(() => {
            this.videoHeader.classList.remove('loading');
            this.videoHeader.classList.add('loaded');
            setTimeout(() => {
                if (this.firstFrameContainer) this.firstFrameContainer.style.display = 'none';
            }, 500);
        }, 100);
    }
    
    handleVideoError() {
        if (this.loadingTimeout) clearTimeout(this.loadingTimeout);
        this.videoHeader.classList.remove('loading');
        this.firstFrameContainer.style.opacity = '1';
    }
    
    preloadOtherVideo() {
        (window.innerWidth <= 768 ? this.desktopVideo : this.mobileVideo).load();
    }
    
    handleResize() {
        const isMobile = window.innerWidth <= 768;
        if ((isMobile && this.currentVideo === this.desktopVideo) || (!isMobile && this.currentVideo === this.mobileVideo)) {
            const oldVideo = this.currentVideo;
            this.currentVideo = isMobile ? this.mobileVideo : this.desktopVideo;
            oldVideo.pause();
            this.playVideo();
            if (this.currentVideo.readyState >= 3) this.onVideoReady();
        }
    }
    
    debounce(func, wait) {
        let timeout;
        return (...args) => {
            clearTimeout(timeout);
            timeout = setTimeout(() => func(...args), wait);
        };
    }
}

document.addEventListener('DOMContentLoaded', () => {
    new VideoHeader();
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        });
    });
});
