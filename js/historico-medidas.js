import { getListaMedidas } from "./utilitarios.js"
import { formatarDataBR } from "./utilitarios.js"
import { calcularDiasEntreDatas } from "./utilitarios.js"
import { calcularEvolucao } from "./utilitarios.js"
import { preencherSpan } from "./utilitarios.js"

const medidas = getListaMedidas()

const Data1 = document.getElementById('select-data-1')
const Data2 = document.getElementById('select-data-2')

// Gera as datas para ser escolhida no 1º e 2º campo
function preencherSelectDatas() {
    medidas.forEach( medida => {
        const opcao1 = document.createElement("option")
        opcao1.value = medida.data
        opcao1.textContent = formatarDataBR(medida.data)

        const opcao2 = opcao1.cloneNode(true)

        Data1.appendChild(opcao1)
        Data2.appendChild(opcao2)
    });
}

// preenche os campos das medida conforme a data escolhida
function preencherCampos(medida, id) {
    for (const chave in medida ) {
        const span = document.getElementById(`${id}${chave}`)
        if (span) {
            span.textContent = medida[chave]
        }
    }
}

// escolhe a 1º data e chama a a função para mostrar a evolução
Data1.addEventListener('change', () => {
    const dataSelecionada = Data1.value

    if (dataSelecionada == "0") {
        limparCamposMedida("m1-")
        return
    }

    const medidaSelecionada = medidas.find( m => m.data === dataSelecionada)
    if (medidaSelecionada) {
        preencherCampos(medidaSelecionada, "m1-")
    }
    
    exibirEvolucao()
})

// escolhe a 2º data e chama a a função para mostrar a evolução
Data2.addEventListener('change', () => {
    const dataSelecionada = Data2.value

    if (dataSelecionada == "0") {
        limparCamposMedida("m2-")
        return
    }

    const medidaSelecionada = medidas.find( m => m.data === dataSelecionada)
    if (medidaSelecionada) {
        console.log(medidaSelecionada)
        preencherCampos(medidaSelecionada, "m2-")
    }
    exibirEvolucao()
})

// Limpa os campos das medidas caso seja escolhida a opção "Selecionar data"
function limparCamposMedida(id) {
    const campos = [
        "data", "altura", "peso", "ombro", "peito",
        "bicepsD", "bicepsE", "antebracoD", "antebracoE", "punho",
        "cintura", "quadril", "coxaD", "coxaE",
        "coxaInfD", "coxaInfE", "panturrilhaD", "panturrilhaE"
    ]

    campos.forEach(campo => {
        const span = document.getElementById(`${id}${campo}`)
        if (span) {
            span.textContent = "-"
        }
    })
}

function exibirEvolucao() {

    if (medidas.length === 0) return

    const primeira = medidas[0]
    const ultima = medidas[medidas.length - 1]

    console.log("Funcionando")

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

preencherSelectDatas()