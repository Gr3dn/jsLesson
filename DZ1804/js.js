var tovar1 = [];
var produkt = {};
let money,
	name,
	time,
	prise



function start() {
	while( isNaN(money) || money == '' || money == null ){
		money = prompt("budget?");
	};
	
	name = prompt("name of shop?").toUpperCase();
	time = 10;
};
start();


var mainList = {
	budget : money,
	shopName : name,
	shopGoods : [],
	employers : {},
	open : false,
	discount : false,
	chooseGoods: function chooseGoods(){
				for (let i = 0; i < 3; i++ ){
					var a = prompt("What do you want sale?");
						 if (a >= 0){
							i = i - 1;
							alert("Rewrite your sales!");
						} else if (a <=0){
							i = i - 1;
							alert("Rewrite your sales!");
						} else if ( (typeof(a)) === 'string' && (typeof(a)) != null && 
							a.length < 50 && a != ''){

							 console.log('good');
							 mainList.shopGoods[i] = a;
							 tovar1[i] = a;
							 produkt[i] = a; 
						} else{
							i = i - 1;
							alert("Rewrite your sales!");
						};
						
					};
				},
	workTime: function workTime(time){
				if(time < 0){
					console.log("It is not real!");
				} else if(time > 8 && time < 20){
					console.log('Welcome!');
				}else if(time >= 20 || time <= 8){
					console.log("go to sleep");
				}else if(time > 24){
					console.log("only 24 hours!");
				};
			},
	makeDiscount: function makeDiscount(){
				if(mainList.discount == true){
					prise = prise*0.8;
				};
			},
	hireEmployers: function hireEmployers(){
				for (let i = 0; i < 3; i++) {
					let b = prompt('employers name', '');
					if ( (typeof(b)) === 'string' && (typeof(b)) != null && 
						b.length < 50 && b != '' ){
						 mainList.employers[i] = b;
					}else{
						i = i - 1;
						alert("You have misteke!");
					};
				};
				
			},
};
mainList.chooseGoods();

for (let key in produkt){
	console.log("Наш магазин включает в себя: " + key + " " + produkt[key]);
};
console.log(mainList.produkt);
tovar1.forEach (function (item, i, shopGoods){
	 console.log("У нас вы можете купить: " + i + ' ' + item);
});
alert('Ваш дневной бюджет на день: ' + mainList.budget / 30);

/*let options = {
	name: "test",
	widht: "1024",
	height: "1024"
};
options.bool = false;

options.colors ={
	border: 'black',
	backgroung: 'red'
};
delete options.bool;

for (let key in options) {
	console.log('свойство' + key + ' имеет значение ' + options[key])
};*/
//console.log(Object.keys(options).length);


/*first.pop();			//последний

first.push('Maxim');	// + в конец

first.shift();		// удаление первого

first.unshift(6)		// + в нацчало


for (let i = 0; i < first.length; i++) {
	alert(arr[i]);
};

first[99] = 99;
console.log(first.length);

first.forEach(function (item, i, arr) {
	console.log(i + ': ' + item '(массив ' + arr);
});


let first = ['ya', 'ne', 'dibil'];

let i = prompt("", "");

first = first.sort();
first = first.join('-');



















console.log(first);*/