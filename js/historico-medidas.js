import { getListaMedidas } from "./medidas.js"

const medidas = getListaMedidas()

const Data1 = document.getElementById('select-data-1')
const Data2 = document.getElementById('select-data-2')

function preencherSelectDatas() {
    medidas.forEach( medida => {
        const opcao1 = document.createElement("option")
        opcao1.value = medida.data
        opcao1.textContent = medida.data

        const opcao2 = opcao1.cloneNode(true)

        Data1.appendChild(opcao1)
        Data2.appendChild(opcao2)
    });
}

function preencherCampos(medida, id) {
    for (const chave in medida ) {
        const span = document.getElementById(`${id}${chave}`)
        if (span) {
            span.textContent = medida[chave]
        }
    }
}

Data1.addEventListener('change', () => {
    const dataSelecionada = Data1.value
    const medidaSelecionada = medidas.find( m => m.data === dataSelecionada)
    if (medidaSelecionada) {
        preencherCampos(medidaSelecionada, "m-")
    }
})

Data2.addEventListener('change', () => {
    const dataSelecionada = Data2.value
    const medidaSelecionada = medidas.find( m => m.data === dataSelecionada)
    if (medidaSelecionada) {
        preencherCampos(medidaSelecionada, "m2-")
    }
})

preencherSelectDatas()