const tentang = document.getElementById('tentang')
tentang.innerHTML = 'About Myself (menggunakan javascript)'

let newElement = document.createElement('p');
newElement.innerHTML = 'skill (menggunakan javascript)';
console.log(newElement);
let newClass = document.querySelector('#skill');
newClass.appendChild(newElement);

function movin(obj) {
    obj.innerHTML = "Taraaa makjreng"
  }  
function movout(obj) {
    obj.innerHTML = "Arahkan Kursor Kesini"
  }