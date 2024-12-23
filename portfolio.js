const themeToggle = document.getElementById('theme-toggle');
themeToggle.addEventListener('click', () => {
    document.documentElement.classList.toggle('dark');
    saveThemePreference();
});

// Save theme preference
function saveThemePreference() {
    const isDark = document.documentElement.classList.contains('dark');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
}

// Load saved theme
function loadThemePreference() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        document.documentElement.classList.add('dark');
    } else {
        document.documentElement.classList.remove('dark');
    }
}

// Scroll indicator handling
const scrollIndicator = document.getElementById('scroll-indicator');
window.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY;
    const opacity = scrollPosition > 100 ? '0' : '0.5';
    const visibility = scrollPosition > 100 ? 'hidden' : 'visible';
    
    scrollIndicator.style.opacity = opacity;
    scrollIndicator.style.visibility = visibility;
    scrollIndicator.style.transition = 'opacity 0.3s ease, visibility 0.3s ease';
});

// Initialize theme on load
document.addEventListener('DOMContentLoaded', loadThemePreference);