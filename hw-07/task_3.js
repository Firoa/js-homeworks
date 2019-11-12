'use strict';

const images = [
  {
    url:
      'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url:
      'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url:
      'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

// const AddImgToGalary = images => {
//   return images.reduce((acc, { url, alt }) => {
//     const item = document.createElement('li');
//     const imgbox = document.createElement('img');
//     imgbox.src = url;
//     imgbox.alt = alt;
//     item.appendChild(imgbox);
//     acc = [...acc, item];
//     return acc;
//   }, []);
// };

const parrentList = document.querySelector('#gallery');
const ListArr = images
  .map(({ url, alt }) => {
    return `<li class = "gallery-item"><img class ="gallery-img" src ="${url}" alt = "${alt}"></li>`;
  })
  .reduce((acc, item) => {
    return acc + item;
  }, '');
parrentList.insertAdjacentHTML('afterbegin', ListArr);
