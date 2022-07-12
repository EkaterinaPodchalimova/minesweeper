const popup = document.querySelector('.popup');
const buttonRules = document.querySelector('.rules');
const buttonToClosePopup = popup.querySelector('.popup__close');

// Функция открытия попапа
function openPopup(popup) {
    popup.classList.add('popup_opened');
    document.addEventListener('keydown', closePopupByEscape);
    popup.addEventListener('mousedown', closePopupByClickOnOverlay);
}
  
  // Функция закрытия попапа
function closePopup(popup) {
    popup.classList.remove('popup_opened');
    document.removeEventListener('keydown', closePopupByEscape);
    popup.removeEventListener('mousedown', closePopupByClickOnOverlay);
}
  
  // Функция закрытия попапа при нажатии на ESC
function closePopupByEscape(evt) {
    if(evt.key === 'Escape') {
        const openedPopup = document.querySelector('.popup_opened');
        closePopup(openedPopup);
    }
}
  
  // Функция закрытия попапа при нажатии на оверлей
function closePopupByClickOnOverlay(evt) {
    if(evt.target.classList.contains('popup_opened')) {
      closePopup(evt.target);
    }
}

buttonRules.addEventListener('click', function() {
  openPopup(popup);
});

buttonToClosePopup.addEventListener('click', function() {
  closePopup(popup);
});

