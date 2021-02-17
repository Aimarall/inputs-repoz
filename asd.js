let list = ["banan", "apple", "orange", "pear"];

let ul = document.createElement('ul');
let button = document.querySelector('button');
let input = document.querySelector('input');

for (const key in list) {
    let li = returnListItem(list[key]);
    ul.append(li);
}

button.addEventListener('click', function (event) {
    if (input.value.trim()) {
        let li = returnListItem(input.value);
        input.value = '';
        ul.append(li);
    }
});

function returnListItem(text) {
    let li = document.createElement('li');
    let span = document.createElement('span');
    let button = document.createElement('button');

    span.innerText = text;
    span.style.cursor = 'pointer';
    button.innerText = '-';

    span.addEventListener('mousedown', function (event) {
        span.classList.toggle('done');
    });
    button.addEventListener('mousedown', function (event) {
        li.remove();
    });

    li.append(span);
    li.append(button);

    return li;
}

document.body.append(ul);