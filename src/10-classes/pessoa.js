
export default class Pessoa {

    constructor(nome, cpf) {
        this.nome = nome;
        this.cpf = cpf;
    }

    imprimirDados() {
        return `Nome: ${this.nome} CPF: ${this.cpf}`
    }

    gritar() {
        return 'AAAAAAAAAAAAAAAAAAA';
    }
}