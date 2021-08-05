
const inputEL = document.getElementById('login');
const passwordEl = document.getElementById('password');
const buttonEl = document.getElementById('button');
const formEl = document.getElementById('form');
const messageEl = document.getElementById('message');
const userListEl = document.getElementById('list');
const userListTempl = document.getElementById('user-list');

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
        passwordEl.value).then(e => {
            formEl.hidden = true;
            messageEl.classList.remove('message');
            messageEl.classList.add('style');
        }).catch(e => {
            alert('Неверные данные! Попробуйте еще раз!');
            inputEL.value = '';
            passwordEl.value = '';
        }).then(() => {
            return getUsersList();
        }).then(e => {
            return e.json();
        }).then(response => {
            const usersInfo = userListTempl.innerHTML;
            response.data.forEach(e => {
                let listLiEl = document.createElement("li");
                listLiEl.innerHTML = usersInfo.replaceAll("{{avatar}}", e.avatar).replaceAll("{{first_name}}", e.first_name).replaceAll("{{last_name}}", e.last_name);
                userListEl.appendChild(listLiEl);
            });
            return response;
        }).catch(e => {
            alert('Список пользователей не доступен');
        });
}

const getUsersList = () => {
    return fetch('https://reqres.in/api/users?page=1');
};

const sendForm = (login, password) => {

    const formData = JSON.stringify({
        email: login,
        password: password
    });
    return new Promise((resolve, reject) => {

        const xhr = new XMLHttpRequest();
        xhr.open('POST', 'https://reqres.in/api/login');
        xhr.setRequestHeader('content-type', 'application/json');
        xhr.send(formData);

        xhr.onload = function () {
            if (xhr.status == 200) {
                resolve();
            } else {
                reject();
            }
        };

    });

};

inputEL.addEventListener('input', correctForm);
passwordEl.addEventListener('input', correctForm);
buttonEl.addEventListener('click', checktForm);

