

const inputEL = document.getElementById('login');
const passwordEl = document.getElementById('password');
const buttonEl = document.getElementById('button');
const formEl = document.getElementById('form');
const messageEl = document.getElementById('message');


const correctForm = function () {
    if (inputEL.value && passwordEl.value) {
        buttonEl.removeAttribute('disabled')
    }
    else {
        buttonEl.setAttribute('disabled', 'disabled')
    }
}

inputEL.addEventListener('input', correctForm);
passwordEl.addEventListener('input', correctForm);

const checktForm = function () {
    if (inputEL.value === 'admin' && passwordEl.value === 'password123') {
        formEl.hidden = true;
        messageEl.classList.remove('message');
        messageEl.classList.add('style');
    } else {
        alert('Неверные данные! Попробуйте еще раз!');
        inputEL.value = '';
        passwordEl.value = '';
    }

}

buttonEl.addEventListener('click', checktForm);

