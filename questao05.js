function inverterString(str) {
    let stringInvertida = "";

    for (let i = str.length - 1; i >= 0; i--) {
        stringInvertida += str[i];
    }

    return stringInvertida;
}

const entrada = prompt("Informe uma string para inverter:");

const resultado = inverterString(entrada);
console.log(`String original: ${entrada}`);
console.log(`String invertida: ${resultado}`);
alert(`String invertida: ${resultado}`);
