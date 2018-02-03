const { johnLiteral, johnProperty, johnPropertyKey, johnDinamicProperty, johnConciseProperty, pessoas } = require('./objetos');

test(' Objetos literal', () => {    
    expect(johnLiteral.nome).toEqual('John Doe');
    expect(johnLiteral.email).toEqual('john@gmail.com');
});

test(' Objetos property', () => {
    expect(johnProperty.nome).toEqual('John Doe');
    expect(johnProperty.email).toEqual('john@gmail.com');
});

test(' Objetos propertyKey', () => {
    expect(johnPropertyKey.nome).toEqual('John Doe');
    expect(johnPropertyKey.email).toEqual('john@gmail.com');
});

test(' Objetos dinamic property', () => {
    expect(johnDinamicProperty.nome_key).toEqual('John Doe');
    expect(johnDinamicProperty.email_key).toEqual('john@gmail.com');
});

test(' Objetos concise property', () => {
    expect(johnConciseProperty.nome).toEqual('John Doe');
    expect(johnConciseProperty.email).toEqual('john@gmail.com');
});

test('', () => {

    const objetoComplexo = {
        id: 1,
        nome: 'Alisson',
        email: 'alisson.molinari@gmail.com',
        observacao: 'Rato',
        teste: 'valor'
    };

    const extract = (properties, original) => {
        const novoObjeto = {};
        properties.forEach(p => novoObjeto[p] = original[p]);
        return novoObjeto;
    }
    
    const resultado = extract(['id', 'nome'], objetoComplexo);
    
    expect(resultado.id).toEqual(1);
    expect(resultado.nome).toEqual('Alisson');
});