console.log('тапшырма 1');

for (let i = 0; i < 101; i++) {
  console.log(i);
}


console.log('тапшырма 2');

for (let i = 1; i <= 100; i++) {
  i++
  console.log(i);
}



console.log('тапшырма 3');

let cum = 0;
for (let i = 0; i <= 100; i++) {
  cum += i
}
console.log(cum);



console.log('тапшырма 4');

const nums = [10, 20, 30]
nums[2] = 99
console.log(nums);


console.log('тапшырма 5');

let random = [1, 20, 22, 24, 5];

let numberRandom = () => {
  return random[random.length - 1];
};
console.log(numberRandom());


console.log('тапшырма 6');

for (let i = 5; i > 0; i--) {
  console.log(i);
}


console.log('тапшырма 7');

let a = 1
while (a <= 100) {
  console.log(a);
  a++
}


console.log('тапшырма 8');

let numbe = 0
while (numbe < 100) {
  console.log(numbe);
  numbe++
  numbe++
}


console.log('тапшырма 9');

let arrays = [2, 3, 4, 5, 6];
let newArray = arrays.map((x) => x + 1);
console.log(newArray);



console.log('тапшырма 10');

function addNum(array, num) {
  let result = [];

  for (let i = 0; i < array.length; i++) {
    result.push(array[i] + num);
  }

  return result;
}
let numbers = [1, 2, 3, 4, 5];

console.log(numbers);

let result = addNum(numbers, 2);

console.log(result);


console.log('тапшырма 11');

const strings = ["apple", "banana", "search", "orange", "grape"];

console.log(strings.includes("search"));



console.log('тапрышма 12');

let myFunction = (nums) => {
  let num = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > 0) {
      num++;
    }
  }
  return num;
};
let arra = [1, 3, 4, 5, -1, -5, -6];
let totalit = myFunction(arra);
console.log(totalit);



console.log('тапшырма 13');
let searchEgg = (eggs) => {
  let voidArray = [];
  for (let i = 0; i < eggs.length; i++) {
    if (eggs[i] === "egg") {
      continue;
    }
    voidArray.push(eggs[i]);
  }
  return voidArray;
};
let animal = ["egg", "dog", "cat"];

let resultt = searchEgg(animal);

console.log(resultt);
