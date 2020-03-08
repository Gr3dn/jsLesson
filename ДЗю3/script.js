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
};



function chooseGoods(){
	for (let i = 0; i < 3; i++ ){
		var a = prompt("What do you want sale?");
		if ( (typeof(a)) === 'string' && (typeof(a)) != null && 
			a.length < 50 && a != '' ){
			 console.log('good');
			 mainList.shopGoods[i] = a;
			 tovar1[i] = a;
			 produkt = a; 
		} else{
			i = i - 1;
			alert("Rewrite your sales!");
		};
		
	};
};
chooseGoods();

for (let key in produkt){
	console.log("Наш магазин включает в себя: " + key + " " + produkt);
};

tovar1.forEach (function (item, i, shopGoods){
	 console.log("У нас вы можете купить: " + i + ' ' + item);
});

function workTime(time){
		if(time < 8){
		console.log("It is not real!");
	} else if(time > 8 && time < 20){
		console.log('Welcome!');
	}else if(time > 20){
		console.log("go to sleep");
	}else if(time > 24){
		console.log("only 24 hours!");
	};
};					
workTime(time);

function makeDiscount(){
	if(mainList.discount == true){
		prise = prise*0.8;
	};
};
makeDiscount();

function hireEmployers(){
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
	
};
hireEmployers();
alert('Ваш дневной бюджет на день: ' + mainList.budget / 30);