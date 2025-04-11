let listaMedidas = JSON.parse(localStorage.getItem('medidasGYM')) || []

console.log("Medidas salvas ao carregar a página:", listaMedidas)

document.addEventListener("DOMContentLoaded", function () {
    exibirUltimaMedida()
    exibirEvolucao()
    
    const form = document.getElementById('form-medidas')

    if (!form) return

    form.addEventListener('submit', function (event) {
        event.preventDefault()

        const novoId = listaMedidas.length > 0
            ? listaMedidas[listaMedidas.length - 1].id + 1
            : 1

        const novaMedida = {
            id: novoId,
            data: document.getElementById('data').value,
            altura: parseFloat(document.getElementById('altura').value),
            peso: parseFloat(document.getElementById('peso').value),
            ombro: parseFloat(document.getElementById('ombro').value),
            peito: parseFloat(document.getElementById('peito').value),
            bicepsD: parseFloat(document.getElementById('b-d').value),
            bicepsE: parseFloat(document.getElementById('b-e').value),
            antebracoD: parseFloat(document.getElementById('ante-d').value),
            antebracoE: parseFloat(document.getElementById('ante-e').value),
            punho: parseFloat(document.getElementById('punho').value),
            cintura: parseFloat(document.getElementById('cintura').value),
            quadril: parseFloat(document.getElementById('quadril').value),
            coxaD: parseFloat(document.getElementById('coxa-d').value),
            coxaE: parseFloat(document.getElementById('coxa-e').value),
            coxaInfD: parseFloat(document.getElementById('coxa-inf-d').value),
            coxaInfE: parseFloat(document.getElementById('coxa-inf-e').value),
            panturrilhaD: parseFloat(document.getElementById('pantu-d').value),
            panturrilhaE: parseFloat(document.getElementById('pantu-e').value)
        }

        listaMedidas.push(novaMedida)

        localStorage.setItem('medidasGYM', JSON.stringify(listaMedidas))

        alert("Medidas salvas com sucesso!")

        form.reset()

        console.log('Nova medida adicionada:', novaMedida)

        exibirUltimaMedida()

        window.location.href = 'index.html'
    })
})

// Para preencher sem gerar erro no console
function preencherSpan(id, valor) {
    const el = document.getElementById(id)
    if (el) el.textContent = valor
}

function calcularEvolucao(primeira, ultima, unidade = '') {
    const resultado = parseFloat(ultima) - parseFloat(primeira)
    
    if (resultado > 0) {
        return '+ ' + formatar(resultado, unidade)
    } else if (resultado < 0) {
        // math.abs() evita na tela fique - - 1.5
        return '- ' + formatar(Math.abs(resultado), unidade)
    } else {
        return '0.0 ' + unidade
    }
}

function formatar(valor, unidade = '') {
    const numero = parseFloat(valor)
    if (isNaN(numero)) return '-'
    return numero.toFixed(1) + ' ' + unidade
}

function formatarDataBR(dataISO) {
    const [ano, mes, dia] = dataISO.split('-')
    return `${dia}-${mes}-${ano}`
}

// para exportar a listaMedidas para os outros .js
export function getListaMedidas() {
    return JSON.parse(localStorage.getItem('medidasGYM')) || []
}
  
function exibirUltimaMedida() {
    const medidas = JSON.parse(localStorage.getItem('medidasGYM')) || []

    if (medidas.length === 0) return

    const ultima = medidas[medidas.length - 1]

    preencherSpan('m-data', formatarDataBR(ultima.data))
    preencherSpan('m-altura', ultima.altura + ' cm')
    preencherSpan('m-peso', formatar(ultima.peso, 'kg'))
    preencherSpan('m-ombro', formatar(ultima.ombro, 'cm'))
    preencherSpan('m-peito', formatar(ultima.peito, 'cm'))
    preencherSpan('m-b-direito', formatar(ultima.bicepsD, 'cm'))
    preencherSpan('m-b-esquerdo', formatar(ultima.bicepsE, 'cm'))
    preencherSpan('m-ante-direito', formatar(ultima.antebracoD, 'cm'))
    preencherSpan('m-ante-esquerdo', formatar(ultima.antebracoE, 'cm'))
    preencherSpan('m-punho', formatar(ultima.punho, 'cm'))
    preencherSpan('m-cintura', formatar(ultima.cintura, 'cm'))
    preencherSpan('m-quadril', formatar(ultima.quadril, 'cm'))
    preencherSpan('m-coxa-direita', formatar(ultima.coxaD, 'cm'))
    preencherSpan('m-coxa-esquerda', formatar(ultima.coxaE, 'cm'))
    preencherSpan('m-coxa-inf-direita', formatar(ultima.coxaInfD, 'cm'))
    preencherSpan('m-coxa-inf-esquerda', formatar(ultima.coxaInfE, 'cm'))
    preencherSpan('m-pantu-direita', formatar(ultima.panturrilhaD, 'cm'))
    preencherSpan('m-pantu-esquerda', formatar(ultima.panturrilhaE, 'cm'))
}

