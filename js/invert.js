document.addEventListener('DOMContentLoaded', () => {
    // Check local storage for preference
    const INVERTED_CLASS = 'inverted-mode';


    // Function to update button text
    const updateButtonText = (btn) => {
        const isInverted = document.documentElement.classList.contains(INVERTED_CLASS);
        btn.textContent = isInverted ? '/DAY' : '/NIGHT';
    };

    // Create and Insert Button dynamically
    const createAndInsertButton = () => {
        // Prevent duplicate buttons
        if (document.getElementById('invert-btn')) return;

        const btn = document.createElement('div');
        btn.id = 'invert-btn';
        updateButtonText(btn);

        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            const wasInverted = document.documentElement.classList.contains(INVERTED_CLASS);
            document.documentElement.classList.toggle(INVERTED_CLASS);

            // Save new state
            localStorage.setItem('isInverted', !wasInverted);
            updateButtonText(btn);
        });

        document.body.appendChild(btn);
    };

    createAndInsertButton();
});
