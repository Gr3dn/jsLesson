var budget = prompt('Ваш бюждет?');
var name =  prompt('Название вашего магазина?');
var shopGoods1 = prompt('Какой тип товаров будем продавать?');
var shopGoods2 = prompt('Какой тип товаров будем продавать?');
var shopGoods3 = prompt('Какой тип товаров будем продавать?');
 var mainList = {
	budget : budget,
	name : name,
	shopGoods : [shopGoods1, shopGoods2, shopGoods3],
	employers : {},
	open : false,
}
alert('бюждет на 1 день составит ' + budget/30 + " " + 'dollars');# Daniil
