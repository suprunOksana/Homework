
const inputEL = document.getElementById('text');
const buttonEl = document.getElementById('button');
const listEl = document.getElementById('list');



buttonEl.onclick = () => {

    if (!inputEL.value) {
        return;
    }
    const li = document.createElement('li');
    const checkbox = document.createElement('input');
    const remove = document.createElement('button');
    const double = document.createElement('button');
    const date = document.createElement('span');

    li.textContent = inputEL.value;
    listEl.append(li);
    inputEL.value = '';

    date.append(new Date().toLocaleString());
    listEl.appendChild(date);


    checkbox.setAttribute("type", "checkbox");
    li.append(checkbox);
    checkbox.addEventListener('click', function () {
        li.classList.toggle('done');

    });


    remove.innerHTML = '[x]';
    li.append(remove);

    remove.addEventListener('click', function () {
        li.parentElement.removeChild(li);
        date.parentElement.removeChild(date);

    });

    double.innerHTML = 'dub';
    li.append(double);

    double.addEventListener('click', function () {
        listEl.appendChild(li.cloneNode(true));
        listEl.append(new Date().toLocaleString());
    });

}



