const modal = document.querySelector('.modal');
const modalImage = document.getElementById('modal__img');
const prev = document.querySelector('.modal__left-btn');
const next = document.querySelector('.modal__right-btn');
const entities = [
    {
        img: './img/beach.jpg'
    },
    {
        img: './img/cherry.jpg'
    },
    {
        img: './img/flowers.jpg'
    },
    {
        img: './img/landscape.jpeg'
    },
    {
        img: './img/mountains.jpg'
    },
    {
        img: './img/paris.jpg'
    },
    {
        img: './img/waterfall.jpg'
    },
    {
        img: './img/wave.jpg'
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
    updateSlider();
}

function showPreviousSlide() {
    slideIndex = (slideIndex - 1 + slideCount) % slideCount;
    updateSlider();
}

function updateSlider() {
    entities.forEach((slide, index) => {
        if (index === slideIndex) {
            modalImage.src = entities[index].img;
        }
    });
}

document.addEventListener('keydown', (e) => {
    if (e.code == 'ArrowLeft' || e.code == 'ArrowDown') {
        showPreviousSlide();
    } else if (e.code == 'ArrowRight' || e.code == 'ArrowUp') {
        showNextSlide();
    }
});

updateSlider();