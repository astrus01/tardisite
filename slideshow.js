document.addEventListener('DOMContentLoaded', function() {
    const slideshows = document.querySelectorAll('.slideshow');
    
    slideshows.forEach(slideshow => {
        const slides = slideshow.querySelectorAll('.slide');
        const prevBtn = slideshow.querySelector('.prev');
        const nextBtn = slideshow.querySelector('.next');
        let currentIndex = 0;
        
        // Initialize the slideshow
        function showSlide(index) {
            // Hide all slides
            slides.forEach(slide => {
                slide.classList.remove('active');
            });
            
            // Show the current slide
            slides[index].classList.add('active');
        }
        
        // Go to next slide
        function nextSlide() {
            currentIndex = (currentIndex + 1) % slides.length;
            showSlide(currentIndex);
        }
        
        // Go to previous slide
        function prevSlide() {
            currentIndex = (currentIndex - 1 + slides.length) % slides.length;
            showSlide(currentIndex);
        }
        
        // Add event listeners
        if (prevBtn) {
            prevBtn.addEventListener('click', prevSlide);
        }
        
        if (nextBtn) {
            nextBtn.addEventListener('click', nextSlide);
        }
        
        // Auto-advance slides every 5 seconds
        let slideInterval = setInterval(nextSlide, 5000);
        
        // Pause auto-advance when hovering over slideshow
        slideshow.addEventListener('mouseenter', () => {
            clearInterval(slideInterval);
        });
        
        // Resume auto-advance when mouse leaves slideshow
        slideshow.addEventListener('mouseleave', () => {
            slideInterval = setInterval(nextSlide, 5000);
        });
        
        // Initialize first slide
        showSlide(currentIndex);
    });
}); 