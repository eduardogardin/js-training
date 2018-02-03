import Pessoa from './pessoa';

test('Create pessoa with new', () => {

    const pessoa = new Pessoa('Eduardo', '99999999999');
    expect(pessoa.gritar()).toEqual('AAAAAAAAAAAAAAAAAAA'); 
});

test('Imprime dados', () => {

    const pessoa = new Pessoa('Eduardo', '99999999999');    
    expect(pessoa.imprimirDados()).toEqual('Nome: Eduardo CPF: 99999999999');
}); 