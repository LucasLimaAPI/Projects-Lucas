// Função construtora

// const threeHours = 60 * 60 * 3 * 1000;
// const oneDay = 60 * 60 * 24 * 1000;
// const data = new Date(0+threeHours+oneDay);//01/01/1970 Timestamp unix, época unix
//const data = new Date(2022, 0, 20,15,15,55);//mes de 0-11 

const data = new Date(1642628080361);
console.log('Dia',data.getDate());
console.log('mês',data.getMonth()+1);
console.log('ano',data.getFullYear());
console.log('hora',data.getHours());
console.log('min',data.getMinutes());
console.log('sec',data.getSeconds());
console.log('Dia Semana',data.getDay());// 0 = domingo_sabado =6

console.log(data.toString());
console.log(Date.now());

