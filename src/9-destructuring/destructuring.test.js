import { extractOnly, extractIdAndNameFromArguments, extractIdAndNameFromObject } from './destructuring';

test(' destructuring from function args', () => {

    const object = {
        id: 1,
        name: 'Eduardo',
        email: 'eduardoj.gardin@gmail.com',
        phone: '5544999493885'
    };
    const result = extractIdAndNameFromArguments(object);

    expect(result).toEqual('1Eduardo');
});

test(' destructuring from object', () => {

    const object = {
        id: 1,
        name: 'Eduardo',
        email: 'eduardoj.gardin@gmail.com',
        phone: '5544999493885'
    };
    const result = extractIdAndNameFromObject(object);

    expect(result).toEqual('1Eduardo');
});

test('Destructuring deve receber o valor padrão', () => {

    const result = extractIdAndNameFromObject({});
    expect(result).toEqual('0semnome');
});

test('Destructuring do array', () => {

    const arrayNumerico = [ 1, 2, 3 ];

    const [a, , b] = arrayNumerico;

    expect(a).toEqual(1);
    expect(b).toEqual(3);

});

test('Destructuring do array com objeto', () => {

    const arrayObjetos = [{id: 1, nome: 'Eduardo'}, {id: 2, nome: 'Fulano'}];

    const [ eduardo, fulano ] = arrayObjetos;

    expect(eduardo.id).toEqual(1);
    expect(eduardo.nome).toEqual('Eduardo');

    expect(fulano.id).toEqual(2);
    expect(fulano.nome).toEqual('Fulano');
});

test('Destructuring dois níveis', () => {

    const objeto = {
        id: 1,
        nome: 'Eduardo',
        contato: {
            telefone: {
                celular: '44999493886',
                residencial: '30235201'
            },
            email: 'eduardoj.gardin'
        }
    };

    const { contato: { email, telefone: { celular } }} = objeto;

    expect(email).toEqual('eduardoj.gardin');
    expect(celular).toEqual('44999493886');    
});

test('Extract only fields', () => {

    const objeto = {
        id: 1,
        nome: 'Eduardo',
        cpf: '999999999',
        contato: {
            email: 'eduardoj.gardin@gmail.com'
        }
    };

    const result = extractOnly(objeto, 'nome', 'cpf');

    expect(result.nome).toEqual('Eduardo');
    expect(result.cpf).toEqual('999999999');
    
    expect(result.id).toBeUndefined();
    expect(result.contato).toBeUndefined();        
});