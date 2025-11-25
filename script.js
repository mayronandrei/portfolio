
ScrollReveal().reveal('.title-about', {
    origin: 'left',
    duration: 3000,
    distance: '30%' 
});


ScrollReveal().reveal('.text-about', {
    origin: 'right', 
    duration: 3000,
    distance: '30%' 
});


ScrollReveal().reveal('.about-container img', {
    duration: 3000,
    distance: '30%' 
});

ScrollReveal().reveal('.project-container .grid-item.item-1', {
    origin: 'left',
    duration: 3000,
    distance: '30%' 
});
ScrollReveal().reveal('.project-container .grid-item.item-2', {
    origin: 'right',
    duration: 3000,
    distance: '30%' 
});
ScrollReveal().reveal('.project-container .grid-item.item-3', {
    origin: 'left',
    duration: 3000,
    distance: '30%' 
});
ScrollReveal().reveal('.project-container .grid-item.item-4', {
    origin: 'right',
    duration: 3000,
    distance: '30%' 
});
ScrollReveal().reveal('.project-container .grid-item.item-5', {
    origin: 'left',
    duration: 3000,
    distance: '30%' 
});
ScrollReveal().reveal('.project-container .grid-item.item-6', {
    origin: 'right',
    duration: 3000,
    distance: '30%' 
});
ScrollReveal().reveal('.project-container .grid-item.item-7', {
    origin: 'left',
    duration: 3000,
    distance: '30%' 
});
ScrollReveal().reveal('.project-container .grid-item.item-8', {
    origin: 'right',
    duration: 3000,
    distance: '30%' 
});




function initializeCircularProgress() {
    
    ScrollReveal().reveal('.circular-progress-bar', {
        duration: 1500,
        distance: '0px',
        opacity: 0,
        scale: 0.8,
        interval: 100, 
        afterReveal: function (domEl) {
            
            const progress = domEl.getAttribute('data-progress'); 
            const circle = domEl.querySelector('.progress');
            
            
            const circumference = 283;
            
            
            setTimeout(() => {                
                circle.style.strokeDashoffset = circumference - (circumference * progress / 100);
            }, 50);

        }
    });
}


initializeCircularProgress();

