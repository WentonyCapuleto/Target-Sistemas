async function processarFaturamento() {
    const response = await fetch("faturamento.json");
    const faturamento = await response.json();

    const diasValidos = faturamento.filter(dia => dia.valor > 0);

    const menorValor = Math.min(...diasValidos.map(dia => dia.valor));
    const maiorValor = Math.max(...diasValidos.map(dia => dia.valor));

    const somaFaturamento = diasValidos.reduce((soma, dia) => soma + dia.valor, 0);
    const mediaMensal = somaFaturamento / diasValidos.length;

    const diasAcimaDaMedia = diasValidos.filter(dia => dia.valor > mediaMensal).length;

    console.log(`Menor valor de faturamento: R$ ${menorValor.toFixed(2)}`);
    console.log(`Maior valor de faturamento: R$ ${maiorValor.toFixed(2)}`);
    console.log(`Dias com faturamento acima da média: ${diasAcimaDaMedia}`);
}

processarFaturamento();
