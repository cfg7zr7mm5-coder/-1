document.addEventListener("DOMContentLoaded" , function(){
let str = 'abcde';
alert(str[0]);
alert([1]);
alert([4]);

let a = parseInt(prompt("Введите первое число:"));
let b = parseInt(prompt("Введите второе число:"));
console.log(a > 0 || b > 0); // true

let age = parseInt(prompt("Введите ваш возраст:"));
if (age >= 18) {
    console.log("Совершеннолетний");
} else {
    console.log("Несовершеннолетний");
}
});