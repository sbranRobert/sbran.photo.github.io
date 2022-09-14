const imgList = [
    {
        filename: 'COUCOU',
        path: 'images/COUCOU.jpg',
        alt: 'Ecureuil',
        type: 'animals'
    },
    {
        filename: 'l_ecureuil_cache',
        path: 'images/l_ecureuil_cache.jpg',
        alt: 'L\'écurueil caché',
        type: 'paysage'
    },
    {
        filename: 'le_vole_bleu',
        path: 'images/le_vole_bleu.jpg',
        alt: 'Le vole bleu',
        type: 'animals'
    },
    {
        filename: 'spiders',
        path: 'images/spiders.jpg',
        alt: 'Les deux araignées',
        type: 'paysage'
    },
    {
        filename: 'l_emmerdeur',
        path: 'images/l_emmerdeur.jpg',
        alt: 'L\'emmerdeur',
        type: 'paysage'
    },
    {
        filename: 'la_mouette_tendue',
        path: 'images/la_mouette_tendue.jpg',
        alt: 'La mouette tendue',
        type: 'animals'
    },
    {
        filename: 'le_prof',
        path: 'images/le_prof.jpg',
        alt: 'Le prof',
        type: 'animals'
    },
    {
        filename: 'le_regard',
        path: 'https://live.staticflickr.com/65535/51922807445_91ec53ee16_z.jpg',
        alt: 'Le regard',
        type: 'paysage'
    },
]

const popup = document.getElementById('popup');

let photoType = 'animals';

function closePopup() {
    popup.textContent = "";
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
    imgList.filter(img => img.type === photoType).forEach(function (file) {

        const pictureDiv = document.createElement("div");
        pictureDiv.setAttribute("class", "picture");

        const img = document.createElement("img");
        img.setAttribute("src", file.path);
        img.setAttribute("alt", file.alt);
        img.setAttribute("id", file.filename);
        img.setAttribute("loading", "lazy");
        img.addEventListener('click', () => {
            const imgPopup = document.getElementById(file.filename).cloneNode(true);

            imgPopup.style.maxHeight = "90vh";
            imgPopup.style.maxWidth = "90vw";
            imgPopup.style.marginTop = "50vh";
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