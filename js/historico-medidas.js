import { getListaMedidas } from "./utilitarios.js"
import { formatarDataBR } from "./utilitarios.js"
import { preencherCampos } from "./utilitarios.js"
import { preencherEvolucao } from "./utilitarios.js"

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
    }   

    // Chama a função preecherEvolucao() onde ela seleciona os ids
    // em seguida chama a função calcularEvolucao() para calcular a diferença entre as medidas
    // e preencher os campos com o resultado
    preencherEvolucao(medidasData1, medidasData2)
}

preencherSelectDatas()