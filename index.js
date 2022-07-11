import readlineSync from 'readline-sync';

let salario_e_inflacao = [
    { salario: 510.0, ano: 2010, ipca: 5.91 },
    { salario: 545.0, ano: 2011, ipca: 6.5 },
    { salario: 622.0, ano: 2012, ipca: 5.84 },
    { salario: 678.0, ano: 2013, ipca: 5.91 },
    { salario: 724.0, ano: 2014, ipca: 6.41 },
    { salario: 788.0, ano: 2015, ipca: 10.67 },
    { salario: 880.0, ano: 2016, ipca: 6.29 },
    { salario: 937.0, ano: 2017, ipca: 2.95 },
    { salario: 954.0, ano: 2018, ipca: 3.75 },
    { salario: 998.0, ano: 2019, ipca: 4.31 },
    { salario: 1045.0, ano: 2020, ipca: 4.52 },
];

console.log('Escolha uma das alternativas:\n');
console.log(`1 - Listar os salários minímos de 2010 à 2020`);
console.log(`2 - Listar o índice IPCA de 2010 à 2020`);
console.log(`3 - Comparação entre o percentual de aumento salarial e o IPCA\n`);

let alternativa_escolhida = readlineSync.questionFloat(`Digite o numero da sua escolha: `);

let ano_salarial = 'Ano: ';
let salario_minimo = 'Salário mínimo: ';
let crescimento_salarial = 'Crescimento Salarial: ';
let ipcaLabel = 'Inflação IPCA: ';

ano_salarial = ano_salarial.padEnd(30, '.');
salario_minimo = salario_minimo.padEnd(30, '.');
crescimento_salarial = crescimento_salarial.padEnd(30, '.');
ipcaLabel = ipcaLabel.padEnd(30, '.');

switch (alternativa_escolhida) {
    case 1:
        for (let i = 0; i <= salario_e_inflacao.length - 1; i++) {
            let ano = salario_e_inflacao[i].ano;
            let salario = salario_e_inflacao[i].salario;

            let salarioFormatado = salario.toFixed(2).replace('.', ',');

            console.log(`\n`);
            console.log(`${ano_salarial}${ano}`);
            console.log(`${salario_minimo}R$${salarioFormatado}`);
        }
        break;
    case 2:
        for (let i = 0; i <= salario_e_inflacao.length - 1; i++) {
            let ano = salario_e_inflacao[i].ano;
            let ipca = salario_e_inflacao[i].ipca;

            let ipcaFormatado = ipca.toFixed(2).replace('.', ',');

            console.log(`\n`);
            console.log(`${ano_salarial}${ano}`);
            console.log(`${ipcaLabel}${ipcaFormatado}%`);
        }
        break;
    case 3:
        for (let i = 0; i <= salario_e_inflacao.length - 1; i++) {
            let ano = salario_e_inflacao[i].ano;
            let salario = salario_e_inflacao[i].salario;

            let percentualCrescimento;
            let crescimentoFormatado;

            if (i > 0) {
                let salarioAnterior = salario_e_inflacao[i - 1].salario;
                let diferenca = salario - salarioAnterior;

                percentualCrescimento = (diferenca / salarioAnterior) * 100;

                crescimentoFormatado = percentualCrescimento.toFixed(2).replace('.', ',') + '%';
            } else {
                crescimentoFormatado = '-';
            }
            let ipca = salario_e_inflacao[i].ipca;
            let salarioFormatado = salario.toFixed(2).replace('.', ',');
            let ipcaFormatado = ipca.toFixed(2).replace('.', ',');

            console.log(`\n`);
            console.log(`${ano_salarial}${ano}`);
            console.log(`${salario_minimo}R$${salarioFormatado}`);
            console.log(`${crescimento_salarial}${crescimentoFormatado}`);
            console.log(`${ipcaLabel}${ipcaFormatado}%`);
        }
        break;
    default:
        console.log(`Opção Inválida!`);
        break;
}
