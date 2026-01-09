class VideoHeader {
    constructor() {
        this.desktopVideo = document.querySelector('.video-background.desktop');
        this.mobileVideo = document.querySelector('.video-background.mobile');
        this.firstFrameContainer = document.querySelector('.first-frame-container');
        this.videoHeader = document.querySelector('.video-header');
        this.currentVideo = null;
        
        this.init();
    }
    
    init() {
        // Set initial state
        this.videoHeader.classList.add('loading');
        
        // Determine which video to use based on screen width
        this.currentVideo = window.innerWidth <= 768 ? this.mobileVideo : this.desktopVideo;
        
        // Preload the other video
        this.preloadOtherVideo();
        
        // Try to play video immediately
        this.playVideo();
        
        // Listen for video ready state
        this.currentVideo.addEventListener('canplaythrough', () => {
            this.onVideoReady();
        }, { once: true });
        
        this.currentVideo.addEventListener('error', (e) => {
            console.error('Video loading error:', e);
            this.handleVideoError();
        });
        
        // Fallback: if video doesn't load in 3 seconds, keep showing first frame
        this.loadingTimeout = setTimeout(() => {
            if (this.videoHeader.classList.contains('loading')) {
                console.log('Video taking too long, keeping first frame visible');
                clearTimeout(this.loadingTimeout);
            }
        }, 3000);
        
        // Handle window resize
        window.addEventListener('resize', this.debounce(() => {
            this.handleResize();
        }, 250));
        
        // Handle page visibility
        document.addEventListener('visibilitychange', () => {
            if (document.hidden) {
                this.currentVideo.pause();
            } else {
                this.currentVideo.play().catch(e => {
                    console.log('Autoplay prevented on tab switch:', e);
                });
            }
        });
    }
    
    playVideo() {
        const playPromise = this.currentVideo.play();
        
        if (playPromise !== undefined) {
            playPromise.catch(error => {
                // Autoplay was prevented
                console.log('Autoplay prevented, waiting for user interaction:', error);
                
                // Play video on first user interaction
                const playOnInteraction = () => {
                    this.currentVideo.play();
                    document.removeEventListener('click', playOnInteraction);
                    document.removeEventListener('scroll', playOnInteraction);
                    document.removeEventListener('touchstart', playOnInteraction);
                };
                
                document.addEventListener('click', playOnInteraction, { once: true });
                document.addEventListener('scroll', playOnInteraction, { once: true });
                document.addEventListener('touchstart', playOnInteraction, { once: true });
            });
        }
    }
    
    onVideoReady() {
        clearTimeout(this.loadingTimeout);
        
        // Smooth transition from first frame to video
        setTimeout(() => {
            this.videoHeader.classList.remove('loading');
            this.videoHeader.classList.add('loaded');
            
            // Remove first frame from DOM after transition
            setTimeout(() => {
                if (this.firstFrameContainer) {
                    this.firstFrameContainer.style.display = 'none';
                }
            }, 500);
        }, 100);
    }
    
    handleVideoError() {
        console.log('Video failed to load, keeping first frame visible');
        clearTimeout(this.loadingTimeout);
        // Keep the first frame visible
        this.videoHeader.classList.remove('loading');
        this.firstFrameContainer.style.opacity = '1';
    }
    
    preloadOtherVideo() {
        const otherVideo = window.innerWidth <= 768 ? this.desktopVideo : this.mobileVideo;
        otherVideo.load();
    }
    
    handleResize() {
        const isMobile = window.innerWidth <= 768;
        const currentIsMobile = this.currentVideo === this.mobileVideo;
        
        if (isMobile !== currentIsMobile) {
            const oldVideo = this.currentVideo;
            this.currentVideo = isMobile ? this.mobileVideo : this.desktopVideo;
            
            // If old video was playing, pause it
            oldVideo.pause();
            
            // Start playing new video
            this.playVideo();
            
            // If new video is already loaded, transition immediately
            if (this.currentVideo.readyState >= 3) {
                this.onVideoReady();
            }
        }
    }
    
    debounce(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    }
}

// Initialize when DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
    new VideoHeader();
    
    // Add smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});