
export const definicaoResumida = 'Todas as declarações são movidas para o topo do bloco antes de ser interpretado';

export const initializeBeforeDeclare = () => {

    hoistedVariable = 'hoisted';

    const objectUsingHoistedVariable = {
        value: hoistedVariable
    }

    var hoistedVariable;

    return objectUsingHoistedVariable;
};

export const resolvingHoistingWithLet = () => {

    hoistedLetVariable = 'hoisted';
    
    const objectUsingHoistedVariable = {
        value: hoistedLetVariable
    };

    let hoistedLetVariable;

    return objectUsingHoistedVariable;
};

export const initializationNonCausingHosting = () => {

    const objectUsingHoistedVariable = {
        value: hoistedVariable
    }

    var hoistedVariable = 'non hoisted';

    return objectUsingHoistedVariable;
};