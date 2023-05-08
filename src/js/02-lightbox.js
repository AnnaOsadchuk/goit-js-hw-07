import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

// UL element
const galleryContainerSlide = document.querySelector(".gallery");
// Create gallery
const galleryImagesSlide = createGallerySlide(galleryItems);

// Attach gallery to DOM
galleryContainerSlide.insertAdjacentHTML("beforeend", galleryImagesSlide);

function createGallerySlide(items) {
  return items
    .map(({ preview, original, description }) => {
      return `
        <li class="gallery__item">
            <a class="gallery__link" href="${original}">
                <img class="gallery__image" 
                src="${preview}"
                alt="${description}" />
             </a>
        </li>`;
    })
    .join("");
}

let lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
});
