'use strict';
import gallerryItems from './gallery-items.js';
const galerryNode = document.querySelector('.js-gallery');

class Gallery {
  constructor(gallerryItems, galleryNode) {
    this.gallerryItems = gallerryItems;
    this.galleryNode = galleryNode;
    this.liteBox = document.querySelector('.js-lightbox');
    this.liteBoxImg = document.querySelector('.lightbox__image');
    this.__Openner();
    this.__AddGallery();
    this.__CloseByButton();
    this.__CloseByOutClick();
    this.__CloseByEsc();
    this.__FlippinThrough();
  }

  __GenerateGalleryItems() {
    return this.gallerryItems
      .map(({ preview, original, description }) => {
        return `<li class = "gallery__item"> <a class="gallery__link" href="${original}">
      <img src="${preview}" data-source="${original}" alt="${description}">
      <span class="gallery__icon">
        <i class="material-icons">zoom_out_map</i>
      </span>
    </a></li>`;
      })
      .join('\n');
  }
  __AddGallery() {
    this.galleryNode.insertAdjacentHTML(
      'afterbegin',
      this.__GenerateGalleryItems(),
    );
  }
  __Openner() {
    //skip brouser default action on <a>
    this.galleryNode.onclick = function(event) {
      return false;
    };
    this.galleryNode.addEventListener('click', event => {
      this.liteBox.classList.add('is-open');
      this.liteBoxImg.src = event.target.dataset.source;
    });
  }
  __CloseByButton() {
    const button = document.querySelector('.lightbox__button');
    button.addEventListener('click', event => {
      this.liteBox.classList.remove('is-open');
      this.liteBoxImg.src = '';
    });
  }
  __CloseByOutClick() {
    const overlay = document.querySelector('.lightbox__content');
    overlay.addEventListener('click', event => {
      if(event.target === this.liteBoxImg ) return;
      this.liteBox.classList.remove('is-open');
      this.liteBoxImg.src = '';
    });
  }
  __CloseByEsc() {
    document.addEventListener('keydown', event => {
      if (event.key !== 'Escape') return;
      this.liteBox.classList.remove('is-open');
      this.liteBoxImg.src = '';
    });
  }
  __FlippinThrough() {
    document.addEventListener('keydown', event => {      
      let index = this.gallerryItems.indexOf(
        this.gallerryItems.find(item => item.original === this.liteBoxImg.src),
      );
      if (event.key === 'ArrowRight') {
        index += 1;
      }
      if (event.key === 'ArrowLeft') {
        index -= 1;
      }
      if (index < 0 || index >= this.gallerryItems.length) {
        return;
      }
      this.liteBoxImg.src = this.gallerryItems[index].original;
    });
  }
}

new Gallery(gallerryItems, galerryNode);


