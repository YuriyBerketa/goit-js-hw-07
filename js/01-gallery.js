import { galleryItems } from "./gallery-items.js";
// Change code below this line
console.log(galleryItems);

const galleryEl = document.querySelector(".gallery");
const pictureMarkup = createGalleryItems(galleryItems);

galleryEl.insertAdjacentHTML("beforeend", pictureMarkup);

function createGalleryItems(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `
   <div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>
    `;
    })
    .join("");
}

galleryEl.addEventListener("click", onPictureClick);

function onPictureClick(evt) {
  evt.preventDefault();
  
    if (!evt.target.classList.contains('gallery__image')) {
    return;
  }
  const originalImg = evt.target.dataset.source;

    const instance = basicLightbox.create(`
    <img src= "${originalImg}">
`);
instance.show()

    galleryEl.addEventListener('keydown', (evt) => {
        if (evt.code === "Escape") {
            instance.close();
        }
    });
}


