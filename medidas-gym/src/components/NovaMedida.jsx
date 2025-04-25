import '../styles/Medidas.css'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { NomeMedidas } from '../components/Medida'
import { getListaMedidas, salvarMedidas } from '../utils/storege'

export const FormularioMedidas = () => {
  const navigate = useNavigate()
   // Estado para armazenar os dados do formulário
    // useState permite adicionar estado a um componente funcional
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

  // Função para lidar com mudanças nos campos do formulário
  const handleChange = (e) => {
    // acessa o elemento que disparou o evento
    // essa const Extrai o nome do campo e seu valor
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev, //  Copia todos os valores anteriores
      [name]: value // Atualiza o valor do campo específico
    }))
  }

    // Função para lidar com o envio do formulário
  const handleSubmit = (e) => {    
    // Converter valores para número (exceto Data)
    const medidaFormatada = Object.fromEntries(
      // Object.entries transforma o objeto em um array de pares chave-valor Tipo: [['chave1', 'valor1']]
      // e depois mapeia cada par para um novo par, convertendo os valores
      Object.entries(formData).map(([key, value]) => [
        key, 
        key === 'Data' ? value : parseFloat(value) || 0
      ])
    )

    const listaAtual = getListaMedidas()
    const novaLista = [...listaAtual, medidaFormatada]
    
    salvarMedidas(novaLista)
    alert("Medidas salvas com sucesso!")
    navigate('/')
  }

  return (
    <div className="formulario-medida">
      <form id="formulario-medida" onSubmit={handleSubmit}>
        <h2>Adicionar Medida</h2>
        
        {NomeMedidas.map((nomeMedida) => (
          <div className="medida-item" key={nomeMedida}>
            <label htmlFor={nomeMedida} className='medida-item-label-input'>{nomeMedida}:</label>
            {/* Operador ternario para renderizar o campo de entrada correto
            Se o nome da medida for 'Data', renderiza um campo de data
            caso contrário, um campo numérico */}
            {nomeMedida === 'Data' ? (
              <input
                type="date"
                id={nomeMedida}
                name={nomeMedida}
                value={formData[nomeMedida]}
                // chama sempre que o valor mudar para atualizar o estado
                // O valor do campo é o estado correspondente
                onChange={handleChange}
                required
              />
            ) : (
              <input
                type="number"
                id={nomeMedida}
                name={nomeMedida}
                // step é usado para permitir entradas decimais
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