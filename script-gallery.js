import arrayItems from './gallery-items.js';
// console.log(arrayItems);
const boxEL = document.querySelector('.js-gallery');
// console.log(boxEL);
const openModal = document.querySelector('.js-lightbox');
// console.log(openModal);
const btnCloseEl = document.querySelector('[data-action="close-lightbox"]');
// console.log(btnCloseEl);
const openImgEl = document.querySelector('.lightbox__image');
const overlayEl = document.querySelector('.lightbox__overlay');
// console.log(overlayEl);

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

boxEL.append(...elements);

const ulListenerClick = boxEL.addEventListener('click', openGalleryImg);

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
    // console.dir(e.code)
    // console.log(e.target);
    if (e.code !== 'ArrowLeft') {
        return
    };
    const elntChangeing = e.target.children[0].dataset.source
    // console.log(e.target.children[0].dataset.source)
    boxEL.childNodes.forEach((el, index) => {
        let currentelIndex = el;
        if (e.target.children[0].dataset.source === el.children[0].href) {
            console.log(el.children[0].href);
            currentelIndex -= el;
            // elntChangeing = 
            console.log(currentelIndex);
            // console.log(arr);
            // console.log(arr.indexOf(index));
        }
    })
    // console.dir(boxEL)

};