import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { getListaMedidas, salvarMedidas } from '../utils/storege'
import { NomeMedidas } from '../components/Medida'

export const FormularioMedidas = () => {
  const navigate = useNavigate()

  const [formData, setFormData] = useState({
    Data: '',
    Altura: '',
    Peso: '',
    Ombro: '',
    Peito: '',
    'Bíceps D': '',
    'Bíceps E': '',
    'Antebraço D': '',
    'Antebraço E': '',
    Punhos: '',
    Cintura: '',
    Quadril: '',
    'Coxa D': '',
    'Coxa E': '',
    'Coxa Inf. D': '',
    'Coxa Inf. E': '',
    'Panturrilha D': '',
    'Panturrilha E': ''
 })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    
    // Converter valores para número (exceto Data)
    const medidaFormatada = Object.fromEntries(
      Object.entries(formData).map(([key, value]) => [
        key, 
        key === 'Data' ? value : parseFloat(value) || 0
      ])
    )

    const listaAtual = getListaMedidas()
    const novaLista = [...listaAtual, medidaFormatada]
    
    salvarMedidas(novaLista)
    alert("Medidas salvas com sucesso!")
    navigate('/');
  }

  return (
    <div className="formulario-medida">
      <form onSubmit={handleSubmit}>
        <h2>Adicionar Medida</h2>
        
        {NomeMedidas.map((nomeMedida) => (
          <div className="medida-item" key={nomeMedida}>
            <label htmlFor={nomeMedida}>{nomeMedida}:</label>
            {nomeMedida === 'Data' ? (
              <input
                type="date"
                id={nomeMedida}
                name={nomeMedida}
                value={formData[nomeMedida]}
                onChange={handleChange}
                required
              />
            ) : (
              <input
                type="number"
                id={nomeMedida}
                name={nomeMedida}
                step="0.1"
                value={formData[nomeMedida]}
                onChange={handleChange}
                required
              />
            )}
          </div>
        ))}
        
        <div className="linha-botao">
          <button type="submit" className="btn btn-submit">
            Adicionar Medida
          </button>
        </div>
      </form>
    </div>
  )
}