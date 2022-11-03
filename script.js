const tentang = document.getElementById('tentang')
tentang.innerHTML = 'About Myself (menggunakan javascript)'

var Skill = document.querySelector('#skill');
var newElemen = document.createElement("h4");
var teksElemen = document.createTextNode('Skill (menggunakan javascript)');
newElemen.appendChild(teksElemen);
skill.appendChild(newElemen);

function mDown(obj) {
    obj.style.backgroundColor = "#eb1b00";
    obj.innerHTML = "Release Me";
  }
  
  function mUp(obj) {
    obj.style.backgroundColor="#eb1b00";
    obj.innerHTML="Terima Kasih";
  }