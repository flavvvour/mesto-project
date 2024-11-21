const MODAL_ANIMATION_DURATION = 600;
// @todo: Темплейт карточки
const cardTemplate = document.querySelector('#card-template').content;
const placesList = document.querySelector('.places__list');

// @todo: DOM узлы
document.addEventListener('DOMContentLoaded', () => {
    renderCards(initialCards);
});

const imagePopup = document.querySelector('.popup_type_image');
const popupImage = imagePopup.querySelector('.popup__image');
const popupCaption = imagePopup.querySelector('.popup__caption');
const popupClose = imagePopup.querySelector('.popup__close');

popupClose.addEventListener('click', () => {
    closeModal(imagePopup);
});
// @todo: Функция создания карточки
function createCard(cardData) {
    const cardElement = cardTemplate.cloneNode(true);

    const cardImage = cardElement.querySelector('.card__image');
    const cardTitle = cardElement.querySelector('.card__title');
    const deleteButton = cardElement.querySelector('.card__delete-button');
    const likeButton = cardElement.querySelector('.card__like-button');

    cardImage.alt = cardData.name;
    cardImage.src = cardData.link;
    cardTitle.textContent = cardData.name;

    cardImage.addEventListener('click', () => {
        popupImage.src = cardData.link;
        popupImage.alt = cardData.name;
        popupCaption.textContent = cardData.name;
        openModal(imagePopup);
    });
    likeButton.addEventListener('click', () => {
        likeButton.classList.toggle('card__like-button_is-active');
    });

    deleteCard(cardElement);

    return cardElement;
}

// @todo: Функция удаления карточки
function deleteCard(cardElement) {
    const deleteButton = cardElement.querySelector('.card__delete-button');
    deleteButton.addEventListener('click', () => {
        // Используем closest для поиска родительского элемента
        const cardToDelete = deleteButton.closest('.places__item'); 
        if (cardToDelete) {
            cardToDelete.remove();
        }
    });
}

// @todo: Вывести карточки на страницу
function renderCards(cards) {
    cards.forEach(card => {
        const cardElement = createCard(card);
        placesList.append(cardElement);
    });
}

// Поп-апы
const profilePopup = document.querySelector('.popup_type_edit');
const cardPopup = document.querySelector('.popup_type_new-card');
const profileEditButton = document.querySelector('.profile__edit-button');
const closeButton = document.querySelectorAll('.popup__close');

// Открытие и закрытие поп-апов
function openModal(popup) {
    popup.classList.add('popup_is-animated');
    popup.style.visibility = 'visible'; 
    popup.style.opacity = '0'; 

    setTimeout(() => {
        popup.style.opacity = '1';
    }, 0);
    popup.classList.add('popup_is-opened');
    
}

function closeModal(popup) {
    popup.classList.remove('popup_is-opened');
    popup.style.opacity = '0';

    // Ждем завершения анимации (0.6s) и скрываем элемент
    setTimeout(() => {
        popup.style.visibility = 'hidden';
        popup.classList.remove('popup_is-animated');
    }, MODAL_ANIMATION_DURATION);
}

// Обработчик открытия поп-апа редактирования профиля
profileEditButton.addEventListener('click', () => {
    nameInput.value = profileTitle.textContent;
    jobInput.value = profileDescription.textContent;
    openModal(profilePopup);
});

// Обработчик закрытия поп-апов
closeButton.forEach(button => {
    button.addEventListener('click', (event) => {
        const popup = event.target.closest('.popup');
        closeModal(popup);
    });
});

// Для редактирования профиля
const profileTitle = document.querySelector('.profile__title');
const profileDescription = document.querySelector('.profile__description');
const nameInput = document.querySelector('.popup__input_type_name');
const jobInput = document.querySelector('.popup__input_type_description');

// Найдем форму редактирования профиля
const profileFormElement = document.querySelector('.popup__form[name="edit-profile"]');

// Обработчик отправки формы редактирования профиля
function handleProfileFormSubmit(evt) {
    evt.preventDefault(); // Отменяем стандартную отправку формы

    const newName = nameInput.value;
    const newJob = jobInput.value;

    profileTitle.textContent = newName;
    profileDescription.textContent = newJob;

    closeModal(profilePopup);
}

// Добавляем обработчик на форму редактирования профиля
profileFormElement.addEventListener('submit', handleProfileFormSubmit);

// Для добавления новой карточки
const profileAddButton = document.querySelector('.profile__add-button');
profileAddButton.addEventListener('click', () => {
    openModal(cardPopup);
});

const cardNameInput = document.querySelector('.popup__input_type_card-name');
const cardLinkInput = document.querySelector('.popup__input_type_url');
const cardFormElement = document.querySelector('.popup__form[name="new-place"]');

// Обработчик отправки формы добавления карточки
function handleCardFormSubmit(evt) {
    evt.preventDefault();

    const newCardName = cardNameInput.value;
    const newCardLink = cardLinkInput.value;

    const newCard = {
        name: newCardName,
        link: newCardLink
    };

    const newCardElement = createCard(newCard);
    placesList.prepend(newCardElement); // Добавляем карточку в начало списка

    closeModal(cardPopup);

    // Очищаем поля формы
    cardFormElement.reset();
}

// Добавляем обработчик на форму добавления новой карточки
cardFormElement.addEventListener('submit', handleCardFormSubmit);
