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