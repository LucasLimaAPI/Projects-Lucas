const verdadeira = true

//Let tem escopo de bloco!{...bloco}
//var só tem escopo de função!!

let nome= "Lucas";// criando
var nome2="Lucas";//criando


if(verdadeira){
    let nome = "Lima";// criando
    var nome2 ="Oliveira"//redeclarando
    
    if(verdadeira){
        let nome = "May"//criando
        var nome2 = "Lima"; //Foi redeclarada
        console.log(nome,nome2);

    }
    console.log(nome,nome2);

}   
console.log(nome,nome2);
//Quando chamamos uma function podemos puxar informações em todo o entorno por exemplo puxar nome.
function falaOi(){
    console.log(nome);
    if(verdadeira){
        console.log(nome)
    }
}
falaOi();
