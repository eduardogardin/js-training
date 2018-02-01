
const definicao = 'Escopo das variáveis por função (ES5)';

const classicBlockScopeQuestion = () => {

    for (var i = 0; i < 5; i++) {
        setTimeout(() => console.log(i), 100);
    }    
}

const letScope = () => {
    let attribute = 'attribute';

    function internalFunction() {
        return this.attribute
    };

    return { value: internalFunction() }
};

const letScopeWithArrow = () => {
    let attribute = 'attribute';

    const internalFunction = () => {
        return this.attribute
    };

    return { value: internalFunction() }
};

const constScope = () => {

};

module.exports = { definicao, letScope, letScopeWithArrow, constScope, classicBlockScopeQuestion };