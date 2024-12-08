const token = '4913f45c-7db5-4f16-abdf-98af6d1d3194';
const groupId = 'frontend-st-cohort-201';
const baseURL = `https://mesto.nomoreparties.co/v1/${groupId}`;

const config = {
    headers: {
        authorization: token,
        'Content-Type': 'application/json',
    }
};

export const fetchData = (url, options = {}) => {
    return fetch(url, { ...config, ...options })
        .then(res => {
            if (!res.ok) {
                return Promise.reject(`Ошибка: ${res.status} - ${res.statusText}`);
            }
            return res.json();
        })
        .catch(err => {
            console.error(err);
            alert('Произошла ошибка. Попробуйте позже.');
        });
};


export const fetchUserInfo = () => {
    return fetchData(`${baseURL}/users/me`);
};

export const fetchInitialCards = () => {
    return fetchData(`${baseURL}/cards`);
};

export const updateUserInfo = (name, about) => {
    return fetchData(`${baseURL}/users/me`, {
        method: 'PATCH',
        body: JSON.stringify({ name, about })
    });
};

export const updateAvatar = (newAvatarLink) => {
    return fetchData(`${baseURL}/users/me/avatar`, {
        method: 'PATCH',
        body: JSON.stringify({ avatar: newAvatarLink })
    });
};

export const addNewCard = (name, link) => {
    return fetchData(`${baseURL}/cards`, {
        method: 'POST',
        body: JSON.stringify({ name, link })
    });
};

export const deleteCard = (cardId) => {
    return fetchData(`${baseURL}/cards/${cardId}`, {
        method: 'DELETE'
    });
};

export const toggleLike = (cardId, isLiked) => {
    const method = isLiked ? 'DELETE' : 'PUT';
    return fetchData(`${baseURL}/cards/likes/${cardId}`, { method })
        .then(updatedCard => {
            return updatedCard;
        });
};