//OPERAÇÃO TERNÁRIA !!!
// (condição)?'Valor para verdadeiro' : 'Valor para falso'
const pontUsuario = 9999;
const nivelUsuario = pontUsuario >= 1000 ? 'Usuário VIP' : 'Usuário normal'

const corUsuario = 'Red';
const corPadrao = corUsuario || 'Black';

console.log(nivelUsuario,',',corPadrao );


