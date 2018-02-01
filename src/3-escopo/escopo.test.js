
const { definicao, letScope, letScopeWithArrow, classicBlockScopeQuestion } = require('./escopo');

describe('Escopo', () => {

    it(' definiçao ', () => {

    });

    it(' letScope ', () => {
        const result = letScope();        
        expect(result.value).toBeUndefined();
    });

    it(' let scope with arrow', () => {
        const result = letScopeWithArrow()
        expect(result.value).toBeUndefined();
    });

    it(' classic scope question', () => {

        const result = classicBlockScopeQuestion();        
    });
});