import { concat, defaultValueWithFunction } from './default-parameters';

test('concat without defaultParameter', () => {
    expect(concat('Value 1', 'Value 2')).toEqual('String1: Value 1 - String2: Value 2');
});

test('concat with defaultParameter', () => {
    expect(concat('Value 1')).toEqual('String1: Value 1 - String2: default value string 2');
});

test('default value withCallback', () => {
    const result = defaultValueWithFunction('value', (arg) => `Arg: ${arg}`);
    expect(result).toEqual('Arg: value');
});

test('default value without callback', () => {    
    const result = defaultValueWithFunction('value');
    expect(result).toEqual('value');
});