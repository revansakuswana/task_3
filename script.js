const tentang = document.getElementById('tentang')
tentang.innerHTML = 'About Myself (menggunakan javascript)'

var Skill = document.querySelector('#skill');
var newElemen = document.createElement("h4");
var teksElemen = document.createTextNode('Skill (menggunakan javascript)');
newElemen.appendChild(teksElemen);
skill.appendChild(newElemen);

function mDown(obj) {
    obj.style.backgroundColor = "#1ec5e5";
    obj.innerHTML = "Release Me";
  }
  
  function mUp(obj) {
    obj.style.backgroundColor="#D94A38";
    obj.innerHTML="Terima Kasih";
  }