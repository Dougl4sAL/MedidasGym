import { calcularDiasEntreDatas, getListaMedidas } from "./utilitarios.js"
import { preencherEvolucao } from "./utilitarios.js"
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
            ? listaMedidas[listaMedidas.length - 1].id + 1 : 1

        const novaMedida = {
            id: novoId,
            data: document.getElementById('m-data').value,
            altura: parseFloat(document.getElementById('m-altura').value),
            peso: parseFloat(document.getElementById('m-peso').value),
            ombro: parseFloat(document.getElementById('m-ombro').value),
            peito: parseFloat(document.getElementById('m-peito').value),
            bicepsD: parseFloat(document.getElementById('m-bicepsD').value),
            bicepsE: parseFloat(document.getElementById('m-bicepsE').value),
            antebracoD: parseFloat(document.getElementById('m-antebracoD').value),
            antebracoE: parseFloat(document.getElementById('m-antebracoE').value),
            punho: parseFloat(document.getElementById('m-punho').value),
            cintura: parseFloat(document.getElementById('m-cintura').value),
            quadril: parseFloat(document.getElementById('m-quadril').value),
            coxaD: parseFloat(document.getElementById('m-coxaD').value),
            coxaE: parseFloat(document.getElementById('m-coxaE').value),
            coxaInfD: parseFloat(document.getElementById('m-coxaInfD').value),
            coxaInfE: parseFloat(document.getElementById('m-coxaInfE').value),
            panturrilhaD: parseFloat(document.getElementById('m-panturrilhaD').value),
            panturrilhaE: parseFloat(document.getElementById('m-panturrilhaE').value)
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

function exibirEvolucao() {

    if (listaMedidas.length === 0) return

    const primeira = listaMedidas[0]
    const ultima = listaMedidas[listaMedidas.length - 1]

    // Chama a função preecherEvolucao() onde ela seleciona os ids
    // em seguida chama a função calcularEvolucao() para calcular a diferença entre as medidas
    // e preencher os campos com o resultado
    preencherEvolucao(primeira, ultima)

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