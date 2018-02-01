
const surgimento = {
    ano: 1995,    
    descricao: 'Javascript',
    propositos: [
        'Adicionar programas nas páginas web',
        'Comportamento para páginas web estáticas'
    ],
    observacoes: [
        'NÃO É JAVA',
        'ECMAScript => Padronização',
        'ES5 Lançado em 2009',
        'ES6 Lançado em 20015'
    ]
};

const caracteristicas = [
    'Interpretada',
    'Case sensitive',
    'Regra de nomenclatura das variáveis do C',
    'Dinâmica'
];

const caseSensitiveBehavior = () => {

    const caseSensitive = 'I \'m case sensitive';
    const caseInsensitive = 'I \'m case insensitive';

    return {
        caseSensitive: caseSensitive,
        caseInsensitive: CASEINSENSITIVE
    };
}

module.exports = { surgimento, caracteristicas, caseSensitiveBehavior };