function exibirEvolucao() {
    const medidas = JSON.parse(localStorage.getItem('medidasGYM')) || []

    if (medidas.length === 0) return

    const primeira = medidas[0]
    const ultima = medidas[medidas.length - 1]

    preencherSpan('m-evo-data', formatarDataBR(ultima.data))
    preencherSpan('m-evo-altura', calcularEvolucao(primeira.altura, ultima.altura, 'cm'))
    preencherSpan('m-evo-peso', calcularEvolucao(primeira.peso, ultima.peso, 'kg'))
    preencherSpan('m-evo-ombro', calcularEvolucao(primeira.ombro, ultima.ombro, 'cm'))
    preencherSpan('m-evo-peito', calcularEvolucao(primeira.peito, ultima.peito, 'cm'))
    preencherSpan('m-evo-b-direito', calcularEvolucao(primeira.bicepsD, ultima.bicepsD, 'cm'))
    preencherSpan('m-evo-b-esquerdo', calcularEvolucao(primeira.bicepsE, ultima.bicepsE, 'cm'))
    preencherSpan('m-evo-ante-direito', calcularEvolucao(primeira.antebracoD, ultima.antebracoD, 'cm'))
    preencherSpan('m-evo-ante-esquerdo', calcularEvolucao(primeira.antebracoE, ultima.antebracoE, 'cm'))
    preencherSpan('m-evo-punho', calcularEvolucao(primeira.punho, ultima.punho, 'cm'))
    preencherSpan('m-evo-cintura', calcularEvolucao(primeira.cintura, ultima.cintura, 'cm'))
    preencherSpan('m-evo-quadril', calcularEvolucao(primeira.quadril, ultima.quadril, 'cm'))
    preencherSpan('m-evo-coxa-direita', calcularEvolucao(primeira.coxaD, ultima.coxaD, 'cm'))
    preencherSpan('m-evo-coxa-esquerda', calcularEvolucao(primeira.coxaE, ultima.coxaE, 'cm'))
    preencherSpan('m-evo-coxa-inf-direita', calcularEvolucao(primeira.coxaInfD, ultima.coxaInfD, 'cm'))
    preencherSpan('m-evo-coxa-inf-esquerda', calcularEvolucao(primeira.coxaInfE, ultima.coxaInfE, 'cm'))
    preencherSpan('m-evo-pantu-direita', calcularEvolucao(primeira.panturrilhaD, ultima.panturrilhaD, 'cm'))
    preencherSpan('m-evo-pantu-esquerda', calcularEvolucao(primeira.panturrilhaE, ultima.panturrilhaE, 'cm'))
}

// localStorage.clear();

// const medidasGYM = [
//     {
//         data: "2025-02-10",
//         altura: 180,
//         peso: 74.9,
//         ombro: 120.5,
//         peito: 99,
//         bicepsD: 36,
//         bicepsE: 36,
//         antebracoD: 27.5,
//         antebracoE: 27,
//         punho: 16,
//         cintura: 83,
//         quadril: 99.5,
//         coxaD: 60.5,
//         coxaE: 60,
//         coxaInfD: 49.5,
//         coxaInfE: 49.5,
//         panturrilhaD: 37.5,
//         panturrilhaE: 37
//     },
//     {
//         data: "2025-03-17",
//         altura: 180,
//         peso: 78.7,
//         ombro: 121.5,
//         peito: 101.5,
//         bicepsD: 37,
//         bicepsE: 37,
//         antebracoD: 28.5,
//         antebracoE: 28,
//         punho: 16.5,
//         cintura: 85.5,
//         quadril: 101.5,
//         coxaD: 61,
//         coxaE: 61,
//         coxaInfD: 50,
//         coxaInfE: 49.5,
//         panturrilhaD: 38.5,
//         panturrilhaE: 38
//     },
//      {
//             data: "2025-04-10",
//             altura: 180, 
//             peso: 79.5,
//             ombro: 122.5,
//             peito: 102.5,
//             bicepsD: 38,
//             bicepsE: 38,
//             antebracoD: 29.5,
//             antebracoE: 29,
//             punho: 17,
//             cintura: 84.5,
//             quadril: 102.5,
//             coxaD: 62,
//             coxaE: 62,
//             coxaInfD: 51,
//             coxaInfE: 50.5,
//             panturrilhaD: 39,
//             panturrilhaE: 38.5
//         }
// ];
// localStorage.setItem('medidasGYM', JSON.stringify(medidasGYM));