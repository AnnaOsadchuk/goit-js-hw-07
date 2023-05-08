import { galleryItems } from "./gallery-items.js";
// Change code below this line

// console.log(createGalleryImages(galleryItems));

let modal;

const galleryContainer = document.querySelector(".gallery");
const galleryImages = createGalleryImages(galleryItems);

// Добавляємо в DOM
galleryContainer.insertAdjacentHTML("beforeend", galleryImages);
galleryContainer.addEventListener("click", onGalletyImageClick);

window.addEventListener("keydown", onEscape);

function createGalleryImages(items) {
  return items
    .map(({ preview, original, description }) => {
      return `
    <li class="gallery__item">
        <a class="gallery__link" href="${original}">
            <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
            />
        </a>
    </li>`;
    })
    .join("");
}

function onGalletyImageClick(event) {
  event.preventDefault();
  if (event.target.nodeName !== "IMG") {
    return;
  }

  createModal(event).show();
}

function createModal(event) {
  const imageSource = event.target.dataset.source;
  const imageDescription = event.target.alt;

  return basicLightbox.create(
    `
    <div>
        <img class="modal"  
            src=${imageSource}
            alt=${imageDescription}
        />
    </div>`,
    {
      onShow: (instance) => {
        modal = instance;
        instance.element().querySelector("img").onclick = closeModal;
      },
    }
  );
}

function closeModal() {
  if (modal != undefined) {
    modal.close();
    modal = undefined;
  }
}

function onEscape(event) {
  if (event.key === "Escape") {
    closeModal();
  }
}
