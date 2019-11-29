let galleryItems = document.querySelectorAll('.gallery-content .gallery-item');
let galleryCardList = document.querySelector('.gallery-selection ul');
let galleryCardTemplate = galleryCardList.querySelector('#gallery-selection__card-template').content;

for(let i = 0; i < galleryItems.length; ++i) {
    let card = galleryCardTemplate.querySelector('li').cloneNode(true);
    let cardName = card.querySelector('.gallery-selection__card-name');
    cardName.textContent = galleryItems[i].querySelector('.article-header h2').textContent;
    
    card.addEventListener('click', function() {
        for(let j = 0; j < galleryItems.length; ++j) {
            if(i === j) {
                galleryItems[j].classList.add('active');
            }
            else {
                galleryItems[j].classList.remove('active');
            }
        }
        for(galleryCard of galleryCardList.children) {
            galleryCard.classList.remove('active');
        }
        this.classList.add('active');
    });
    
    galleryCardList.appendChild(card);
}