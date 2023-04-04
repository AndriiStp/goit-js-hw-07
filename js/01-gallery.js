import { galleryItems } from "./gallery-items.js";
// Change code below this line
const list = document.querySelector(".gallery");

(function () {
  const markup = galleryItems
    .map(
      ({ preview, description, original }) => `
    <li class="gallery__item">
      <a class="gallery__link" href="${original}">
        <img
          class="gallery__image"
          src="${preview}"
          data-source="${original}"
          alt="${description}"
        />
      </a>
    </li>`
    )
    .join("");

  list.insertAdjacentHTML("beforeend", markup);
})();

list.addEventListener("click", onClick);

function onClick(e) {
  e.preventDefault();
  const image = e.target.dataset.source;

  const instance = basicLightbox.create(
    `<img class="gallery__image" src="${image}" width="800" height="600">`
  );
  instance.show();
}

// document.addEventListener("keyDown", onKey);

// function onKey(e) {
//   if (!e === "Escape") {
//     return;
//   }
//   instance.close();
// }
