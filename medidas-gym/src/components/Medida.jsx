import '../styles/Medidas.css'
import PropTypes from 'prop-types'
import {getListaMedidas} from '../utils/storege'
import { ResultadoEvolucao } from '../utils/Calcular'
import { FormatarDataBR, FormatarValorFloat } from '../utils/Formatar'

const ListaMedidas = getListaMedidas()

export const GymMedidas = ( {nomeMedida, medida, unidade = ''} ) => {
    return (
        <div className="medida-item">
            <label>{nomeMedida}:</label>            
            <span>{medida + unidade}</span>
        </div>
    )
}

GymMedidas.propTypes = {
    nomeMedida: PropTypes.string.isRequired,
    medida: PropTypes.string
}

export const NomeMedidas = [
    'Data', 'Altura', 'Peso', 'Ombro', 'Peito', 'Bíceps D',
    'Bíceps E', 'Antebraço D', 'Antebraço E', 'Punhos', 'Cintura',
    'Quadril', 'Coxa D', 'Coxa E', 'Coxa Inf. D', 'Coxa Inf. E',
    'Panturrilha D', 'Panturrilha E'
] 

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

export const MedidasHomePage = () => {
    const ultimaMedida = ListaMedidas[ListaMedidas.length - 1] || {}
    return <Medida medida={ultimaMedida} />
}

export const MedidasEvolucao = () => {
    const primeiraMedida = ListaMedidas[0] || {}
    const ultimaMedida = ListaMedidas[ListaMedidas.length - 1] || {}

    return <ResultadoEvolucao primeira={primeiraMedida} ultima={ultimaMedida} />
}