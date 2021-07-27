
const inputEL = document.getElementById('login');
const passwordEl = document.getElementById('password');
const buttonEl = document.getElementById('button');
const formEl = document.getElementById('form');
const messageEl = document.getElementById('message');

function correctForm() {
    if (inputEL.value && passwordEl.value) {
        buttonEl.removeAttribute('disabled')
    }
    else {
        buttonEl.setAttribute('disabled', 'disabled')
    }
}


const checktForm = (evt) => {
    evt.preventDefault();
    sendForm(inputEL.value,
        passwordEl.value,
        function () {
            formEl.hidden = true;
            messageEl.classList.remove('message');
            messageEl.classList.add('style');
        },
        function () {
            alert('Неверные данные! Попробуйте еще раз!');
            inputEL.value = '';
            passwordEl.value = '';
        });

};


function sendForm(login, password, success, fault) {

    const formData = JSON.stringify({
        email: login,
        password: password
    });

    const xhr = new XMLHttpRequest();
    xhr.open('POST', 'https://reqres.in/api/login');
    xhr.setRequestHeader('content-type', 'application/json');
    xhr.send(formData);

    xhr.onload = function () {
        if (xhr.status == 200) {
            success();
        } else {
            fault();
        }
    };

}

inputEL.addEventListener('input', correctForm);
passwordEl.addEventListener('input', correctForm);
buttonEl.addEventListener('click', checktForm);

