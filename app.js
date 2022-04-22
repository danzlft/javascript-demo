let h1 = document.createElement('h1');
let span = document.createElement('span');

span.innerText = "Random text";
h1.appendChild(span);

h1.classList.add('custom-class');

document.body.append(h1);