// Add imports above this line
import { galleryItems } from './gallery-items.js';
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
// Change code below this line


const gallery2 = document.querySelector(".gallery");
const markup2 = galleryItems.map(({ preview, original, description }) => `<a class="gallery__item" href="${original}"><img class="gallery__image" src="${preview}" alt="${description}"/></a>`).join("");
gallery2.insertAdjacentHTML('beforeend', markup2);

   const lightbox = new SimpleLightbox(".gallery a", {captionsData: "alt", captionDelay: 250}); 
    lightbox.on('show.simplelightbox', () => {
        const link = document.querySelectorAll(".gallery__item");
        Array.from(link).map((evt) => `<img src="${evt.getAttribute("href")}" alt="" width="800", height="600"/>`);
        
    });