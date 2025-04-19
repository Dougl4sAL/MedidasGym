import ProTypes from 'prop-types';
import getListaMedidas from '../utils/storege';

const ListaMedidas = getListaMedidas()

const MedidaPropTypes = {
    data: ProTypes.string.isRequired,
    altura: ProTypes.number.isRequired,
    peso: ProTypes.number.isRequired,
    ombro: ProTypes.number.isRequired,
    peito: ProTypes.number.isRequired,
    bicepsD: ProTypes.number.isRequired,
    bicepsE: ProTypes.number.isRequired,
    antebracoD: ProTypes.number.isRequired,
    antebracoE: ProTypes.number.isRequired,
    punho: ProTypes.number.isRequired,
    cintura: ProTypes.number.isRequired,
    quadril: ProTypes.number.isRequired,
    coxaD: ProTypes.number.isRequired,
    coxaE: ProTypes.number.isRequired,
    coxaInfD: ProTypes.number.isRequired,
    coxaInfE: ProTypes.number.isRequired,
    panturrilhaD: ProTypes.number.isRequired,
    panturrilhaE: ProTypes.number.isRequired
}

export const GymMedidas = ( id ) => {
    
}

const NomeMedidas = [
    'data', 'altura', 'peso', 'ombro', 'peito', 'bicepsD',
    'bicepsE', 'antebracoD', 'antebracoE', 'punho', 'cintura',
    'quadril', 'coxaD', 'coxaE', 'coxaInfD', 'coxaInfE',
     'panturrilhaD', 'panturrilhaE'
] 

export const Medida = ({ medida }) => {
    return (
        <div className="medida">
            {NomeMedidas.map((nome, index) => (
                <div key={index} className="medida-item">
                    <label>{nome}:</label>
                    <span> {medida[nome]} </span>
                </div>
            ))}
        </div>
    )
}