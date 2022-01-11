const pessoa1 = {
    nome: 'Lucas',
    sobrenome: 'Lima',
    idade: 20,

    fala() {
        console.log(`A minha idade atual é ${this.idade}`);
    },

    incrementaIdade(){
        this.idade++;
    }

};

pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();

