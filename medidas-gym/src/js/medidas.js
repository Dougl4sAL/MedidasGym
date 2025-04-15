import { getListaMedidas } from "./utilitarios.js"
import { preencherEvolucao, preencherCampos } from "./utilitarios.js"

const listaMedidas = getListaMedidas()

console.log("Medidas salvas ao carregar a página:", listaMedidas)  

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

exibirUltimaMedida()
exibirEvolucao()

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