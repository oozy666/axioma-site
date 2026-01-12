(function () {
    // 1. Theme Inversion
    const INVERTED_CLASS = 'inverted-mode';
    const savedInverted = localStorage.getItem('isInverted');
    if (savedInverted === 'true') {
        document.documentElement.classList.add(INVERTED_CLASS);
    }

    // 2. Language Loading
    const savedLang = localStorage.getItem('language');
    // If we have a saved language and it's NOT the default (en), we need to hide content
    // until translations are applied to avoid a flash of English text.
    if (savedLang && savedLang !== 'en') {
        document.documentElement.classList.add('lang-loading');
        document.documentElement.lang = savedLang;
    }
})();
