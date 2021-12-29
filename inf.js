const nomecompleto= prompt('Digite seu nome completo:');
const data = prompt('Digite a data do seu nascimento: ');
const cidade = prompt('Digite o nome da sua cidade: ');
const cpf=  prompt('Digite seu cpf: ');

document.body.innerHTML =`Seu nome é : <strong> ${nomecompleto}</strong> <br />`
document.body.innerHTML+=`Nasceu em : <strong>${data}</strong> <br />`
document.body.innerHTML+= `Mora em : <strong> ${cidade} </strong> <br />`
document.body.innerHTML+= `Portador do cpf : <strong> ${cpf} </strong> <br />`

let info= confirm('Suas informações estão corretas?');
if (info) {
    true.confirm
}
else window.location.reload() 




