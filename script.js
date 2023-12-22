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

DESAFIO #2
Use o exemplo de IMC do Desafio #1 e o código que você já escreveu e melhore-o:

1. Imprima uma boa saída para o console, dizendo ao usuário quem tem o IMC mais alto. A mensagem pode ser:

"O IMC de Mark é maior do que o de John!" ou "O IMC de John é maior do que o de Mark!".

2. Modifique as saídas acima para usar literais de modelo para incluir os valores de IMC nas saídas.

Exemplo: "O IMC de Marcos (28,3) é maior que o de João (23,9)!" ou "O IMC de João (29,1) é maior que o de Marcos (27)!".

Nota: Não arredondar os valores de IMC. Deixe-os como estão.

👋 OPCIONAL: Você pode assistir minha solução em formato de vídeo na próxima palestra

IMPORTANTE: O operador ** não é suportado neste editor. Por favor, certifique-se de usar exatamente esta fórmula massa / (altura * altura), e não esta massa / (altura ** 2). 
*/
