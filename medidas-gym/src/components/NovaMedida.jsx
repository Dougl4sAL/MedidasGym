import PropTypes from 'prop-types'
import getListaMedidas from '../utils/storege'
import { NomeMedidas } from '../components/Medida'
import '../styles/AdicionarMedida.css'

const ListaMedidas = getListaMedidas()

export const FormularioData = () => {
    return (
        <div className="medida-item">
            <label htmlFor="data">Data:</label>
            <input type="date" id="data" name="data" required />
        </div>
    )
}

export const FormularioRestante = ({ nomeMedida }) => {
    return (
        <div className="medida-item">
            <label htmlFor={nomeMedida}>{nomeMedida}:</label>
            <input type="number" id={nomeMedida} name={nomeMedida} required />
        </div>
    )
}

export const FormularioInputMedida = ({ NomeMedida }) => {
    return (
        <div className="formulario-medida">
            <form id="formulario-medida" method="post" action="/adicionar">
                <FormularioData />
                {NomeMedidas.map((nomeMedida) => {
                    return nomeMedida === 'Data' ? null : (
                        <FormularioRestante key={nomeMedida} nomeMedida={nomeMedida} />
                    )
                })}
                <div className="linha-botao">
                    <button type="submit" className='btn btn-submit'>Adicionar Medida</button>
                </div>
            </form>
        </div>
    )
}

export const FormularioMedidas = () => {
    return <FormularioInputMedida nome={NomeMedidas} />
}