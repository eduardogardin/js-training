
export const extractIdAndNameFromArguments = ({ id, name}) => {

    return `${id}${name}`;
};

export const extractIdAndNameFromObject = (object) => {

    const { id, name } = object;

    return `${id}${name}`;
};