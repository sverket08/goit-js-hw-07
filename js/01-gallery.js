import { galleryItems } from './gallery-items.js';
// Change code below this line
const galleryList = document.querySelector('.gallery');

const createGalleryMarkup = galleryItems
  .map(({ preview, original, description }) =>
      `<div class="gallery__item">
      <a class="gallery__link" href="${original}">
        <img
          class="gallery__image"
          src="${preview}"
          data-source="${original}"
          alt="${description}"
        />
      </a>
    </div>`,
  )
  .join('');


  galleryList.insertAdjacentHTML('beforeend', createGalleryMarkup);

  function onImageClick(evt) {
    evt.preventDefault();
  
  
   if (evt.target.nodeName !== 'IMG') return;
  
   onOpenModal(evt.target.dataset.source);
  }
  galleryList.addEventListener('click', onImageClick);
  
  const onCreateModal = image =>
    basicLightbox.create(`<img src = '${image}' width = '2100' alt = '${image}'>`);
  
  const onOpenModal = image => {
    modalImage = onCreateModal(image);
    modalImage.show();
    console.log('Open modal');
    document.addEventListener('keyup', onKeyPress);
  };
  
  const onKeyPress = e => {
    if (evt.code === 'Escape') modalImage.close();
    console.log('Close modal with escape');
    document.removeEventListener('keyup', onKeyPress);
    console.log(evt);
  };
  
//console.log(galleryItems);
