
import { definicaoResumida, initializeBeforeDeclare, resolvingHoistingWithLet, initializationNonCausingHosting } from './hoisting';

describe('Hoisting', () => {

    it(' definição ', () => {
        expect(definicaoResumida).toEqual('Todas as declarações são movidas para o topo do bloco antes de ser interpretado');
    });

    it(' initialize before declare', () => {
        const result = initializeBeforeDeclare();
        expect(result.value).toEqual('hoisted');
    });

    it(' let not doing hoisting throwing error', () => {
        expect(() => resolvingHoistingWithLet()).toThrowError();
    });

    it(' doesn\'t work on initialization ', () => {
        const result = initializationNonCausingHosting();
        expect(result.value).toBeUndefined();
    });
});