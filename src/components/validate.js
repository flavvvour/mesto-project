// Включение валидации для всех форм
export function enableValidation(config) {
    const forms = Array.from(document.querySelectorAll(config.formSelector));
    forms.forEach((form) => {
        form.addEventListener('submit', (evt) => {
            evt.preventDefault();
        });
        setEventListeners(form, config);
    });
}

// Установка слушателей событий для формы
function setEventListeners(form, config) {
    const inputs = Array.from(form.querySelectorAll(config.inputSelector));
    const button = form.querySelector(config.submitButtonSelector);

    toggleButtonState(inputs, button, config);

    inputs.forEach((input) => {
        input.addEventListener('input', () => {
            checkInputValidity(input, form, config);
            toggleButtonState(inputs, button, config);
        });
    });
}

// Проверка валидности инпута
function checkInputValidity(inputElement, form, config) {
    if (!inputElement.validity.valid) {
        showInputError(inputElement, form, config);
    } else {
        hideInputError(inputElement, form, config);
    }
}

// Показ ошибки
function showInputError(inputElement, form, config) {
    const errorElement = form.querySelector(`.${config.errorClass}_${inputElement.name}`);
    inputElement.classList.add(config.inputErrorClass);
    errorElement.textContent = inputElement.validationMessage;
    errorElement.classList.add(config.errorClassActive);
}

// Скрытие ошибки
function hideInputError(inputElement, form, config) {
    const errorElement = form.querySelector(`.${config.errorClass}_${inputElement.name}`);
    inputElement.classList.remove(config.inputErrorClass);
    errorElement.classList.remove(config.errorClassActive);
    errorElement.textContent = '';
}

// Изменение состояния кнопки
function toggleButtonState(inputs, button, config) {
    if (hasInvalidInput(inputs)) {
        button.setAttribute('disabled', true);
        button.classList.add(config.inactiveButtonClass);
    } else {
        button.removeAttribute('disabled');
        button.classList.remove(config.inactiveButtonClass);
    }
}

// Проверка на наличие невалидного инпута
function hasInvalidInput(inputs) {
    return inputs.some((input) => !input.validity.valid);
}