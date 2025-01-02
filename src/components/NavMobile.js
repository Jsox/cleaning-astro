// Initialize mobile menu functionality
const toggleButton = document.getElementById('isToggle');
const navMenu = document.getElementById('navigation');

function toggleMenu() {
    if (toggleButton && navMenu) {
        toggleButton.classList.toggle('open');
        navMenu.classList.toggle('hidden');
        navMenu.classList.toggle('block');
    }
}

// Close menu when clicking outside
document.addEventListener('click', (event) => {
    const nav = document.getElementById('navigation');
    const toggle = document.getElementById('isToggle');

    if (nav && toggle && event.target &&
        !nav.contains(event.target) &&
        !toggle.contains(event.target)) {
        nav.classList.remove('block');
        nav.classList.add('hidden');
        toggle.classList.remove('open');
    }
});

// Export the toggle function for use in Astro
export default toggleMenu;
