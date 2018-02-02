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