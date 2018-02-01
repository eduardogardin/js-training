
const definicaoResumida = 'Todas as declarações são movidas para o topo do bloco antes de ser interpretado';

const initializeBeforeDeclare = () => {

    hoistedVariable = 'hoisted';

    const objectUsingHoistedVariable = {
        value: hoistedVariable
    }

    var hoistedVariable;

    return objectUsingHoistedVariable;
};

const resolvingHoistingWithLet = () => {

    hoistedVariable = 'hoisted';
    
    const objectUsingHoistedVariable = {
        value: hoistedVariable
    }

    let hoistedVariable;

    return objectUsingHoistedVariable;
};

const initializationNonCausingHosting = () => {

    const objectUsingHoistedVariable = {
        value: hoistedVariable
    }

    var hoistedVariable = 'non hoisted';

    return objectUsingHoistedVariable;
};

module.exports = { definicaoResumida, initializeBeforeDeclare, resolvingHoistingWithLet, initializationNonCausingHosting };