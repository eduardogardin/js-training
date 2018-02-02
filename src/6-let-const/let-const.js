
export const letDefinicao = 'O let é uma nova palavra chave utilizada para declarar variáveis quando elas podem ser reatribuídas';
export const constDefinicao = 'O const é uma nova palavra chave utilizada para declarar variáveis quando elas não pode ser reatribuída (Não garante imutabilidade)'; 

export const letReassign = () => {

    let value = 'initial';
    value = 'reasigned value';

    return value;
};

export const constReassign = () => {
    
    const value = 'initial';

    return value;
};