(()=>{"use strict";var e={p:"/"};const t=e.p+"images/logo.fc3e6875d825f899a98d.svg",n=e.p+"images/avatar.6666407ac3aa5af1d5de.jpg";function r(e){Array.from(document.querySelectorAll(e.formSelector)).forEach((function(t){t.addEventListener("submit",(function(e){e.preventDefault()})),function(e,t){var n=Array.from(e.querySelectorAll(t.inputSelector)),r=e.querySelector(t.submitButtonSelector);o(n,r,t),n.forEach((function(c){c.addEventListener("input",(function(){!function(e,t,n){e.validity.valid?function(e,t,n){var r=t.querySelector(".".concat(n.errorClass,"_").concat(e.name));e.classList.remove(n.inputErrorClass),r.classList.remove(n.errorClassActive),r.textContent=""}(e,t,n):function(e,t,n){var r=t.querySelector(".".concat(n.errorClass,"_").concat(e.name));e.classList.add(n.inputErrorClass),r.textContent=e.validationMessage,r.classList.add(n.errorClassActive)}(e,t,n)}(c,e,t),o(n,r,t)}))}))}(t,e)}))}function o(e,t,n){!function(e){return e.some((function(e){return!e.validity.valid}))}(e)?(t.removeAttribute("disabled"),t.classList.remove(n.inactiveButtonClass)):(t.setAttribute("disabled",!0),t.classList.add(n.inactiveButtonClass))}function c(e){return c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},c(e)}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t,n){return(t=function(e){var t=function(e,t){if("object"!=c(e)||!e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,t||"default");if("object"!=c(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==c(t)?t:t+""}(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var l="https://mesto.nomoreparties.co/v1/".concat("frontend-st-cohort-201"),s={headers:{authorization:"4913f45c-7db5-4f16-abdf-98af6d1d3194","Content-Type":"application/json"}},p=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return fetch(e,u(u({},s),t)).then((function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status," - ").concat(e.statusText))})).catch((function(e){console.error(e),alert("Произошла ошибка. Попробуйте позже.")}))};function d(e,t,n){var r=document.querySelector("#card-template").content.cloneNode(!0).firstElementChild,o=r.querySelector(".card__image"),c=r.querySelector(".card__title"),i=r.querySelector(".card__like-button"),u=r.querySelector(".card__like-count"),a=r.querySelector(".card__delete-button");return o.src=e.link,o.alt=e.name,c.textContent=e.name,u.textContent=e.likes.length,e.owner._id===n?a.style.display="block":a.style.display="none",e.likes.some((function(e){return e._id===n}))?i.classList.add("card__like-button_is-active"):i.classList.remove("card__like-button_is-active"),i.addEventListener("click",(function(){var t=i.classList.contains("card__like-button_is-active");(function(e,t){var n=t?"DELETE":"PUT";return p("".concat(l,"/cards/likes/").concat(e),{method:n}).then((function(e){return e}))})(e._id,t).then((function(t){e=t,u.textContent=e.likes.length,e.likes.some((function(e){return e._id===n}))?i.classList.add("card__like-button_is-active"):i.classList.remove("card__like-button_is-active")})).catch(console.error)})),a.addEventListener("click",(function(){var t;(t=e._id,p("".concat(l,"/cards/").concat(t),{method:"DELETE"})).then((function(){return r.remove()})).catch(console.error)})),o.addEventListener("click",(function(){t(e)})),r}function f(e){e.classList.add("popup_is-animated","popup_is-opened"),e.style.visibility="visible",e.style.opacity="1",document.addEventListener("keydown",_)}function y(e){e.classList.remove("popup_is-opened"),e.style.opacity="0",setTimeout((function(){e.style.visibility="hidden",e.classList.remove("popup_is-animated")}),600),document.removeEventListener("keydown",_)}function _(e){if("Escape"===e.key){var t=document.querySelector(".popup_is-opened");t&&y(t)}}function m(e){e.addEventListener("click",(function(t){(t.target===e||t.target.classList.contains("popup__close"))&&y(e)}))}function v(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,c,i,u=[],a=!0,l=!1;try{if(c=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;a=!1}else for(;!(a=(r=c.call(n)).done)&&(u.push(r.value),u.length!==t);a=!0);}catch(e){l=!0,o=e}finally{try{if(!a&&null!=n.return&&(i=n.return(),Object(i)!==i))return}finally{if(l)throw o}}return u}}(e,t)||function(e,t){if(e){if("string"==typeof e)return b(e,t);var n={}.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?b(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function b(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}var S=document.querySelector(".places__list"),h=document.querySelector(".profile__image"),g=document.querySelector(".popup_type_edit"),q=document.querySelector(".popup_type_new-card"),C=document.querySelector(".popup_type_edit-avatar"),k=document.querySelector(".profile__edit-button"),E=document.querySelector(".profile__add-button"),L=document.querySelector('.popup__form[name="edit-profile"]'),O=document.querySelector('.popup__form[name="new-place"]'),j=C.querySelector('.popup__form[name="edit-avatar"]'),x=L.querySelector(".popup__input_type_name"),w=L.querySelector(".popup__input_type_description"),A=O.querySelector(".popup__input_type_place-name"),P=O.querySelector(".popup__input_type_link"),D=j.querySelector(".popup__input_type_avatar-link"),T=document.querySelector(".popup_type_image"),I=T.querySelector(".popup__image"),B=T.querySelector(".popup__caption"),N=null;document.addEventListener("DOMContentLoaded",(function(){document.querySelector(".logo").src=t,h.style.backgroundImage="url(".concat(n,")");r({formSelector:".popup__form",inputSelector:".popup__input",submitButtonSelector:".popup__button",inactiveButtonClass:"popup__button_disabled",inputErrorClass:"popup__input_type_error",errorClass:"popup__error_type",errorClassActive:"popup__error_active"}),Promise.all([p("".concat(l,"/users/me")),p("".concat(l,"/cards"))]).then((function(e){var t=v(e,2),n=t[0],r=t[1];N=n._id,document.querySelector(".profile__title").textContent=n.name,document.querySelector(".profile__description").textContent=n.about,h.style.backgroundImage="url(".concat(n.avatar,")"),r.forEach((function(e){S.append(d(e,J,N))}))})).catch((function(e){console.error("Ошибка при загрузке данных:",e),alert("Не удалось загрузить данные. Попробуйте позже.")})),k.addEventListener("click",(function(){x.value=document.querySelector(".profile__title").textContent,w.value=document.querySelector(".profile__description").textContent,f(g),m(g)})),L.addEventListener("submit",(function(e){e.preventDefault();var t,n,r=x.value,o=w.value,c=L.querySelector(".popup__button");c.textContent="Сохранение...",(t=r,n=o,p("".concat(l,"/users/me"),{method:"PATCH",body:JSON.stringify({name:t,about:n})})).then((function(){document.querySelector(".profile__title").textContent=r,document.querySelector(".profile__description").textContent=o,y(g)})).catch(console.error).finally((function(){return c.textContent="Сохранить"}))})),E.addEventListener("click",(function(){f(q),m(q)})),O.addEventListener("submit",(function(e){e.preventDefault();var t,n,r=A.value,o=P.value,c=O.querySelector(".popup__button");c.textContent="Сохранение...",(t=r,n=o,p("".concat(l,"/cards"),{method:"POST",body:JSON.stringify({name:t,link:n})})).then((function(e){S.prepend(d(e,J,N)),O.reset(),y(q)})).catch(console.error).finally((function(){return c.textContent="Сохранить"}))}));var e=document.querySelector(".profile__edit-avatar");e?e.addEventListener("click",(function(){f(C),m(C)})):console.error("Иконка редактирования аватара не найдена!"),j.addEventListener("submit",(function(e){e.preventDefault();var t=D.value,n=j.querySelector(".popup__button");n.textContent="Сохранение...",function(e){return p("".concat(l,"/users/me/avatar"),{method:"PATCH",body:JSON.stringify({avatar:e})})}(t).then((function(){h.style.backgroundImage="url(".concat(t,")"),j.reset(),y(C)})).catch(console.error).finally((function(){return n.textContent="Сохранить"}))}));var o=T.querySelector(".popup__close");o?o.addEventListener("click",(function(){y(T)})):console.error("Кнопка закрытия попапа с изображением не найдена!"),T.addEventListener("click",(function(e){e.target===T&&y(T)}))}));var J=function(e){I.src=e.link,I.alt=e.name,B.textContent=e.name,f(T)}})();