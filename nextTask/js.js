var name_value = document.getElementsByClassName('name-value')[0],
	budget_value = document.getElementsByClassName('budget-value')[0],
	goods_value = document.getElementsByClassName('goods-value')[0],
	items_value = document.getElementsByClassName('items-value')[0],
	employers_value = document.getElementsByClassName('employers-value')[0],
	discount_value = document.getElementsByClassName('discount-value')[0],
	isopen_value = document.getElementsByClassName('isopen-value')[0],
	time_value = document.getElementById('time'),
	count_budget_value = document.getElementsByClassName('count-budget-value')[0],
	discountA = document.getElementsByClassName('discount')[0],
	
	open_btn = document.getElementById('open-btn'),
	goods_item_btn = document.getElementsByClassName('goods-item-btn')[0],
	count_budget_btn = document.getElementsByClassName('count-budget-btn')[0],
	hire_employers_btn = document.getElementsByClassName('hire-employers-btn')[0],

	choose_item = document.getElementById('items'),
	hire_employers_item = document.getElementsByClassName('hire-employers-item'),
	goods_item = document.getElementsByClassName('goods-item');


open_btn.addEventListener('click', () => {
	while( isNaN(money) || money == '' || money == null ){
			money = prompt("budget?");
		};
		budget_value.textContent = money;
		name_value.textContent = prompt("name of shop?").toUpperCase();
		time_value = 10;
		count_budget_value.value = budget_value.textContent;
});

goods_item_btn.addEventListener('click', () => {
	for (let i = 0; i < goods_item.length; i++ ){
		let a = goods_item[i].value;
		if ( a != null && a != ''){
			console.log('good');
			mainList.shopGoods[i] = a;
			tovar1[i] = a;
			produkt[i] = a; 
		}; 
	};
	goods_value.textContent = mainList.shopGoods;
});



var ask = false;
discountA.addEventListener('click', discountAsk);
	function discountAsk(){
		ask = prompt('Будут ли скидки?      true - Да, false - нет' ,'false');
		if(ask === 'true'){
			ask = true;
			discount_value.style.backgroundColor = "lime";
		}else{
			ask = false;
			discount_value.style.backgroundColor = "red";
		};
	};

hire_employers_btn.addEventListener('click', () => {
	for (let i = 0; i < hire_employers_item.length; i++ ){
		let a = hire_employers_item[i].value;
			if ( a != null && a != ''){
				mainList.employers[i] = a;
			}; 
	};
	employers_value.textContent = mainList.employers;
});


time_value.addEventListener('change', (event) =>{
			if(time_value.value < 0){
				console.log("It is not real!");
				sopen_value.style.backgroundColor = 'red';

			} else if(time_value.value > 8 && time_value.value < 20){
				isopen_value.style.backgroundColor = 'lime';

			}else if(time_value.value >= 20 || time_value.value<= 8){
				isopen_value.style.backgroundColor = 'red';
				console.log("go to sleep");

			}else if(time_value.value > 24){
				isopen_value.style.backgroundColor = 'red';
				console.log("only 24 hours!");
			};
});


count_budget_btn.addEventListener('click', () =>{
	let count = count_budget_value.value;
	if(ask === true && count != '' && count != null){
		alert(count / 30 * 0.8);
	}else if(ask === false && count != '' && count != null){
		alert(count / 30 );
	};
});


choose_item.addEventListener('change', () => {
	let item = choose_item.value
	if(isNaN(item) && item != ''){
		mainList.shopItem = item;
		mainList.shopItem.split(',');
		mainList.shopItem.sort();
		items_value.textContent = mainList.shopItem;
	}
	
});

var tovar1 = [],
	produkt = {},
	money,
	name,
	time,
	prise

var mainList = {
	budget : money,
	shopName : name,
	shopGoods : [],
	employers : [],
	open : false,
	discount : false,
	shopItem: [],
	makeDiscount: function makeDiscount(){
				if(mainList.discount == true){
					prise = prise*0.8;
				};
			},
	produkt2: function produkt2() { for (let key in produkt){
			console.log("Наш магазин включает в себя: " + key + " " + produkt[key]);
		}},
	tovar2: function tovar2(){
		tovar1.forEach (function (item, i, shopGoods){
	 console.log("У нас вы можете купить: " + i + ' ' + item);
});
	}
};
mainList.produkt2();
mainList.tovar2();
