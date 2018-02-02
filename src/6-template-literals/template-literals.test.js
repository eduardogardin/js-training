
test('String simple concat', () => {

    const fullName = 'Eduardo Jhonny de Oliveira Gardin';
    const email = 'eduardoj.gardin@gmail.com';
    const result = fullName + ', Contato: ' + email;

    expect(result).toEqual('Eduardo Jhonny de Oliveira Gardin, Contato: eduardoj.gardin@gmail.com');
});

test('String template literals concat', () => {
    
    const fullName = 'Eduardo Jhonny de Oliveira Gardin';
    const email = 'eduardoj.gardin@gmail.com';
    const result = `${fullName}, Contato: ${email}`;

    expect(result).toEqual('Eduardo Jhonny de Oliveira Gardin, Contato: eduardoj.gardin@gmail.com');
});