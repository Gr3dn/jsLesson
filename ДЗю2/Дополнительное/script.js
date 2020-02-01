			//1
let t = 5; 
 alert(t++);		//Выводит число 5
 console.log(t);    //Выводит число 6

 					//2
var a = [" "];
console.log(a + false + true - null); //Вывод NaN

					//3
let y = 1; 
let x = y = 2; 		
alert(x);			//Вывод 2
					
					//4
console.log(a + 1 + 2); //Vuvod [пустота]12
			

					//5
alert( "1"[0] );       //Vuvod 1[пустота = 0]

					//6
console.log(2 && 1 && null && 0 && undefined);    //Vuvod 'null'

					//7
let a = 0;
let b = 0;
alert(!!( a && b )); //Vuvod "false"

					//8
alert( null || 2 && 3 || 4 );

					//9
var a = [1, 2, 3]; 
var b = [1, 2, 3];
console.log(a != b);  //Vuvod 'false'

					//10
alert( +"Infinity" );  //Vuvod 'Infinity'

					//11
console.log("ёжик" > "яблоко");   //Vuvod 'true'

					//12
console.log( 0 || "" || 2 || undefined || true || falsе);    //Vuvod 2
