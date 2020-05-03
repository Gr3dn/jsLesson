var poryadok = document.querySelectorAll('li');  //1
//console.log(poryadok);
var item3 = poryadok[1];
var item2 = poryadok[2];
var ul = document.getElementsByClassName('menu');
ul[0].replaceChild(item3, item2);
ul[0].insertBefore(item2, item3);
//console.log(ul);

var li = document.createElement('li');
ul[0].appendChild(li);
li.classList.add('menu-item');
li.innerText = "5й пункт";

var url = document.querySelectorAll('body');
//console.log(url);
document.body.style.background = 'url(img/apple_true.jpg) center no-repeat';
var title = document.getElementById('title');
//console.log(title);
title.innerHTML = 'Мы продаем только подлиную технику Apple';

var div = document.getElementsByClassName('adv');
var colum = document.getElementsByClassName('column');
colum[1].removeChild(div[0]);

var otvet = prompt('Как вы относитесь к нехнике Apple?', '');
var promp = document.getElementsByClassName('prompt');
promp[0].innerHTML = otvet;
