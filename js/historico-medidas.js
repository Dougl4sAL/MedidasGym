import { getListaMedidas } from "./utilitarios.js"
import { formatarDataBR } from "./utilitarios.js"
import { calcularDiasEntreDatas } from "./utilitarios.js"
import { calcularEvolucao } from "./utilitarios.js"
import { preencherSpan } from "./utilitarios.js"
import { preencherCampos } from "./utilitarios.js"

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

// escolhe a 1º data e chama a a função para mostrar a evolução
Data1.addEventListener('change', () => {
    dataSelecionada1()
    exibirEvolucao()
})
function dataSelecionada1() {
    const dataSelecionada = Data1.value

    if (dataSelecionada == "0") {
        limparCamposMedida("m1-")
        return
    }

    const medidaSelecionada = medidas.find( m => m.data === dataSelecionada)
    if (medidaSelecionada) {
        preencherCampos(medidaSelecionada, "m1-")
        return medidaSelecionada
    }
    
}

// escolhe a 2º data e chama a a função para mostrar a evolução
Data2.addEventListener('change', () => {
    dataSelecionada2()
    exibirEvolucao()
})
function dataSelecionada2() {
    const dataSelecionada = Data2.value

    if (dataSelecionada == "0") {
        limparCamposMedida("m2-")
        return
    }

    const medidaSelecionada = medidas.find( m => m.data === dataSelecionada)
    if (medidaSelecionada) {
        preencherCampos(medidaSelecionada, "m2-")
        return medidaSelecionada
    }
}

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

    const medidasData1 = dataSelecionada1()
    const medidasData2 = dataSelecionada2()

    // evita gerar erro no console apos selecionar uma data e depois
    // selecionar a opção "Selecionar data" novamente
    if (!medidasData1 || !medidasData2) {
       limparCamposMedida("m-evo-")
        return
    }
    if (medidasData1.data === medidasData2.data) {
        alert("As datas escolhidas são iguais.")
        return
    }   

    // melhoria futura: selecionar todos os span fazendo um array
    // e fazer um forEach inserindo as informações pois os dados na listaMedidas
    // estão na mesma ordem que devem ser preenchidos.
    // Ex.: listaMedidas[0].altura - listaMedidas[listaMedias.length -1 ].altura
    // Obs.: Fazer um IF para descartar o id e a data 

    preencherSpan('m-evo-data', calcularDiasEntreDatas(medidasData1.data, medidasData2.data))
    preencherSpan('m-evo-altura', calcularEvolucao(medidasData1.altura, medidasData2.altura, 'cm'))
    preencherSpan('m-evo-peso', calcularEvolucao(medidasData1.peso, medidasData2.peso, 'kg'))
    preencherSpan('m-evo-ombro', calcularEvolucao(medidasData1.ombro, medidasData2.ombro, 'cm'))
    preencherSpan('m-evo-peito', calcularEvolucao(medidasData1.peito, medidasData2.peito, 'cm'))
    preencherSpan('m-evo-bicepsD', calcularEvolucao(medidasData1.bicepsD, medidasData2.bicepsD, 'cm'))
    preencherSpan('m-evo-bicepsE', calcularEvolucao(medidasData1.bicepsE, medidasData2.bicepsE, 'cm'))
    preencherSpan('m-evo-antebracoD', calcularEvolucao(medidasData1.antebracoD, medidasData2.antebracoD, 'cm'))
    preencherSpan('m-evo-antebracoE', calcularEvolucao(medidasData1.antebracoE, medidasData2.antebracoE, 'cm'))
    preencherSpan('m-evo-punho', calcularEvolucao(medidasData1.punho, medidasData2.punho, 'cm'))
    preencherSpan('m-evo-cintura', calcularEvolucao(medidasData1.cintura, medidasData2.cintura, 'cm'))
    preencherSpan('m-evo-quadril', calcularEvolucao(medidasData1.quadril, medidasData2.quadril, 'cm'))
    preencherSpan('m-evo-coxaD', calcularEvolucao(medidasData1.coxaD, medidasData2.coxaD, 'cm'))
    preencherSpan('m-evo-coxaE', calcularEvolucao(medidasData1.coxaE, medidasData2.coxaE, 'cm'))
    preencherSpan('m-evo-coxaInfD', calcularEvolucao(medidasData1.coxaInfD, medidasData2.coxaInfD, 'cm'))
    preencherSpan('m-evo-coxaInfE', calcularEvolucao(medidasData1.coxaInfE, medidasData2.coxaInfE, 'cm'))
    preencherSpan('m-evo-panturrilhaD', calcularEvolucao(medidasData1.panturrilhaD, medidasData2.panturrilhaD, 'cm'))
    preencherSpan('m-evo-panturrilhaE', calcularEvolucao(medidasData1.panturrilhaE, medidasData2.panturrilhaE, 'cm'))
}

preencherSelectDatas()