const elementos= [
    {tag: 'p', texto: 'Frase 1'},
    {tag: 'div', texto:"Frase 2"},
    {tag: 'section', texto:"Frase3"},
    {teg: 'footer', texto:"Frase4"},
];  

const container = document.querySelector(".container");
const div = document.createElement('div');

for(let i = 0; i < elementos.length; i++){
    const {tag , texto} = elementos[i];
    let tagCreate = document.createElement(tag);
    tagCreate.innerHTML = texto;
    div.appendChild(tagCreate);
}

container.appendChild(div);