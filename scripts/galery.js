import * as photoLists from './models.js';

let photoType = 'paysage';

const menuElements = document.querySelectorAll('.type-element');

menuElements.forEach(element => {
    element.addEventListener('click', (event) => {
        document.getElementById('type-menu-active').removeAttribute('id');
        element.setAttribute('id', 'type-menu-active');
        photoType = event.target.getAttribute('value');
        pictureList.innerHTML = null;
        reloadGallery();
    });
});

const popup = document.getElementById('popup');

popup.addEventListener('click', () => closePopup());

const pictureList = document.getElementById('picture-list');

const loaderDiv = document.createElement('div');
loaderDiv.setAttribute('id', 'load');
// loaderDiv.innerHTML = '<img data-src="https://ik.imagekit.io/demo/default-image.jpg">';
loaderDiv.style.zIndex = '10';

const reloadGallery = () => {
    let imgList;
    switch (photoType) {
        case 'animals':
            imgList = photoLists.animalsImgList;
            break;
        case 'architecture':
            imgList = photoLists.architectureImgList;
            break;
        default:
            imgList = photoLists.paysageImgList;
    }
    imgList.forEach(function (file) {

        const pictureDiv = document.createElement('div');
        pictureDiv.setAttribute('class', 'picture');

        const img = document.createElement('img');
        img.setAttribute('src', file.path);
        img.setAttribute('alt', file.alt);
        img.setAttribute('id', file.filename);
        img.setAttribute('class', 'galery-img');
        img.setAttribute('loading', 'lazy');
        img.style.visibility = 'hidden';
        img.addEventListener('click', () => {
            const imgPopup = document.getElementById(file.filename).cloneNode(true);

            imgPopup.style.maxHeight = '90vh';
            imgPopup.style.maxWidth = '90vw';
            imgPopup.style.marginTop = '50vh';
            imgPopup.style.transform = 'translateY(-50%)';

            popup.style.visibility = 'visible';
            popup.style.opacity = '1';
            popup.style.animation = 'fadeIn 300ms';
            popup.appendChild(imgPopup);
        });

        pictureDiv.appendChild(img);
        pictureDiv.appendChild(loaderDiv.cloneNode(true));
        pictureList.appendChild(pictureDiv);
        
    });

    const imgInGalery = document.querySelectorAll('.galery-img');

    document
        .querySelectorAll('.galery-img')
        .forEach(img => 
            img.addEventListener('load', (e) => {
                img.style.visibility = 'visible';
                const imgParent = img.parentNode;
                imgParent.querySelector('#load').remove();
            })
        );
}

const closePopup = () => {
    popup.textContent = '';
    popup.style.visibility = 'hidden';
    popup.style.opacity = '0';
    popup.style.animation = 'fadeOut 200ms';
}

reloadGallery();

async function lightBox(url) {
  lightboxElem.style.display = "block";
  await loadImage("https://somesite.net/huge-image.jpg", lightboxImgElem);
  lightboxControlsElem.disabled = false;
}
