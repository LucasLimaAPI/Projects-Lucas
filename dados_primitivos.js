// STRING,UNDEFINED,BOOLEAN,NUMBER,NULL,SYMBOL
const nome = 'Lucas'; // STRINGS 
const nome1 = "Lucas";
const nome2 = `Lucas`;

const num = 10;//NUMBER
const num1 = 1.11;

let nomeAluno; // Nao  aponta p local nenhum na memoria 
const sobrenomeAluno = null; // NULO => Nao aponta local para nenhuma memoria
const aprovado = true; //True or False =  boolean (valor lógico)

const a = [1, 2];// ARRAY
const b = a;

b.push(3);
console.log(a, b)

let a = 2;
let b = a;

console.log(a, b)
console.log(typeof nome, nome1);
console.log(typeof num, num);
console.log(typeof sobrenomeAluno, sobrenomeAluno);
console.log(typeof aprovado, aprovado)
console.log(typeof nomeAluno, nomeAluno)

