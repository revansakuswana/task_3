//No 1
let changeText = document.querySelector('#tentang');
changeText.innerText = 'About Myself';

//No 2
let newElement = document.createElement('p');
newElement.innerHTML = 'skill (menggunakan javascript)';
console.log(newElement);
let newClass = document.querySelector('#skill');
newClass.appendChild(newElement);

//No 3
function ubahbg() {
    let randomColor = Math.floor(Math.random() * 16777215).toString(16);
    document.body.style.backgroundColor = "#" + randomColor;
}