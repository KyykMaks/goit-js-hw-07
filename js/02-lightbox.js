import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galerryEl = document.querySelector(".gallery");

galerryEl.insertAdjacentHTML("beforeend", createMarkup(galleryItems));
galerryEl.addEventListener("click", handleClick);

function createMarkup(array) {
  return array
    .map(
      ({ preview, original, description }) => `
      <li class="gallery__item">
       <a class="gallery__link" href="${original}">
        <img
      class="gallery__image"
      src="${preview}"
      alt="${description}"
    />
  </a>
</li>
   `
    )
    .join(" ");
}

function handleClick(event) {
  event.preventDefault();

  if (event.target === event.currentTarget) {
    return;
  }

  const galleryModal = event.target.closest(".gallery_link").href ;

  const galleryLightBox = new SimpleLigtbox(galleryModal, {
    captions:true,
    captionsDay:250
  })

 galleryLightBox.open();
}