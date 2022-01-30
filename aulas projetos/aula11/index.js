// console.log('linha 0');
// console.log('linha 1');
// console.log('linha 2');
// console.log('linha 3');
// console.log('linha 4');
// console.log('linha 5');

// i = index
for(let i = 0 ; i <= 100; i++){
    console.log(`Linha ${i}`);

}
//PODE IR PULANDO DE 10 EM 10 OU QLQR OUTRO NUMERO USNADO (+= NUM)
for(let i = 0 ; i <= 100; i += 10){
    console.log(`Linha ${i}`);
}

for(let i = 200 ; i >= 100; i -= 10){
    console.log(`Linha ${i}`);
}
// ?(if) :(else)
for(let i = 0 ; i <= 10; i++){
    const par = i%2 === 0 ? "par": "impar";
    console.log(i,par);
}
const frutas = ['Maçã','Pera','Banana','Goiaba','Melão'];
for (let i =0 ; i < frutas.length; i++){

    console.log(`Indice ${i}`,frutas[i]);

}
