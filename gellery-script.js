import arrayElImg  from './gallery-items.js';


const refs = {
  gallery: document.querySelector('.gallery'),

}

function createElGallert({preview,original,description}){
  return`
  <li class="gallery__item">
  <a
    class="gallery__link"
    href="${original}"
  >
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li>`
}

const allElGallery = arrayElImg.map(e => createElGallert(...arrayElImg)).join('');
// console.log(allElGallery);
refs.gallery.innerHTML = allElGallery;