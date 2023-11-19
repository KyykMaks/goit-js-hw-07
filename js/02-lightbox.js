import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const galerryEl = document.querySelector(".gallery");

galerryEl.insertAdjacentHTML("beforeend", createMarkup(galleryItems));
galerryEl.addEventListener("click", handleClick);

function createMarkup(array) {  
  return array  
    .map(  
      ({ preview, original, description }) => { 
        return `  
          <li class="gallery__item">  
            <a class="gallery__link" href="${original}">  
              <img class="gallery__image" src="${preview}" alt="${description}"/>  
            </a>  
          </li>  
        `; 
      }  
    )  
    .join(" ");  
}

function handleClick(event) {
  event.preventDefault();

  if (event.target === event.currentTarget) {
    return;
  }


  new SimpleLightbox(".gallery__item a", {
    captions: true,
    captionsDay: 250,
  })
}
