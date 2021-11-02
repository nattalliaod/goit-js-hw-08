import SimpleLightbox from 'simplelightbox';

import 'simplelightbox/dist/simple-lightbox.min.css';
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);

const refs = {
    gallery: document.querySelector('.gallery')
}

const murkup = galleryItems.map(({ preview, original, description }) => {
    return `<li><a class="gallery__item" href=${original}>
  <img class="gallery__image"
  src=${preview}
  alt=${description} />
</a>`

})
    .join('')
refs.gallery.insertAdjacentHTML('afterbegin', murkup)

const options = {captionsData: 'alt', captionDelay: 250, docClose: false}
let gallery = new SimpleLightbox('.gallery a', options );

gallery.on('show.simplelightbox', function (e) {
console.log(e);
});


// gallery.on('error.simplelightbox', function (e) {
// 	console.log(e); // some usefull information
// });
