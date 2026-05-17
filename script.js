function toggleMenu() {
    const navbar = document.querySelector('.navigation-bar');
    if (!navbar) return;
    navbar.classList.toggle('active');
}

function closeMenu() {
    const navbar = document.querySelector('.navigation-bar');
    if (navbar) navbar.classList.remove('active');
}

// Gallery Functions
let phindeeCarouselIndex = 0;
let learningCarouselIndex = 0;

function openPhindeeGallery() {
    const modal = document.getElementById('phindeeGallery');
    modal.style.display = 'flex';
    phindeeCarouselIndex = 0;
    
    // Set first slide as active
    const slides = modal.querySelectorAll('.carousel-slide');
    slides.forEach((slide, i) => {
        slide.classList.toggle('active', i === 0);
    });
    updateCarousel();
}

function closePhindeeGallery() {
    document.getElementById('phindeeGallery').style.display = 'none';
}

function openLearningGallery() {
    const modal = document.getElementById('learningGallery');
    modal.style.display = 'flex';
    learningCarouselIndex = 0;
    
    // Set first slide as active
    const slides = modal.querySelectorAll('.carousel-slide');
    slides.forEach((slide, i) => {
        slide.classList.toggle('active', i === 0);
    });
    updateLearningCarousel();
}

function closeLearningGallery() {
    document.getElementById('learningGallery').style.display = 'none';
}

function nextCarousel() {
    const slides = document.querySelectorAll('#phindeeGallery .carousel-slide');
    phindeeCarouselIndex = (phindeeCarouselIndex + 1) % slides.length;
    updateCarousel();
}

function prevCarousel() {
    const slides = document.querySelectorAll('#phindeeGallery .carousel-slide');
    phindeeCarouselIndex = (phindeeCarouselIndex - 1 + slides.length) % slides.length;
    updateCarousel();
}

function nextLearningCarousel() {
    const slides = document.querySelectorAll('#learningGallery .carousel-slide');
    learningCarouselIndex = (learningCarouselIndex + 1) % slides.length;
    updateLearningCarousel();
}

function prevLearningCarousel() {
    const slides = document.querySelectorAll('#learningGallery .carousel-slide');
    learningCarouselIndex = (learningCarouselIndex - 1 + slides.length) % slides.length;
    updateLearningCarousel();
}

function goToSlide(index) {
    phindeeCarouselIndex = index;
    updateCarousel();
}

function goToLearningSlide(index) {
    learningCarouselIndex = index;
    updateLearningCarousel();
}

function updateCarousel() {
    const modal = document.getElementById('phindeeGallery');
    const slides = modal.querySelectorAll('.carousel-slide');
    const indicators = modal.querySelectorAll('.indicator');
    
    slides.forEach((slide, i) => {
        slide.classList.toggle('active', i === phindeeCarouselIndex);
    });
    
    indicators.forEach((indicator, i) => {
        indicator.classList.toggle('active', i === phindeeCarouselIndex);
    });
}

function updateLearningCarousel() {
    const modal = document.getElementById('learningGallery');
    const slides = modal.querySelectorAll('.carousel-slide');
    const indicators = modal.querySelectorAll('.indicator');
    
    slides.forEach((slide, i) => {
        slide.classList.toggle('active', i === learningCarouselIndex);
    });
    
    indicators.forEach((indicator, i) => {
        indicator.classList.toggle('active', i === learningCarouselIndex);
    });
}

// Contact Form Handler
function handleContactForm(event) {
    event.preventDefault();
    console.log('Form submitted!');
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    
    console.log('Name:', name, 'Email:', email, 'Message:', message);
    
    // Validate
    if (!name || !email || !message) {
        alert('Please fill in all fields');
        return;
    }
    
    // Create mailto link
    const subject = `Message from ${name}`;
    const body = `From: ${name}\nEmail: ${email}\n\n${message}`;
    const mailtoLink = `mailto:erickjed.diaz@neu.edu.ph?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    
    console.log('mailto link:', mailtoLink);
    
    // Open email client
    window.location.href = mailtoLink;
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
    // EmailJS already initialized in HTML
    
    // Close menu when clicking on a link
    document.querySelectorAll('.menu a').forEach(link => {
        link.addEventListener('click', closeMenu);
    });
    
    // Close gallery when clicking outside
    window.addEventListener('click', (e) => {
        const phindeeGallery = document.getElementById('phindeeGallery');
        const learningGallery = document.getElementById('learningGallery');
        if (e.target === phindeeGallery) closePhindeeGallery();
        if (e.target === learningGallery) closeLearningGallery();
    });
});
