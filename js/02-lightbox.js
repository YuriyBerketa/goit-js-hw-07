import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const galleryEl = document.querySelector(".gallery");

const pictureMarkup = createGalleryItems(galleryItems);

galleryEl.insertAdjacentHTML('beforeend', pictureMarkup);

function createGalleryItems(galleryItems) {
  return galleryItems.map(({ preview, original, description }) => {
    return `<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      alt="${description}"
    />
  </a>
</div>`;
  }).join('');
}

const galleryOptions = {
    captionDelay: 250,
    captionsData: 'alt',
}
const lightbox = new SimpleLightbox('.gallery a', galleryOptions);