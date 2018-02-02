function oldStyleLiteralFunction() {
    return 'Literal old style function';
}

const oldStyleExpressionFunction = function() {
    return 'Expression assignment old style';
}

const firstClassArrowFunction = value => {
    return value * 2;
};

const equalsClosure = propertyName => {

    return (object1, object2) => {

        return object1[propertyName] === object2[propertyName];
    }
};

module.exports = { equalsClosure, firstClassArrowFunction, oldStyleLiteralFunction, oldStyleExpressionFunction };