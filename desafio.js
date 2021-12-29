/**
 * Lucas Lima tem 20 anos , pesa 82 kg
 * tem 1.8 de altura e seu imc e de 25.30864197530864
 * Lucas lima nasceu em  2002
 */
const nome= 'Lucas';
const sobrenome= 'Lima';
const idade =  20;
const peso = 82 ;
const altura = 1.80;

let imc;// peso / altura * alturo
imc= peso / (altura * altura);
console.log('o imc de' ,nome , sobrenome, 'é:',imc)


let anoNascimento; 
anoNascimento = 2022 - 20
console.log(nome,sobrenome,'Nasceu em:', anoNascimento);

//Informações gerais:
console.log(nome,sobrenome, 'Tem', idade, 'anos e pesa:',peso+'kg');
console.log('Tem', altura ,'de altura e seu IMC é de:',imc);

//Template string 

console.log(`${nome} ${sobrenome} Tem ${idade} anos e pesa ${peso}kg`);