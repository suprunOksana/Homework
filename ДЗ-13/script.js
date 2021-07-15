

function Accordion(element) {

  this.element = element;
  this.toggle = toggleItem;
  this.addBlock = addBlock;
  this.getOpenIndexes = getOpenIndexes;
  this.closeAll = closeAll;
  this.openAll = openAll;
  this.addBlockValue = addBlockValue;

  this._onItemClick = function (e) {
    e.target.parentElement.classList.toggle('active');
  };

  this.element.addEventListener('click', this._onItemClick);

}

const btnAdd = document.querySelector('.add');
const btnIndex = document.querySelector('.index');
const btnClose = document.querySelector('.close');
const bthOpen = document.querySelector('.open');
const titleEL = document.querySelector('.input-el');
const textEL = document.querySelector('.text-el');


function toggleItem(index) {
  this.element.children[index].classList.toggle('active');

}

function addBlock(title, text) {

  this.element.insertAdjacentHTML('beforeEnd', `<div class="block">
  <h2 class="title">${title}</h2>
  <span class="text">${text}</span>
</div>`);

}

function addBlockValue() {
  btnAdd.onclick = () => {

    mainAccordion.addBlock(titleEL.value, textEL.value);

  }
}

function getOpenIndexes() {
  const activeEl = this.element.querySelectorAll('.block');
  const result = [];
  for (i = 0; i < activeEl.length; i++) {
    if (activeEl[i].classList.contains('active')) {
      result.push(i);
    }
  }
  console.log(result);
  return result;

}

function closeAll() {
  this.element.querySelectorAll('.block').forEach((e) => {
    e.classList.remove('active');
  });
}

function openAll() {
  this.element.querySelectorAll('.block').forEach((e) => {
    e.classList.add('active');
  });
}

const mainAccordion = new Accordion(document.getElementById('accordion'));



bthOpen.addEventListener('click', openAll.bind(mainAccordion));
btnClose.addEventListener('click', closeAll.bind(mainAccordion));
btnAdd.addEventListener('click', addBlockValue(mainAccordion));
btnIndex.addEventListener('click', getOpenIndexes.bind(mainAccordion));



