import { extractIdAndNameFromArguments, extractIdAndNameFromObject } from './destructuring';

test(' destructuring from function args', () => {

    const object = {
        id: 1,
        name: 'Eduardo',
        email: 'eduardoj.gardin@gmail.com',
        phone: '5544999493885'
    };
    const result = extractIdAndNameFromArguments(object);

    expect(result.id).toEqual('1Eduardo');
});

test(' destructuring from object', () => {

    const object = {
        id: 1,
        name: 'Eduardo',
        email: 'eduardoj.gardin@gmail.com',
        phone: '5544999493885'
    };
    const result = extractIdAndNameFromObject(object);

    expect(result).toEqual('1Eduardo');
});