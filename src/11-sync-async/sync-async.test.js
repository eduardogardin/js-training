import { syncObject, asyncObject, asyncExample, syncSumExample, syncConcatExample } from './sync-async';

test('sync object', () => {

    expect(syncObject.definicoes).toBeDefined();
    expect(syncObject.definicoes[0]).toEqual('Uma coisa de cada vez, uma linha de cada vez . . . ');
    expect(syncObject.definicoes[1]).toEqual('Bloqueante, a linha de execução só continua após o retorno/execução da função');
    expect(syncObject.definicoes[2]).toEqual('Aplicação ~congela~ #Ex: UI Android, Delphi, etc');
    expect(syncObject.definicoes[3]).toEqual('Uso de threads para paralelizar (Gerenciamento complexo)');
});

test('async object', () => {

    expect(asyncObject.definicoes).toBeDefined();
    expect(asyncObject.definicoes[0]).toEqual('Várias coisas acontecendo ao mesmo tempo',);
    expect(asyncObject.definicoes[1]).toEqual('Não bloqueante');
    expect(asyncObject.definicoes[2]).toEqual('Inicia várias funções ao mesmo tempo, e você é notificado na conclusão da execução');    
});

test('sync sum example', () => {

    const result = syncSumExample(10, 20);
    expect(result).toEqual(30);
});

test('sync concat example', () => {

    const result = syncConcatExample('Eduardo',  'Gardin');
    expect(result).toEqual('EduardoGardin');
});

test('async example', (done) => {

    const wait = 2000;
    const successFunction = (value) => {        
        expect(value).toEqual(`Called after ${wait} seconds`);
        done();
    };

    const result = asyncExample(successFunction, 2000);

    console.log('Called function');
});