
const { definicao, letScopeWithArrow, classicBlockScopeQuestion } = require('./escopo');

describe('Escopo', () => {

    it(' definiçao ', () => {
        expect(definicao).toEqual('Escopo das variáveis por função (ES5)');
    });

    it(' let scope with arrow', () => {
        const result = letScopeWithArrow()
        expect(result.value).toEqual('attribute');
    });

    it(' classic scope question', () => {
        classicBlockScopeQuestion();
    });
});