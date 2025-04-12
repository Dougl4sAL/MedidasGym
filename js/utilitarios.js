// para a listaMedidas para os outros .js
export function getListaMedidas() {
    return JSON.parse(localStorage.getItem('medidasGYM')) || []
}

// para a formatação das datas como dd-mm-aaaa
export function formatarDataBR(dataISO) {
    const [ano, mes, dia] = dataISO.split('-')
    return `${dia}-${mes}-${ano}`
}

// para formatar os valores com casa decimais
export function formatarValorFloat(valor, unidade = '') {
    const numero = parseFloat(valor)
    if (isNaN(numero)) return '-'
    return numero.toFixed(1) + ' ' + unidade
}

// Para preencher span sem gerar erro no console
export function preencherSpan(id, valor) {
    const el = document.getElementById(id)
    if (el) el.textContent = valor
}

// preenche os campos das medida conforme a data escolhida
export function preencherCampos(medida, id) {
    for (const chave in medida ) {
        const span = document.getElementById(`${id}${chave}`)
        if (span) {
            if (chave === 'data') {
                span.textContent = formatarDataBR(medida[chave])
            } else if (chave === 'peso') {
                span.textContent = formatarValorFloat(medida[chave], 'kg')
            } else {
                span.textContent = formatarValorFloat(medida[chave], 'cm')
            }
        }
    }
}

// para enviar os dados para função calcularEvolucao()
export function preencherEvolucao(primeira, ultima) {
    for (const chave in primeira) {
        // o id 'm-evo-' é prefixo de todos os span que vao receber o valor
        const span = document.getElementById(`m-evo-${chave}`)
        if (span) {
            if (chave === 'id') continue
            if (chave === 'data') {
                span.textContent = calcularDiasEntreDatas(primeira[chave], ultima[chave])
            } else if (chave === 'peso') {
                span.textContent = calcularEvolucao(primeira[chave], ultima[chave], 'kg')
            } else {
                span.textContent = calcularEvolucao(primeira[chave], ultima[chave], 'cm')
            }
        }
    }
}

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
  