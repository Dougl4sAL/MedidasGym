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

