// Секция клиенты
$('.clients__slider').owlCarousel({
    loop: true,
    margin: 30,
    nav: true,
    pagination: true,
    dots: true,
    dotsContainer:'.clients__paginations',
    dotsEach: true,
    responsive: {
        0: {
            items: 1
        },
        425: {
            items: 2
        },
        676: {
            items: 3
        },
        991: {
            items: 4
        },
        1300: {
            items: 5
        },
    },
    
})  

// Пагинация клиенты
let owlClients = $('.clients__slider');
owlClients.owlCarousel();
$('.clients__btn').click(function() {
    let position = $(this).index();
    // если нужно ставим тут класс .active элементу по которому кликнули и снимаем у остальных
    owlClients.trigger('to.owl.carousel', [position, 500]);
});



// Cекция карьера
$('.career__slider').owlCarousel({
    loop: true,
    margin: 30,
    pagination : true,
    dots: true,
    dotsContainer:'.career__paginations',
    dotsEach: true,
    responsive:{
        0: {
            items: 1
        },
        768: {
            items: 2
        },
        1400: {
            items: 3
        }
    },
    
})


// Навигация секция карьера
let owlCareerNavigations = $('.career__slider');
owlCareerNavigations.owlCarousel();
$('.career__navigations__right').click(function() {
    owlCareerNavigations.trigger('next.owl.carousel');
})

$('.career__navigations__left').click(function() {
    owlCareerNavigations.trigger('prev.owl.carousel', [300]);
})


// Пагинация секция карьера
let owlCareerPaginations = $('.career__slider');
owlCareerPaginations.owlCarousel();
$('.career__slider__btn').click(function() {
    let position = $(this).index();
    // если нужно ставим тут класс .active элементу по которому кликнули и снимаем у остальных
    owlCareerPaginations.trigger('to.owl.carousel', [position, 500]);
});




// Cекция проекты
$('.projects__slider').owlCarousel({
    loop: true,
    margin: 30,
    pagination : true,
    dots: true,
    dotsContainer:'.projects__paginations',
    dotsEach: true,
    responsive: {
        0: {
            items: 1,
        },
        425: {
            items: 2
        },
        676: {
            items: 3
        },
        1600: {
            items: 4,
        },
    },
    
})


// Навигация секция проекты
let owlProjectNavigations = $('.projects__slider');
owlProjectNavigations.owlCarousel();
$('.projects__navigations__right').click(function() {
    owlProjectNavigations.trigger('next.owl.carousel');
})

$('.projects__navigations__left').click(function() {
    owlProjectNavigations.trigger('prev.owl.carousel', [300]);
})


// Пагинация секция проекты
let owlProjectPaginations = $('.projects__slider');
owlProjectPaginations.owlCarousel();
$('.projects__btn').click(function() {
    let position = $(this).index();
    // если нужно ставим тут класс .active элементу по которому кликнули и снимаем у остальных
    owlProjectPaginations.trigger('to.owl.carousel', [position, 500]);
});



// Секция партнеры
$('.partners__slider').owlCarousel({
    loop: true,
    margin: 100,
    pagination: true,
    dots: true,
    dotsContainer: '.partners__paginations',
    dotsEach: true,
    responsive: {
        0: {
            items: 1
        },
        375: {
            items: 2
        },
        576: {
            items: 3
        },
        767: {
            items: 4
        },
        991: {
            items: 5
        },

    },
    
}) 

// Пагинация партнеры
let owlPartners = $('.partners__slider');
owlPartners.owlCarousel();
$('.partners__btn').click(function() {
    let position = $(this).index();
    // если нужно ставим тут класс .active элементу по которому кликнули и снимаем у остальных
    owlPartners.trigger('to.owl.carousel', [position, 500]);
});