
test('Spread merging two objects', () => {

    const baseObject = {
        name: 'Object name'
    };

    const spreadObject = {
        ...baseObject,
        anotherProperty: 'Another property'
    };

    expect(spreadObject.name).toEqual('Object name');
    expect(spreadObject.anotherProperty).toEqual('Another property');
});

test('Spread with two arrays concat', () => {

    const baseArray = [1, 2, 3, 4];
    const resultArray = [...baseArray, 5, 6, 7, 8];

    expect(resultArray).toHaveLength(8);
});

test('Spread with function argument array', () => {

    const args = [1, 2];
    const foo = (first, second) => {
        return first + second;
    };

    expect(foo(...args)).toBe(3);
});