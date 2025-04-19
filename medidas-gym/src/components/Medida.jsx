import PropTypes from 'prop-types'
import getListaMedidas from '../utils/storege'
import '../styles/Medidas.css'

const ListaMedidas = getListaMedidas()

console.log("Medidas salvas jsx:", ListaMedidas[ListaMedidas.length - 1])

export const GymMedidas = ( {nomeMedida, medida} ) => {
    return (
        <div className="medida-item">
            <label>{nomeMedida}:</label>            
            <span>{medida}</span>
        </div>
    )
}

GymMedidas.propTypes = {
    nomeMedida: PropTypes.string.isRequired,
    medida: PropTypes.string
}



const NomeMedidas = [
    'Data', 'Altura', 'Peso', 'Ombro', 'Peito', 'Bíceps D',
    'Bíceps E', 'Antebraço D', 'Antebraço E', 'Punhos', 'Cintura',
    'Quadril', 'Coxa D', 'Coxa E', 'Coxa Inf. D', 'Coxa Inf. E',
    'Panturrilha D', 'Panturrilha E'
] 

export const Medida = ({ medida }) => {
    return (
        <div className="medida">
            {NomeMedidas.map((nomeMedida) => (
                <GymMedidas key={nomeMedida} 
                nomeMedida={nomeMedida} 
                medida={medida[nomeMedida] || '-'} />
            ))}
        </div>
    )
}

export const MedidasHomePage = () => {
    const ultimaMedida = ListaMedidas[ListaMedidas.length - 1] || {}
    return <Medida medida={ultimaMedida} />
}