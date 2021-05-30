
const inputEL = document.getElementById('text');
const buttonEl = document.getElementById('button');
const listEl = document.getElementById('list');



buttonEl.onclick = () => {
    if (!inputEL.value) {
        return;
    }
    const liEl = document.createElement('li');
    liEl.textContent = inputEL.value;
    listEl.append(liEl);
    inputEL.value = '';
}
