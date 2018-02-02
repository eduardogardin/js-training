import { surgimento, caracteristicas, caseSensitiveBehavior } from './historia';

describe('História do Javascript', () => {

    it('surgimento ', () => {
        expect(surgimento.ano).toEqual(1995);
        expect(surgimento.descricao).toEqual('Javascript');
        expect(surgimento.propositos[0]).toEqual('Adicionar programas nas páginas web');
        expect(surgimento.propositos[1]).toEqual('Comportamento para páginas web estáticas');
    });

    it('case sensitive behavior', () => {
        expect(() => caseSensitiveBehavior()).toThrowError();
    });
});