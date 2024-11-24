// Smooth scrolling for internal links
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function (e) {
        const targetId = this.getAttribute('href').slice(1); // Get target ID from href
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            e.preventDefault();
            targetElement.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Logo hover animation
const logo = document.querySelector('.logo');
logo.addEventListener('mouseenter', () => {
    logo.style.transform = 'scale(1.2)';
    logo.style.transition = 'transform 0.3s ease-in-out';
});
logo.addEventListener('mouseleave', () => {
    logo.style.transform = 'scale(1)';
});

// Back to top button
const backToTopButton = document.createElement('button');
backToTopButton.textContent = '↑';
backToTopButton.classList.add('back-to-top');
document.body.appendChild(backToTopButton);

// Show/hide "back to top" button on scroll
window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        backToTopButton.style.display = 'block';
    } else {
        backToTopButton.style.display = 'none';
    }
});

// Scroll to top functionality
backToTopButton.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});
