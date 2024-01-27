const modal = document.querySelector('.modal');
const modalImage = document.getElementById('modal__img');
const prev = document.querySelector('.modal__left-btn');
const next = document.querySelector('.modal__right-btn');
const entities = [
    {
        img: 'C:/Users/Avror_000/Desktop/gallery/img/beach.jpg'
    },
    {
        img: 'C:/Users/Avror_000/Desktop/gallery/img/cherry.jpg'
    },
    {
        img: 'C:/Users/Avror_000/Desktop/gallery/img/flowers.jpg'
    },
    {
        img: 'C:/Users/Avror_000/Desktop/gallery/img/landscape.jpeg'
    },
    {
        img: 'C:/Users/Avror_000/Desktop/gallery/img/mountains.jpg'
    },
    {
        img: 'C:/Users/Avror_000/Desktop/gallery/img/paris.jpg'
    },
    {
        img: 'C:/Users/Avror_000/Desktop/gallery/img/waterfall.jpg'
    },
    {
        img: 'C:/Users/Avror_000/Desktop/gallery/img/wave.jpg'
    }
]

const slideCount = 8;
let slideIndex = 0;

prev.addEventListener('click', showPreviousSlide);
next.addEventListener('click', showNextSlide);

function displayModal(img) {
    modal.style.display = 'block';
    modalImage.src = img.src;
    slideIndex = event.target.parentNode;
    slideIndex = ([...slideIndex.children].indexOf(event.target));
    return slideIndex;
}

function hideModal() {
    if (event.target == modal) {
        modal.style.display = 'none';
    }
}

function showNextSlide() {
    slideIndex = (slideIndex + 1) % slideCount;
    console.log(slideIndex)
    updateSlider();
}

function showPreviousSlide() {
    slideIndex = (slideIndex - 1 + slideCount) % slideCount;
    console.log(slideIndex)
    updateSlider();
}

function updateSlider() {
    entities.forEach((slide, index) => {
        if (index === slideIndex) {
            modalImage.src = entities[index].img;
        }
    });
}

updateSlider();