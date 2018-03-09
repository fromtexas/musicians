const slider = (() => {
    const slides = document.getElementsByClassName('slider__slide');
    const left = document.getElementsByClassName('slider__arrow-container--left')[0];
    const right = document.getElementsByClassName('slider__arrow-container--right')[0];
    const dotsContainer = document.getElementsByClassName('slider__dots-row')[0];
    let currentSlide = 0;

    const dotsInjection = () => {
        [...slides].forEach((dot, index) => {

            if(index === 0) {
                dotsContainer.innerHTML += `<span class="slider__dot slider__active-dot"></span>`;
            } else {
                dotsContainer.innerHTML += `<span class="slider__dot "></span>`;
            }
       
        });
    };

    
    dotsInjection();
    
    const dots = document.getElementsByClassName('slider__dot');



    left.addEventListener('click', () => {

        if(slides.length-1 > currentSlide){
            slides[currentSlide].style.left = '-100%';
            slides[currentSlide].classList.remove('slider__active-slide');

            dots[currentSlide].classList.remove('slider__active-dot');

            slides[currentSlide+1].style.left = 0;
            slides[currentSlide+1].classList.add('slider__active-slide');

            dots[currentSlide+1].classList.add('slider__active-dot');

            currentSlide = currentSlide + 1;

        } else {
            [...slides].forEach((slide) => {
                if(!slide.classList.contains('slider__active-slide')){
                    slide.style.left = '100%'
                }
            });

            setTimeout(() => {
                slides[currentSlide].classList.remove('slider__active-slide');
                dots[currentSlide].classList.remove('slider__active-dot');

                currentSlide = 0;

                slides[currentSlide].style.left = 0;

                slides[slides.length-1].style.left = '100%';
                
                slides[currentSlide].classList.add('slider__active-slide');
                dots[currentSlide].classList.add('slider__active-dot');
            }, 200);

        }    
    });

    right.addEventListener('click', () => {

        slides[currentSlide].style.left = '100%';
        slides[currentSlide].classList.remove('slider__active-slide');
        dots[currentSlide].classList.remove('slider__active-dot');

        currentSlide = currentSlide ?  currentSlide -1 : slides.length-1;
        
        slides[currentSlide].style.left = 0;
        slides[currentSlide].classList.add('slider__active-slide');
        dots[currentSlide].classList.add('slider__active-dot');
            
    });

})();
