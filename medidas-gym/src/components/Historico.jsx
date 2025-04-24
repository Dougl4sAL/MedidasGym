import {getListaMedidas} from '../utils/storege'
import { GymMedidas } from './Medida'

const ListaMedidas = getListaMedidas()

// Gera o select para selecionar as datas
const SelecionarDatas = ({ ListaMedidas }) => {
    return (
        <select id="select-data" className="select-data">
            <option value="0">Selecione uma data</option>
            {ListaMedidas.map((medida, index) => (
                <option key={index} value={medida.Data}>
                    {medida.Data}
                </option>
            ))}
        </select>
    )
}

// Pega as dastas selecionadas e mostra as medidas
const MedidasSelecionadas = () => {
    const dataSelecionada1 = document.getElementsByClassName('select-data-1').value
    const dataSelecionada2 = document.getElementByClassName('select-data-2').value

    const medidaSelecionada1 = ListaMedidas.find(m => m.Data === dataSelecionada1)
    const medidaSelecionada2 = ListaMedidas.find(m => m.Data === dataSelecionada2)

    if (medidaSelecionada1) {
        preencherCampos(medidaSelecionada1, "m1-")
    }
    if (medidaSelecionada2) {
        preencherCampos(medidaSelecionada2, "m2-")
    }
}

const Medida = ({ medida }) => {
    return (
        <>
        {/* Não pode usar if porque não chama funções JSX */}
            {NomeMedidas.map((nomeMedida) => {
                return nomeMedida === 'Data' ? (
                    <GymMedidas
                        key={nomeMedida}
                        nomeMedida={nomeMedida}
                        medida={FormatarDataBR(medida[nomeMedida])}
                        unidade=""
                    />
                ) : nomeMedida === 'Peso' ? (
                    <GymMedidas
                        key={nomeMedida}
                        nomeMedida={nomeMedida}
                        medida={FormatarValorFloat(medida[nomeMedida])}
                        unidade=" kg"
                    />
                ) : (
                    <GymMedidas
                        key={nomeMedida}
                        nomeMedida={nomeMedida}
                        medida={medida[nomeMedida]}
                        unidade=" cm"
                    />
                )
            })}
        </>
    )
}