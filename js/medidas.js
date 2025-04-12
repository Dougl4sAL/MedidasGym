import { calcularDiasEntreDatas, getListaMedidas } from "./utilitarios.js"
import { formatarDataBR } from "./utilitarios.js"
import { formatarValorFloat } from "./utilitarios.js"
import { calcularEvolucao } from "./utilitarios.js"
import { preencherSpan } from "./utilitarios.js"
import { preencherCampos } from "./utilitarios.js"

const listaMedidas = getListaMedidas()

console.log("Medidas salvas ao carregar a página:", listaMedidas)

document.addEventListener("DOMContentLoaded", function () {
    exibirUltimaMedida()
    exibirEvolucao()
    
    const form = document.getElementById('form-medidas')

    if (!form) return

    form.addEventListener('submit', function (event) {
        event.preventDefault()
        
        // id com incremento para a listaMedidas
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
  
function exibirUltimaMedida() {

    if (listaMedidas.length === 0) return

    const ultima = listaMedidas[listaMedidas.length - 1]

    preencherCampos(ultima, 'm-')
}

// Modificar a função calcularEvolução() para receber apenas 
// os array primeira e ultima e dentro da função ter um for igual
// da função preencherCampos() para preencher os spans
// e deletar a função preencherSpan() que não é mais necessária
function exibirEvolucao() {

    if (listaMedidas.length === 0) return

    const primeira = listaMedidas[0]
    const ultima = listaMedidas[listaMedidas.length - 1]

    // melhoria futura: selecionar todos os span fazendo um array
    // e fazer um forEach inserindo as informações pois os dados na listaMedidas
    // estão na mesma ordem que devem ser preenchidos.
    // Ex.: listaMedidas[0].altura - listaMedidas[listaMedias.length -1 ].altura
    // Obs.: Fazer um IF para descartar o id e a data 

    preencherSpan('m-evo-data', calcularDiasEntreDatas(primeira.data, ultima.data))
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