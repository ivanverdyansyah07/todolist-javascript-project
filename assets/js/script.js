const inputTask = document.querySelector('.card-input');
const buttonTask = document.querySelector('.card-button');
const listTask = document.querySelector('.card-task');

buttonTask.addEventListener('click', function() {
    if(inputTask.value === '') {
        alert('Please input task!');
    } else {
        let listItem = document.createElement('li');
        listItem.innerHTML = inputTask.value;
        listTask.appendChild(listItem);

        let removeItem = document.createElement('span');
        removeItem.innerHTML = '\u00d7';
        listItem.appendChild(removeItem);
    }
    inputTask.value = '';
    saveData();
});

listTask.addEventListener('click', function(e) {
    if(e.target.tagName === 'LI') {
        e.target.classList.toggle('checked');
        saveData();
    } else if(e.target.tagName === 'SPAN') {
        e.target.parentElement.remove();
        saveData();
    }
}, false);

function saveData() {
    localStorage.setItem("data", listTask.innerHTML);
}

function showTask() {
    listTask.innerHTML = localStorage.getItem("data");
}

showTask();