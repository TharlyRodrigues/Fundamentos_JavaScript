/*Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula: BMI = mass / (height * height) (mass in kg and height in meters).

 Your task is to write some code to help them:

 Store Mark's and John's mass and height in variables called massMark, heightMark, massJohn and heightJohn.

 Calculate both their BMIs using the formula, and store the results in two variables called BMIMark and BMIJohn.

Log the value of BMIMark and BMIJohn to the console.

BONUS: Create a boolean variable markHigherBMI containing information about whether Mark has a higher BMI than John. Log it to the console too

TEST DATA: Marks weighs 78 kg and is 1.69 m tall. John weighs 92 kg and is 1.95 m tall.

// const massMark = 78;
// const heightMark = 1.69;
// const massJohn = 92;
// const heightJohn = 1.95;

const massMark = 95;
const heightMark = 1.88;
const massJohn = 85;
const heightJohn = 1.76;

const BMIMark = massMark / heightMark ** 2;
const BMIJohn = massJohn / (heightJohn * heightJohn);
const markHigherBMI = BMIMark > BMIJohn;

console.log(BMIMark, BMIJohn, markHigherBMI);


DESAFIO #2
Use o exemplo de IMC do Desafio #1 e o código que você já escreveu e melhore-o:

1. Imprima uma boa saída para o console, dizendo ao usuário quem tem o IMC mais alto. A mensagem pode ser:

"O IMC de Mark é maior do que o de John!" ou "O IMC de John é maior do que o de Mark!".

2. Modifique as saídas acima para usar literais de modelo para incluir os valores de IMC nas saídas.

Exemplo: "O IMC de Marcos (28,3) é maior que o de João (23,9)!" ou "O IMC de João (29,1) é maior que o de Marcos (27)!".

Nota: Não arredondar os valores de IMC. Deixe-os como estão.

👋 OPCIONAL: Você pode assistir minha solução em formato de vídeo na próxima palestra

IMPORTANTE: O operador ** não é suportado neste editor. Por favor, certifique-se de usar exatamente esta fórmula massa / (altura * altura), e não esta massa / (altura ** 2). 


const massMark = 95;
const heightMark = 1.88;
const massJohn = 85;
const heightJohn = 1.76;

const BMIMark = massMark / heightMark ** 2;
const BMIJohn = massJohn / (heightJohn * heightJohn);
console.log(BMIMark, BMIJohn);

if (BMIMark > BMIJohn) {
  console.log(`Mark's BMI (${BMIMark}) is higher than john's (${BMIJohn})!`);
} else {
  console.log(`John's BMI (${BMIJohn}) is higher than Mark's (${BMIMark})!`);
}*/
