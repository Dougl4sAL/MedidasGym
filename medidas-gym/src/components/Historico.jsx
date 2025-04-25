// HistoricoPage.jsx
import { useState } from 'react'
import { getListaMedidas } from '../utils/storege'
import { FormatarDataBR, FormatarValorFloat } from '../utils/Formatar'
import { ResultadoEvolucao } from '../utils/Calcular'
import { NomeMedidas } from '../components/Medida'
import '../styles/Medidas.css'

// Componente para exibir cada linha de medida
const GymMedidas = ({ nomeMedida, medida = '-', unidade = '' }) => {
  // Não redenderiza o campo Data
  if (nomeMedida === 'Data') {
    return
  } else { // Renderiza os outros campos
    // se Medida igual a '-' não mostra a unidade de medida
    if (medida === '-') {
      return (
        <div className="medida-item">
          <label>{nomeMedida}:</label>
          <span>{medida}</span>
        </div>
      )
    } else {
      return (
        <div className="medida-item">
          <label>{nomeMedida}:</label>
          <span>{medida}{unidade}</span>
        </div>
      )
    }
  }
}

export default function HistoricoPage() {
  const [medidas, setMedidas] = useState(getListaMedidas())
  const [medida1, setMedida1] = useState(null)
  const [medida2, setMedida2] = useState(null)

  // Formatador de valores condicional
  const FormatarValor = (chave, valor) => {
    if (!valor || valor === '-') return '-'
    if (chave === 'Data') return FormatarDataBR(valor)
    if (chave === 'Peso') return FormatarValorFloat(valor)
    return FormatarValorFloat(valor)
  }

  // Obter unidade para cada tipo de medida
  const getUnidade = (chave) => {
    if (!chave) return ''
    if (chave === 'Peso') return ' kg'
    if (chave === 'Data') return ''
    return ' cm'
  }

  return (
    <>
        <div className="container-info">
            {/* COMPARAÇÃO 1 */}
            <div className="container-evolucao comparacao1">
            <h2>Comparar 1º mês</h2>
            
            {/* Select para primeira data */}
            <div className="medida-item">
                <label>Data:</label>
                <select 
                  value={medida1?.Data || ''} 
                  // Atualiza o estado medida1 com a medida correspondente à data selecionada
                  // O valor do select é a data, então procura a medida correspondente
                  onChange={(e) => setMedida1(medidas.find(m => m.Data === e.target.value))}
                  >
                  <option value="">Selecionar Data</option>
                  {medidas.map((medida, index) => (
                      <option key={index} value={medida.Data}>
                      {FormatarDataBR(medida.Data)}
                      </option>
                  ))}
                </select>
            </div>
            
            {/* Lista de medidas */}
            {NomeMedidas.map(chave => (
                <GymMedidas
                key={`m1-${chave}`}
                nomeMedida={chave}
                medida={medida1 ? FormatarValor(chave, medida1[chave]) : '-'}
                unidade={getUnidade(chave)}
                />
            ))}
            </div>

            {/* COMPARAÇÃO 2 */}
            <div className="container-evolucao comparacao2">
            <h2>Comparar 2º mês</h2>
            
            {/* Select para segunda data */}
            <div className="medida-item">
                <label>Data:</label>
                <select 
                value={medida2?.Data || ''} 
                onChange={(e) => setMedida2(medidas.find(m => m.Data === e.target.value))}
                >
                <option value="">Selecionar Data</option>
                {medidas.map((medida, index) => (
                    <option key={index} value={medida.Data}>
                    {FormatarDataBR(medida.Data)}
                    </option>
                ))}
                </select>
            </div>
            
            {/* Lista de medidas */}
            {NomeMedidas.map(chave => (
                <GymMedidas
                key={`m2-${chave}`}
                nomeMedida={chave}
                medida={medida2 ? FormatarValor(chave, medida2[chave]) : '-'}
                unidade={getUnidade(chave)}
                />
            ))}
            </div>

            {/* EVOLUÇÃO */}
            <div className="container-evolucao comparacao-evo">
            <h2>Diferença</h2>
            <ResultadoEvolucao primeira={medida1} ultima={medida2} />
            </div>
        </div>
    </>
  )
}