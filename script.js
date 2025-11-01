// ===== Mobile Menu Toggle =====
const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
const navList = document.querySelector('.nav-list');

if (mobileMenuToggle) {
    mobileMenuToggle.addEventListener('click', () => {
        navList.classList.toggle('active');
    });

    // Close menu when clicking on a link
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navList.classList.remove('active');
        });
    });
}

// ===== Form Validation =====
const contactForm = document.getElementById('contactForm');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const messageInput = document.getElementById('message');
const nameError = document.getElementById('nameError');
const emailError = document.getElementById('emailError');
const messageError = document.getElementById('messageError');
const formSuccess = document.getElementById('formSuccess');

// Email validation regex
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Validate name
function validateName() {
    const name = nameInput.value.trim();
    if (name === '') {
        nameError.textContent = 'Name is required';
        nameInput.style.borderColor = '#F44336';
        return false;
    } else if (name.length < 2) {
        nameError.textContent = 'Name must be at least 2 characters';
        nameInput.style.borderColor = '#F44336';
        return false;
    } else {
        nameError.textContent = '';
        nameInput.style.borderColor = '#4CAF50';
        return true;
    }
}

// Validate email
function validateEmail() {
    const email = emailInput.value.trim();
    if (email === '') {
        emailError.textContent = 'Email is required';
        emailInput.style.borderColor = '#F44336';
        return false;
    } else if (!emailRegex.test(email)) {
        emailError.textContent = 'Please enter a valid email address';
        emailInput.style.borderColor = '#F44336';
        return false;
    } else {
        emailError.textContent = '';
        emailInput.style.borderColor = '#4CAF50';
        return true;
    }
}

// Validate message
function validateMessage() {
    const message = messageInput.value.trim();
    if (message === '') {
        messageError.textContent = 'Message is required';
        messageInput.style.borderColor = '#F44336';
        return false;
    } else if (message.length < 10) {
        messageError.textContent = 'Message must be at least 10 characters';
        messageInput.style.borderColor = '#F44336';
        return false;
    } else {
        messageError.textContent = '';
        messageInput.style.borderColor = '#4CAF50';
        return true;
    }
}

// Real-time validation
nameInput.addEventListener('blur', validateName);
nameInput.addEventListener('input', () => {
    if (nameInput.value.trim() !== '') {
        validateName();
    }
});

emailInput.addEventListener('blur', validateEmail);
emailInput.addEventListener('input', () => {
    if (emailInput.value.trim() !== '') {
        validateEmail();
    }
});

messageInput.addEventListener('blur', validateMessage);
messageInput.addEventListener('input', () => {
    if (messageInput.value.trim() !== '') {
        validateMessage();
    }
});

// Form submission
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();

        // Validate all fields
        const isNameValid = validateName();
        const isEmailValid = validateEmail();
        const isMessageValid = validateMessage();

        if (isNameValid && isEmailValid && isMessageValid) {
            // Hide any previous success message
            formSuccess.style.display = 'none';

            // Simulate form submission (in a real app, this would send data to a server)
            setTimeout(() => {
                formSuccess.style.display = 'block';
                contactForm.reset();
                
                // Reset border colors
                nameInput.style.borderColor = '#E0E0E0';
                emailInput.style.borderColor = '#E0E0E0';
                messageInput.style.borderColor = '#E0E0E0';

                // Clear error messages
                nameError.textContent = '';
                emailError.textContent = '';
                messageError.textContent = '';

                // Scroll to success message
                formSuccess.scrollIntoView({ behavior: 'smooth', block: 'nearest' });

                // Hide success message after 5 seconds
                setTimeout(() => {
                    formSuccess.style.display = 'none';
                }, 5000);
            }, 500);
        } else {
            // Focus on first invalid field
            if (!isNameValid) {
                nameInput.focus();
            } else if (!isEmailValid) {
                emailInput.focus();
            } else if (!isMessageValid) {
                messageInput.focus();
            }
        }
    });
}

// ===== Back to Top Button =====
const backToTopButton = document.getElementById('backToTop');

// Show/hide button based on scroll position
window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        backToTopButton.classList.add('show');
    } else {
        backToTopButton.classList.remove('show');
    }
});

// Smooth scroll to top when button is clicked
if (backToTopButton) {
    backToTopButton.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// ===== Smooth Scroll for Navigation Links =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ===== Add animation on scroll (Intersection Observer) =====
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe product cards
document.querySelectorAll('.product-card').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(30px)';
    card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(card);
});

// Observe about section
const aboutSection = document.querySelector('.about-content');
if (aboutSection) {
    aboutSection.style.opacity = '0';
    aboutSection.style.transform = 'translateY(30px)';
    aboutSection.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(aboutSection);
}

