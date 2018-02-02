const definicao = 'Praticamente tudo é objeto, exceto os tipos primitivos da linguagem';

const nome = 'John Doe';
const email = 'john@gmail.com';

const johnLiteral = {
    nome: nome,
    email: email
};

const johnProperty = {};
johnProperty.nome = johnLiteral.nome;
johnProperty.email = johnLiteral.email;

const johnPropertyKey = {};
johnPropertyKey['nome'] = johnLiteral.nome;
johnPropertyKey['email'] = johnLiteral.email;

const nomeKey = 'nome';
const emailKey = 'email';

const johnDinamicProperty = {};
johnDinamicProperty[`${nomeKey}_key`] = johnLiteral.nome;
johnDinamicProperty[`${emailKey}_key`] = johnLiteral.email;

const johnConciseProperty = {
    nome,
    email
};

const pessoas = [ johnLiteral, johnProperty, johnPropertyKey, johnDinamicProperty ];

module.exports = { definicao, johnLiteral, johnProperty, johnPropertyKey, johnDinamicProperty, johnConciseProperty, pessoas };