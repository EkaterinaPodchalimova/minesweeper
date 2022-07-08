const levelButton = document.querySelector('.level');
const levelsListElement = levelButton.querySelector('.header__inner-list');
const levelsArray = levelsListElement.querySelectorAll('.header__inner-item');

function closeLevelListByEscape(evt) {
    if(evt.key === 'Escape') {
        closeLevelsListElement();
    }
}

function closeLevelListByClick(evt) {
    if(!evt.target.classList.contains('level_opened')) {
        closeLevelsListElement();
    }
}

function openLevelsListElement() {
    levelsListElement.style.display = 'block';
    levelButton.classList.add('level_opened');
    document.addEventListener('keydown', closeLevelListByEscape);
    document.addEventListener('click', closeLevelListByClick);
}

function closeLevelsListElement() {
    levelsListElement.style.display = 'none';
    levelButton.classList.remove('level_opened');
    document.removeEventListener('keydown', closeLevelListByEscape);
    document.removeEventListener('click', closeLevelListByClick);
}

levelButton.addEventListener('click', openLevelsListElement);
levelButton.addEventListener('keydown', function(evt) {
    if(evt.key === 'Enter') {
        openLevelsListElement();
    }
});
