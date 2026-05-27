class Animal{
    constructor(nome, idade, especie){
        this.nome    = nome
        this.idade   = idade
        this.especie = especie
    }

    cumprimentar(){
        console.log(this.nome + " disse oi.")
    }

    falar(){
        if (this.especie == "Cachorro"){
            console.log("auau")
        }
        if (this.especie == "Gato"){
            console.log("miau")
        }
    }
}

const cachorro = new Animal("Sammy", 6, "Cachorro")
const gato     = new Animal("Gato", 10, "Gato")
const idade    = 24

console.log(gato.idade)
console.log(idade)

falar()