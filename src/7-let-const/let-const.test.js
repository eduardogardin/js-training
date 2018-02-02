import { letDefinicao, letReassign, constDefinicao, constReassign } from './let-const'; 

test('Let definição', () => {
    expect(letDefinicao).toEqual('O let é uma nova palavra chave utilizada para declarar variáveis quando elas podem ser reatribuídas');
});

test('Const definição', () => {
    expect(constDefinicao).toEqual('O const é uma nova palavra chave utilizada para declarar variáveis quando elas não pode ser reatribuída (Não garante imutabilidade)');
});

test('Let reassign', () => {
    expect(letReassign()).toEqual('reasigned value');
});