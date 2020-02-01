var budget = prompt("budget?");
var name = prompt("name of shop?");

var mainList ={
	budget : budget,
	shopName : name,
	shopGoods : [],
	employers : {},
	open : false,
};


for(let i = 0; i<3; i++){
	let a = prompt('Какой тип товаров будем продавать?');
	mainList.shopGoods[i] = a;
};


alert('бюждет на 1 день составит ' + budget/30 + " " + 'dollars');
