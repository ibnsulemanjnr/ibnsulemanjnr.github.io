document.addEventListener('DOMContentLoaded', function() {
    
    // Smooth Scrolling for Anchor Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Form Validation
    const form = document.querySelector('form');
    form.addEventListener('submit', function(e) {
        const name = document.getElementById('name');
        const email = document.getElementById('email');
        const message = document.getElementById('message');

        if (!name.value || !email.value || !message.value) {
            e.preventDefault();
            alert('Please fill in all fields before submitting the form.');
        } else if (!validateEmail(email.value)) {
            e.preventDefault();
            alert('Please enter a valid email address.');
        }
    });

    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    }

    // Hover Effects for Project Cards
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            card.classList.add('hovered');
        });
        card.addEventListener('mouseleave', function() {
            card.classList.remove('hovered');
        });
    });

    // Collapsible Skills Section
    const skillCategories = document.querySelectorAll('.skill-category');
    skillCategories.forEach(category => {
        const button = category.querySelector('button');
        const ul = category.querySelector('ul');

        button.addEventListener('click', function() {
            const isOpen = ul.classList.contains('hidden');

            // Close all categories
            skillCategories.forEach(c => c.querySelector('ul').classList.add('hidden'));

            // Open the clicked category
            if (isOpen) {
                ul.classList.remove('hidden');
            }
        });
    });
});
