var open_Btn = document.getElementById('open-btn'); //1
//console.log(open_Btn);

var menu = document.getElementsByClassName('main-info'); //2.v1
//console.log(menu);

var kategorii1 = document.getElementsByClassName('name-value')[0]; //3.v2
var kategorii2 = document.getElementsByClassName('budget-value')[0];
var kategorii3 = document.getElementsByClassName('goods-value')[0];
var kategorii4 = document.getElementsByClassName('items-value')[0];
var kategorii5 = document.getElementsByClassName('employers-value')[0];
var kategorii6 = document.getElementsByClassName('discount-value')[0];
var kategorii7 = document.getElementsByClassName('isopen-value')[0];

var goods_item = document.getElementsByClassName('goods-item');



var buttons = document.getElementsByTagName('button'); //4
var calculate_btn = buttons[2];
var nanyat_btn = buttons[3];
var confirm_btn = buttons[1];


var tovar_area = document.querySelector('#items'); //5
var time_area = document.querySelector('#time');
var budget_area = document.querySelector('#budget');
var inputs = [tovar_area, time_area, budget_area];



var input7 = document.querySelectorAll('input')[7];  //6
var input8 = document.querySelectorAll('input')[8];
var input9 = document.querySelectorAll('input')[9];
var InPutS = [input7, input8, input9];
console.log(InPutS);