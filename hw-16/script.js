// 1

let a = 10;
console.log(a);



// 2

let floor = +prompt('номер квартиры')
if (floor <= 20) {
    console.log('1 кабат');
} else if (floor <= 48) {
    console.log('2 кабат');
} else if (floor <= 90) {
    console.log('3 кабат');
} else {
    console.log('квартира 90 го чейн');

}



// 3

let variable = +prompt('любое число')
if (variable <= 5) {
    console.log(true);
} else {
    console.log(false);
}




// 4

let day = +prompt()
if (day >= 6 && day <= 12) {
    console.log('доброе утро!');
} else if (day >= 13 && day <= 17) {
    console.log('добрый день!');
} else {
    console.log('Добрый вечер!');
}


// 5

let name = 'Nursultan'
console.log(`Кутмандуу кеч ${name} агай`);


// 6

let age = +prompt('напишите свой возраст для скидки')
if (age <= 6) {
    console.log('скидка 50%');
} else if (age >= 65) {
    console.log('скидка 50%');
} else {
    console.log('тилеке каршы скидка жок!');
}




// 7

let random = + Math.random()
if (random <= 0.5) {
    console.log('орел');
} else {
    console.log('решка');
}



// 8

const number = 7;

if (number % 2 === 0) {
    console.log('Число чётное');
} else {
    console.log('Число нечётное');
};

console.log('% деген оператор калдыгын чыгарат ,егер % калдыгы 0 болсо четный болот, ,башка учурда нечетный болот.');