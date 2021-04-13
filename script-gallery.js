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
    window.addEventListener('keydown', onKeyPressArrow);

}

btnCloseEl.addEventListener('click', closedGalleryImg)

function closedGalleryImg() {
    delete openImgEl.currentSrc;
    openModal.classList.remove('is-open');
        cleanModal();
};
overlayEl.addEventListener('click', closedGalleryImg);

function onEscKeyPress(e) {
    if (e.key === 'Escape') {
        closedGalleryImg();
    }
};
function onKeyPressArrow(e) {
    
        const onSrc = arrayItems.map(({ original }) => original);
        const onDesc = arrayItems.map(({ description }) => description);
        
        let currSrc = onSrc.indexOf(openImgEl.src);
        let currDesc = onDesc.indexOf(openImgEl.alt);

        switch (e.code) {
        case 'ArrowLeft':
            if (currSrc === 0 && currDesc === 0) {
            currSrc = onSrc.length;
            currDesc = onDesc.length;
    };
        openImgEl.src = onSrc[currSrc - 1];
        openImgEl.alt = onDesc[currDesc - 1];
            break;
        
        case 'ArrowRight':
            if (currSrc + 1 > onSrc.length -1 && currDesc + 1 > onDesc.length -1 ) {
            currSrc = -1;
            currDesc = -1;
            };
            openImgEl.src = onSrc[currSrc + 1];
            openImgEl.alt = onDesc[currDesc + 1];
            break;
    }
};

function cleanModal(e) {
    openImgEl.src = " ";
    openImgEl.alt = " ";
 };