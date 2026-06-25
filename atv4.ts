interface Callback {
    (valor: number): number;
}


function processar(valor: number, callback: Callback): number {
return callback(valor);
}