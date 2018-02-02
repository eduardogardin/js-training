const { equalsClosure, firstClassArrowFunction, oldStyleLiteralFunction, oldStyleExpressionFunction } = require('./funcoes');

test('Not equals closure', () => {

    const object1 = { id: 1, name: 'Test' };
    const object2 = { id: 2, name: 'Test' };
    const equalsIdFunction = equalsClosure('id');

    expect(equalsIdFunction(object1, object2)).toBeFalsy();
});

test('Equals closure', () => {
    
    const object1 = { id: 1, name: 'Test' };
    const object2 = { id: 1, name: 'Test' };    
    const equalsIdFunction = equalsClosure('id');

    expect(equalsIdFunction(object1, object2)).toBeTruthy();
});

test('Equals closure', () => {
    
    const object1 = { id: 1, name: 'Test' };
    const object2 = { id: 1, name: 'Test' };    
    const equalsIdFunction = equalsClosure('id');

    expect(equalsIdFunction(object1, object2)).toBeTruthy();
});

test('First class function', () => {    
    expect(firstClassArrowFunction(10)).toEqual(20);
});

test('Literal old style function', () => {
    expect(oldStyleLiteralFunction()).toEqual('Literal old style function');
});

test('Expression oldstyle function', () => {
    expect(oldStyleExpressionFunction()).toEqual('Expression assignment old style');
});

test(' Function assignment ', () => {
    const functionReference = oldStyleExpressionFunction;
    expect(functionReference()).toEqual('Expression assignment old style');
});