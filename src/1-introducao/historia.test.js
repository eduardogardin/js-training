const { surgimento, caracteristicas, caseSensitiveBehavior } = require('./historia');

describe('História do Javascript', () => {

    it('surgimento ', () => {
        expect(surgimento.ano).toEqual(1995);
        expect(surgimento.descricao).toEqual('Javascript');
        expect(surgimento.propositos[0]).toEqual('Adicionar programas nas páginas web');
        expect(surgimento.propositos[1]).toEqual('Comportamento para páginas web estáticas');
    });

    it('características', () => {
        expect(caracteristicas[0]).toEqual('Interpretada');
        expect(caracteristicas[1]).toEqual('Case sensitive');
        expect(caracteristicas[2]).toEqual('Regra de nomenclatura das variáveis do C');
        expect(caracteristicas[3]).toEqual('Dinâmica');
    });

    it('case sensitive behavior', () => {
        expect(() => caseSensitiveBehavior()).toThrowError();
    });
});