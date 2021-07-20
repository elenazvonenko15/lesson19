'use strict';

const $squareWrap = document.querySelector('.wrap');
const colorArray = ['blue', 'green', 'yellow'];
const startIndex = 0;

$squareWrap.addEventListener('click', (e) => {
    if (e.target.className === 'square') {
        if (!e.target.dataset.index || e.target.dataset.index >= colorArray.length) {
            e.target.dataset.index = startIndex;
        }
        e.target.style.backgroundColor = colorArray[e.target.dataset.index++];
        $squareWrap.append(e.target);
    }
});


function createTable() {
    const maxNumber = 100;
    const endIndex = 3;
    const $table = document.createElement('table');
    for (let i = startIndex; i < endIndex; i++) {
        const $row = document.createElement('tr');
        $table.append($row);
        for (let j = startIndex; j < endIndex; j++) {
            const $cell = document.createElement('td');
            $cell.innerText = Math.ceil(Math.random() * maxNumber);
            $row.append($cell);
        }
    }
    return $table;
}

$squareWrap.after(createTable());
const $table = document.querySelector('table');
const $textDiv = document.createElement('div');
$table.after($textDiv);

$table.addEventListener('click', (e) => {
    if (e.target.tagName === 'TD') {
        $textDiv.innerHTML = e.target.innerHTML;
    }
});

function toggleClass(element, className) {
    const arr = element.className.split(' ');
    const index = arr.indexOf(className);
    const falseIndex = -1;
    const deleteNumber = 1;
    index === falseIndex ? arr.push(className) : arr.splice(index, deleteNumber);
    element.className = arr.join(' ');
}

const $div = document.querySelector('.box');
toggleClass($div, 'shadow');