/*var budget = prompt('Ваш бюждет?');
var name =  prompt('Название вашего магазина?');
var shopGoods1 = prompt('Какой тип товаров будем продавать?');
var shopGoods2 = prompt('Какой тип товаров будем продавать?');
var shopGoods3 = prompt('Какой тип товаров будем продавать?');
 var mainList = {
	budget : budget,
	name : name,
	shopGoods : [shopGoods1, shopGoods2, shopGoods3],
	employers : {},
}
alert('бюждет на 1 день составит ' + budget/30 + " " + 'dollars');# Daniil*/
var num = 33721;
		num1 = Math.floor(num / 10000);
		num2 = Math.floor(num / 1000 % 10);
		num3 = Math.floor(num / 100 % 100 % 10);
		num4 = Math.floor(num / 10 % 1000 % 100 % 10);
		num5 = num % 10000 % 1000 % 100 % 10;


var num6 = num1 * num2 * num3 * num4 * num5; 
console.log(num6);
