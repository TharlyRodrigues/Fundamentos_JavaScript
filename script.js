/*
let js = "amazing";
console.log(40 + 8 + 23 - 10);

console.log("tharly e tamires");
console.log(23);

let firstName = "tharly";
console.log(firstName);
console.log(firstName);
console.log(firstName);

let javaScriptIsFun = true;
console.log(javaScriptIsFun);

// console.log(typeof true);
console.log(typeof javaScriptIsFun);
// console.log(typeof 23);
// console.log(typeof "Tharly");

javaScriptIsFun = "Yes!";
console.log(typeof javaScriptIsFun);

// identificando valores nulos
let year;
console.log(year);
console.log(typeof year);

year = 1995;
console.log(typeof year);

// bug
console.log(typeof null);

// Use const sempre que possível, pois isso torna seu código mais seguro e fácil de entender, já que você não precisa se preocupar com reatribuições acidentais
// Use let apenas quando souber que a variável precisará ser reatribuída.
// É importante notar que o escopo de bloco do let e const ajuda a evitar vazamentos de variáveis e contribui para um código mais seguro. Além disso, o uso de const para valores que não serão reatribuídos é uma prática recomendada para tornar o código mais previsível e menos propenso a erros

let age = 30;
age = 31;


const birthYear = 1995;
// birthYear = 1994;

const job;

var job = "programmer";
job = "teacher";

// operadores em JavaScript

const now = 2037;
const ageTharly = now - 1995;
const ageTamires = now - 2020;
console.log(ageTharly, ageTamires);

console.log(ageTharly * 2, ageTamires / 2, 2 ** 3);
// 2 ** 3 meio 2 para poder de 3 = 2 * 2 * 2

const firstName = "tharly";
const lastName = "Rodrigues";
console.log(firstName + " " + lastName);

let x = 10 + 5; // 15
x += 10; //  x = x + 10 = 25
x *= 4; // x = x * 4 = 100
x++; // x = x + 1
x--; // x = x - 1
x--;
console.log(x);

// comparação de Operadores
console.log(ageTharly > ageTamires); // >, <, >=, <=;
console.log(ageTamires >= 17);

const isFullAge = ageTamires >= 17; // verificar a idade é igual ou maior q 19 anos;
console.log(now - 1995 > now - 2020);


const now = 2037;
const ageTharly = now - 1995;
const ageTamires = now - 2020;
console.log(now - 1995 > now - 2020);

console.log(25 - 10 - 5);

let x, y;
x = y = 25 - 10 - 5; // x = y = 10;
console.log(x, y);

const averageAge = ageTharly + ageTamires / 2;
console.log(ageTharly, ageTamires, averageAge);



const firstName = "Jonas";
const job = "teacher";
const birthYear = 1991;
const year = 2037;

const jonas =
  "I'm " + firstName + ", a " + (year - birthYear) + " years old " + job + "!";
console.log(jonas);

const jonasNew = `i'm ${firstName}, a ${year - birthYear} year old ${job}!`;
console.log(jonasNew);
console.log(`Just a regular string...`);

console.log(`string with \n\
multiple \n\
lines`);

console.log(`string
multiple
lines`);


// controle
const age = 15;
const isOldEnough = age >= 18;

if (isOldEnough) {
  console.log(`sarah can start driving license 🚗`);
} else {
  const yearsLeft = 18 - age;
  console.log(`Sarah is too young. Wait another ${yearsLeft} years :)`);
}

const birthYear = 2012;

let century;
if (birthYear <= 2000) {
  century = 20;
} else {
  century = 21;
}

console.log(century);


// convertendo string em numeros;

const inputYear = 1995;
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18);

console.log(Number("jonas"));
console.log(typeof NaN);

console.log(String(23), 23);

console.log("I am " + 23 + " years old");
console.log("I am " + 23 + " years old");
console.log("20" - "10" - 3);
console.log("20" * "2");
console.log("23" / "2");

let n = "1" + 1; // 11
n = n - 1;
console.log(n);


console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean("jonas"));
console.log(Boolean({}));

const money = 100;
if (money) {
  console.log("Donn't spend it all");
} else {
  console.log("you should get a job");
}

let height = 0;
if (height) {
  console.log("YAY ! height is defined");
} else {
  console.log("height is UNDEFINED");
}

const age = "18";
if (age === 18) console.log("you just became an adult :D (strict)");
if (age == 18) console.log("you just became an adult :D (loose)");


const favourite = Number(prompt("what's you favourite number?"));
console.log(favourite);
console.log(typeof favourite);

if (favourite === 23) {
  console.log("cool! 23 is an amzaing number!");
} else if (favourite === 7) {
  console.log("7 is also a cool number!");
} else if (favourite === 9) {
  console.log("9 is also a cool number!");
} else {
  console.log("number is not 23 or 7 or 9");
}
if (favourite !== 23) console.log("why not  23");


const hasDriversLicense = true;
const hasGoodVision = true;

console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);
console.log(!hasGoodVision);

// if (hasDriversLicense && hasGoodVision) {
//   console.log("sarah is able to drive");
// } else {
//   console.log("someone else should drive");
// }

const isTired = true;
console.log(hasDriversLicense && hasGoodVision && isTired);
if (hasDriversLicense && hasGoodVision && !isTired) {
  console.log("sarah is able to drive");
} else {
  console.log("someone else should drive");
}

// let isTrue = true;
// let isFalse = false;

// console.log(isTrue && isFalse); // false (true se ambos são true)
// console.log(isTrue || isFalse); // true (true se pelo menos um é true)
// console.log(!isTrue);            // false (negação lógica)
*/
