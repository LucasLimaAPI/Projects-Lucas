/*
&& ->todas as expressoes precisam ser verdadeiras para retornarem "TRUE", false && true = false  "o valor mesmos"
|| ->todas as expressoes precisam ser falsas para retornar "FALSE", true || false = true "Retorna o valor verdadeiro"
"FALSY":
0
'' " " ``
null/undefined
NaN
 */

console.log('Lucas Lima '&& 0 && 'Maria ');

 function falaOi() {
     return'Oi';
 }
let vaiExecutar = 'Joao';

console.log(vaiExecutar && falaOi());

console.log(0 || false || null || 'Lucas' || true);

const corUsuario = 'vermelho';
const corPadrao = corUsuario || "blue";

console.log(corPadrao)

const a = 0;
const b =false;
const c =null
const d =NaN
console.log(a || b || c || d)