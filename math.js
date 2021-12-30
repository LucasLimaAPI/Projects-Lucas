//CODIGO CRIADO PARA SER UTILIZADO JUNTO A HTML
const numero = Number(prompt('Digite Seu numero:'));
const numerotitulo = document.getElementById('numero-titulo');
const nometitulo = document.getElementById('texto');

numerotitulo.innerHTML = numero;

nometitulo.innerHTML='';
nometitulo.innerHTML = `<p> A raiz de seu numero é: <strong>${numero ** 0.5}</strong> </p>`;
nometitulo.innerHTML += `<p><strong> ${numero}</strong> É inteiro:<strong> ${Number.isInteger(numero)}</strong>. </p>`;
nometitulo.innerHTML += `<p> <strong>${numero} </strong>É NaN: <strong>${Number.isNaN(numero)}</strong>. </p>`;
nometitulo.innerHTML += `<p> Arredondando para baixo: <strong>${Math.floor(numero)}</strong>. </p>`;
nometitulo.innerHTML += `<p> Arredondando para cima: <strong>${Math.ceil(numero)}</strong>. </p>`;
nometitulo.innerHTML += `<p> <Com duas casas decimais: <strong>${numero.toFixed(2)}</strong>. </p>`;

