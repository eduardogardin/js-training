
export const concat = (string1, string2 = 'default value string 2') => {

    return `String1: ${string1} - String2: ${string2}`;
};

export const defaultValueWithFunction = (value, callback = () => value) => {
    
    return callback(value);
};

export const calculaDebito = (valorDebito = 0, valorInicial = 0) => {

    return valorDebito + valorInicial;
}
