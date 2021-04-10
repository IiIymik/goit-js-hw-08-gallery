import arrayItems from './gallery-items.js';

const galleryImgEl = document.querySelector('.js-gallery');
const openModal = document.querySelector('.js-lightbox');
const btnCloseEl = document.querySelector('[data-action="close-lightbox"]');
const openImgEl = document.querySelector('.lightbox__image');
const overlayEl = document.querySelector('.lightbox__overlay');

const makeGalleryCard = ({ preview, original, description }) => {
    const liEL = document.createElement('li');
    liEL.classList.add('gallery__item');

    const linkEl = document.createElement('a');
    linkEl.classList.add('gallery__link');
    linkEl.getAttribute('href');
    linkEl.href = original;

    const imgEl = document.createElement('img');
    imgEl.classList.add('gallery__image');
    imgEl.getAttribute('src');
    imgEl.src = preview;
    imgEl.getAttribute('source');
    imgEl.dataset.source = original;
    imgEl.getAttribute('alt');
    imgEl.alt = description;
    linkEl.append(imgEl);
    liEL.append(linkEl);
    return liEL;
};

const elements = arrayItems.map(makeGalleryCard);

galleryImgEl.append(...elements);

galleryImgEl.addEventListener('click', openGalleryImg);

function openGalleryImg(e) {
    e.preventDefault();
    openModal.classList.toggle('is-open');
    openImgEl.src = e.target.dataset.source;
    openImgEl.alt = e.target.alt;
    window.addEventListener('keydown', onEscKeyPress);
    window.addEventListener('keydown', eventArrow);
}

btnCloseEl.addEventListener('click', closedGalleryImg)

function closedGalleryImg() {
    delete openImgEl.currentSrc;
    openModal.classList.remove('is-open');
};
overlayEl.addEventListener('click', closedGalleryImg);

function onEscKeyPress(e) {
    if (e.key === 'Escape') {
        closedGalleryImg();
    }
    
};

function eventArrow(e) {
    const elntChangeing = e.target.children[0].dataset.source
    if (e.code === 'ArrowLeft') {
    galleryImgEl.childNodes.forEach((el) => {
        if (elntChangeing === el.firstChild.href) {
            const previousEl = el.previousElementSibling.firstChild.href;
            openImgEl.src = previousEl;
            e.repeat;
        }
    })
    } else if (e.code === 'ArrowRight') {
        galleryImgEl.childNodes.forEach((el) => {
        if (elntChangeing === el.firstChild.href) {
            const previousEl = el.nextElementSibling.firstChild.href;
            openImgEl.src = previousEl;
        }
    })
    }
   
};

