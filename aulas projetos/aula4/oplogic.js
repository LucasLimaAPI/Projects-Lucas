/*
Operadores lógicos
&& > AND > E :Todas as expressões precisam ser verdadeiras para retornarem "True"
|| > OR > ou
! > NOT :NÃO
*/ 
const expAnd = true && false && true;
console.log(expAnd);

const expOr = true|| false || true;
console.log (expOr);

const usuario = 'Lucas';// for do usuário 
const senha = '123456'; // form do usuário

const vaiLogar = usuario === 'Lucas' && senha === "123456";
console.log(vaiLogar);

console.log(!true);
