function pertenceFibonacci(numero) {
    let a = 0, b = 1;

    while (a <= numero) {
        if (a === numero) {
            return true;
        }
        let temp = a;
        a = b;
        b = temp + b;
    }

    return false;
}

const numeroInformado = parseInt(prompt("Informe um número para verificar se pertence à sequência de Fibonacci:"), 10);

if (pertenceFibonacci(numeroInformado)) {
    console.log(`O número ${numeroInformado} pertence à sequência de Fibonacci.`);
    alert(`O número ${numeroInformado} pertence à sequência de Fibonacci.`);
} else {
    console.log(`O número ${numeroInformado} NÃO pertence à sequência de Fibonacci.`);
    alert(`O número ${numeroInformado} NÃO pertence à sequência de Fibonacci.`);
}