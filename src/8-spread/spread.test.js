
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