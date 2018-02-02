const { caracteristicas } = require('./caracteristicas');

test('Caracaterísticas da linguagem', () => {    
    expect(caracteristicas[0]).toEqual('Interpretada');
    expect(caracteristicas[1]).toEqual('Case sensitive');
    expect(caracteristicas[2]).toEqual('Regra de nomenclatura das variáveis do C');
    expect(caracteristicas[3]).toEqual('Dinâmica');
});