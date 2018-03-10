
export const promiseDef = {
    definicoes: [
        '#mozilla =>A Promise is an object representing the eventual completion or failure of an asynchronous operation',
        '#eduardo => Simboliza algo que vai acontecer no futuro, porém isso pode dar certo ou não'
    ],
    vantagens: [
        'O encadeamento é garantido pelo tipo, e não por callbacks',
        'Tratamento de erros simplificado',
        'Mais fácil de ler e manter o código',
        'Favorece composição do seu código #não garante'
    ],
    desvantagens: [
        'Retorna somente um valor e o seu ciclo de vida acaba'
    ],
    observacoes: [
        'Normalmente nós somos consumidores das promises (fetch, jQuery, middlewares, etc)'
    ]
};

export const simplePromise = (value) => new Promise((resolve, reject) => {

    if(!!value) {
        resolve(value);
    } else {
        reject('Invalid value');
    }
});