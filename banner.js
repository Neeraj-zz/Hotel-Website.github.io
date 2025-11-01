// JavaScript for Banner Slider 
 document.addEventListener('DOMContentLoaded', function() {
            let currentSlide = 0;
            const slides = document.querySelectorAll('.banner-slide');
            const indicators = document.querySelectorAll('.indicator');
            const totalSlides = slides.length;
            
            // Function to show a specific slide
            function showSlide(index) {
                // Remove active class from all slides and indicators
                slides.forEach(slide => slide.classList.remove('active'));
                indicators.forEach(indicator => indicator.classList.remove('active'));
                
                // Add active class to current slide and indicator
                slides[index].classList.add('active');
                indicators[index].classList.add('active');
                
                currentSlide = index;
            }
            
            // Function to move to next slide
            function nextSlide() {
                let nextIndex = (currentSlide + 1) % totalSlides;
                showSlide(nextIndex);
            }
            
            // Set interval to change slide every 3 seconds
            setInterval(nextSlide, 3000);
            
            // Add click event listeners to indicators
            indicators.forEach((indicator, index) => {
                indicator.addEventListener('click', function() {
                    showSlide(index);
                });
            });
        });