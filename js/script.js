// Плавный скролл
const smoothLinks = document.querySelectorAll('a[href^="#"]');
for (let smoothLink of smoothLinks) {
    smoothLink.addEventListener('click', function (e) {
        e.preventDefault();
        header.classList.remove('active')
        rotateBurgerBtn()

        document.body.style.overflow = ''

        const id = smoothLink.getAttribute('href');

        document.querySelector(id).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
};



// Шапка

const header = document.querySelector('.header__wrapper')
const headerBtn = document.querySelector('.header__btn')
const headerBtnLine = document.querySelectorAll('.header__line')


function rotateBurgerBtn() {
    headerBtnLine.forEach(line=>{
        line.classList.toggle('active__line')
    })
}



headerBtn.addEventListener('click', ()=>{
    header.classList.toggle('active')
    rotateBurgerBtn()

    if (header.classList.contains('active')) {
        document.body.style.overflow = 'hidden'
    }
    else{
        document.body.style.overflow = ''
    }
})



// Аккордеон
const accordeonItems = document.querySelectorAll('.services__items')

accordeonItems.forEach(accordeonItem =>{
    accordeonItem.addEventListener('click', ()=>{
        accordeonItem.firstElementChild.lastElementChild.classList.toggle('active')
        accordeonItem.firstElementChild.nextElementSibling.firstElementChild.classList.toggle('active')
        if (accordeonItem.firstElementChild.lastElementChild.classList.contains('active')) {
            accordeonItem.lastElementChild.setAttribute('src', 'img/minus.svg')
            accordeonItem.lastElementChild.setAttribute('alt', 'minus')
        }
        else{
            accordeonItem.lastElementChild.setAttribute('src', 'img/plus.svg')
        }
    })
    
})




// Яндекс карта
function init(){
    
    let myMap = new ymaps.Map('map', {
        center: [55.7835984, 37.56021351793026],
        zoom: 14,
        controls: ['zoomControl', 'geolocationControl', 'typeSelector', 'fullscreenControl', 'geolocationControl', 'searchControl'] 
    });

    const elementsControl = (elementControl) => {
        myMap.controls.get(elementControl).options.set('size', 'small');
    }

    elementsControl('zoomControl')
    elementsControl('typeSelector')
    elementsControl('searchControl')


    let myGeoObject = new ymaps.GeoObject({
        geometry: {
            type: 'Point', // тип геометрии - точка
            coordinates: []
        },
    });

    myMap.geoObjects.add(myGeoObject); 


    let myPlacemark = new ymaps.Placemark([55.7835984, 37.56021351793026], {
        balloonContent: 'Москва, <br> Ленинградский пр., д. 31А, бизнес-центр Монарх',
    }, {
        iconLayout: 'default#image',
        iconImageHref: 'img/geo-mark.svg',
        iconImageSize: [45, 45]
    });

    myMap.geoObjects.add(myPlacemark)

}    

ymaps.ready(init);



// Стрелка вверх
const arrowUp = document.querySelector('.arrow__up')
arrowUp.addEventListener('click', ()=>{
    window.scrollTo({
        top : 0,
        behavior: 'smooth'
    })
})


window.addEventListener('scroll', ()=>{
    if (pageYOffset > 300) {
        arrowUp.classList.add('active')
    }
    else {
        arrowUp.classList.remove('active')
    }
})