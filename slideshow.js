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

        // Touch swipe support for mobile
        let touchStartX = 0;
        let touchEndX = 0;
        let touchStartY = 0;
        let touchEndY = 0;

        slideshow.addEventListener('touchstart', (e) => {
            touchStartX = e.changedTouches[0].screenX;
            touchStartY = e.changedTouches[0].screenY;
            // Pause auto-advance during touch
            clearInterval(slideInterval);
        }, { passive: true });

        slideshow.addEventListener('touchend', (e) => {
            touchEndX = e.changedTouches[0].screenX;
            touchEndY = e.changedTouches[0].screenY;
            handleSwipe();
            // Resume auto-advance after swipe
            slideInterval = setInterval(nextSlide, 5000);
        }, { passive: true });

        function handleSwipe() {
            const swipeThreshold = 50; // Minimum distance for a swipe
            const swipeDistanceX = touchEndX - touchStartX;
            const swipeDistanceY = touchEndY - touchStartY;

            // Only trigger if horizontal swipe is greater than vertical (to avoid interfering with scrolling)
            if (Math.abs(swipeDistanceX) > Math.abs(swipeDistanceY)) {
                if (Math.abs(swipeDistanceX) > swipeThreshold) {
                    if (swipeDistanceX > 0) {
                        // Swipe right - go to previous slide
                        prevSlide();
                    } else {
                        // Swipe left - go to next slide
                        nextSlide();
                    }
                }
            }
        }

        // Initialize first slide
        showSlide(currentIndex);
    });
}); 