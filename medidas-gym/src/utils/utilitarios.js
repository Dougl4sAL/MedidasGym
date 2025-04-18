
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
