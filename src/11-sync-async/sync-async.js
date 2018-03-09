export const syncObject = {
    definicoes: [
        'Uma coisa de cada vez, uma linha de cada vez . . . ',
        'Bloqueante, a linha de execução só continua após o retorno/execução da função',
        'Aplicação ~congela~ #Ex: UI Android, Delphi, etc',
        'Uso de threads para paralelizar (Gerenciamento complexo)'
    ],

};

export const asyncObject = {
    definicoes: [
        'Várias coisas acontecendo ao mesmo tempo',
        'Não bloqueante',
        'Inicia várias funções ao mesmo tempo, e você é notificado na conclusão da execução'
    ]
};

/**
 * Função síncrona que faz uma soma e retorna o seu valor imediatamente
 */
export const syncSumExample = (a, b) => a + b;

/**
 * Função síncrona que concatena duas strings e retorna o seu valor imediatamente
 */
export const syncConcatExample = (a, b) => `${a}${b}`;

/**
 * Função que será executada após o tempo que for especificado no segundo argumento.
 *
 */
export const asyncExample = (fn, runAfterInMilliseconds) => {

    setTimeout(() => {
        fn(`Called after ${runAfterInMilliseconds} seconds`);
    }, runAfterInMilliseconds);
}
