// para calcular a diferença entre a Data1 e Data2
export function calcularEvolucao(primeira, ultima, unidade = '') {
    const resultado = parseFloat(ultima) - parseFloat(primeira)

    if (resultado > 0) {
        return '+ ' + formatarValorFloat(resultado, unidade)
    } else if (resultado < 0) {
        // math.abs() evita na tela fique - - 1.5
        return '- ' + formatarValorFloat(Math.abs(resultado), unidade)
    } else {
        return '0.0 ' + unidade
    }
}

export function calcularDiasEntreDatas(data1, data2) {
    // converte as datas para um formato que possa calcular
    const d1 = new Date(data1);
    const d2 = new Date(data2);
  
    // Zera a hora para evitar diferença por horário
    d1.setHours(0, 0, 0, 0);
    d2.setHours(0, 0, 0, 0);

    const diferencaEmMs = Math.abs(d2 - d1);
    // converte o calculo acima de milessegundos para dias com essa formula abaixo
    const diferencaEmDias = Math.ceil(diferencaEmMs / (1000 * 60 * 60 * 24));
    
    if (diferencaEmDias > 1) {
        return diferencaEmDias + " dias"
    } else {
        return diferencaEmDias;
    }
}
  