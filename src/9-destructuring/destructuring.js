             
export const extractIdAndNameFromArguments = ({ id, name }) => {

    return `${id}${name}`;
};

export const extractIdAndNameFromObject = object => {

    const { id = 0 , name = 'semnome'} = object;

    return `${id}${name}`;
};

export const extractOnly = (object, ...fields) => {

    return Object.keys(object)
                .filter(k => fields.includes(k))
                .reduce((a, k) => { a[k] = object[k]; return a; }, {});
}