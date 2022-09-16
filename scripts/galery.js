import * as photoLists from './models.js';

let photoType = 'animals';

const popup = document.getElementById('popup');

popup.addEventListener('click', () => closePopup());

function closePopup() {
    popup.textContent = '';
    popup.style.visibility = 'hidden';
    popup.style.opacity = '0';
    popup.style.animation = 'fadeOut 200ms';
}

const pictureList = document.getElementById('picture-list');

reloadGallery();

document.getElementById('type-select').addEventListener('change', function() {
    photoType = this.value;
    pictureList.innerHTML = null;
    reloadGallery();
});

function reloadGallery() {
    let imgList;
    switch (photoType) {
        case "animals":
            imgList = photoLists.animalsImgList;
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
        img.setAttribute('loading', 'lazy');
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
        pictureList.appendChild(pictureDiv);
    });
}