document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    const dropdownLink = document.querySelector('.dropdown > a');
    const dropdownMenu = document.querySelector('.dropdown-menu');

    // Toggle the navigation menu when hamburger is clicked
    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

    // Toggle the dropdown menu on mobile
    dropdownLink.addEventListener('click', (e) => {
        e.preventDefault(); // Prevent the default anchor link behavior
        dropdownMenu.classList.toggle('show'); // Toggle the dropdown visibility
    });

    // Optional: Close the dropdown when clicking outside
    document.addEventListener('click', (e) => {
        if (!navLinks.contains(e.target) && !hamburger.contains(e.target)) {
            navLinks.classList.remove('active');
        }
        if (!dropdownMenu.contains(e.target) && !dropdownLink.contains(e.target)) {
            dropdownMenu.classList.remove('show'); // Close dropdown if clicked outside
        }
    });
});
