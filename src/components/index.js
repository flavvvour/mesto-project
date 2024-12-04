// index.js

import '../styles/index.css';
import logo from '../images/logo.svg';
import avatar from '../images/avatar.jpg';

import { enableValidation } from './validate.js';
import { createCard, initialCards } from './card.js';
import { openModal, closeModal, setPopupEventListeners } from './modal.js';

// Устанавливаем картинку логотипа
const logoImg = document.querySelector('.logo');
logoImg.src = logo;

// Устанавливаем картинку аватара
const profileImage = document.querySelector('.profile__image');
profileImage.style.backgroundImage = `url(${avatar})`;

const placesList = document.querySelector('.places__list');

// DOM узлы для поп-апов
const profilePopup = document.querySelector('.popup_type_edit');
const cardPopup = document.querySelector('.popup_type_new-card');
const imagePopup = document.querySelector('.popup_type_image');
const popupImage = imagePopup.querySelector('.popup__image');
const popupCaption = imagePopup.querySelector('.popup__caption');

// Кнопки управления
const profileEditButton = document.querySelector('.profile__edit-button');
const profileAddButton = document.querySelector('.profile__add-button');

// Узлы для профиля
const profileTitle = document.querySelector('.profile__title');
const profileDescription = document.querySelector('.profile__description');
const nameInput = document.querySelector('.popup__input_type_name');
const jobInput = document.querySelector('.popup__input_type_description');
const profileFormElement = document.querySelector('.popup__form[name="edit-profile"]');

// Узлы для формы карточки
const cardFormElement = document.querySelector('.popup__form[name="new-place"]');
const cardNameInput = cardFormElement.querySelector('.popup__input_type_place-name');
const cardLinkInput = cardFormElement.querySelector('.popup__input_type_link');
const submitButtonCard = cardFormElement.querySelector('.popup__button');

// Устанавливаем слушатели для поп-апов
document.querySelectorAll('.popup').forEach(popup => setPopupEventListeners(popup));

// Обработчики для профиля
profileEditButton.addEventListener('click', () => {
    nameInput.value = profileTitle.textContent;
    jobInput.value = profileDescription.textContent;
    openModal(profilePopup);
});

profileFormElement.addEventListener('submit', (evt) => {
    evt.preventDefault();
    profileTitle.textContent = nameInput.value;
    profileDescription.textContent = jobInput.value;
    closeModal(profilePopup);
});

// Обработчики для формы карточки
profileAddButton.addEventListener('click', () => openModal(cardPopup));

cardFormElement.addEventListener('submit', (evt) => {
    evt.preventDefault();

    const newCard = {
        name: cardNameInput.value,
        link: cardLinkInput.value
    };

    placesList.prepend(createCard(newCard, handleImageClick));
    cardFormElement.reset();
    closeModal(cardPopup);
});

// Обработчик клика по картинке карточки
function handleImageClick(cardData) {
    popupImage.src = cardData.link;
    popupImage.alt = cardData.name;
    popupCaption.textContent = cardData.name;
    openModal(imagePopup);
}

// Инициализация карточек при загрузке
document.addEventListener('DOMContentLoaded', () => {
    initialCards.forEach(card => {
        placesList.append(createCard(card, handleImageClick));
    });
});

// Настройки валидации
const validationConfig = {
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__button',
    inactiveButtonClass: 'popup__button_disabled',
    inputErrorClass: 'popup__input_type_error',
    errorClass: 'popup__error_type',
    errorClassActive: 'popup__error_active',
};

enableValidation(validationConfig);
