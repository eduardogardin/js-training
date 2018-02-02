
const definicao = 'Escopo das variáveis por função (ES5)';

const classicBlockScopeQuestion = () => {

    for (var i = 0; i < 5; i++) {
        setTimeout(() => console.log(i), 100);
    }
}

const letScopeWithArrow = () => {
    let attribute = 'attribute';

    let internalFunction = () => {
        return attribute;
    };

    return { value: internalFunction() }
};

module.exports = { definicao, letScopeWithArrow, classicBlockScopeQuestion };