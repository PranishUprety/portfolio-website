// Toggle Dark Mode
const toggleDarkMode = () => {
    document.body.classList.toggle('dark-mode');
    localStorage.setItem('dark-mode', document.body.classList.contains('dark-mode'));
};

// Load Dark Mode Preference
const loadDarkModePreference = () => {
    if (localStorage.getItem('dark-mode') === 'true') {
        document.body.classList.add('dark-mode');
    }
};

// Add Event Listener to Toggle Button
document.addEventListener('DOMContentLoaded', () => {
    loadDarkModePreference();

    const toggleButton = document.getElementById('dark-mode-toggle');
    toggleButton.addEventListener('click', toggleDarkMode);
});
