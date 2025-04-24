// HistoricoPage.jsx
import { useState } from 'react'
import { getListaMedidas } from '../utils/storege'
import { FormatarDataBR, FormatarValorFloat } from '../utils/Formatar'
import { CalcularEvolucao, CalcularDiasEntreDatas } from '../utils/Calcular'
import '../styles/Medidas.css'

// Lista de medidas para mapeamento
const NOME_MEDIDAS = [
  'Data', 'Altura', 'Peso', 'Ombro', 'Peito', 'Bíceps D',
  'Bíceps E', 'Antebraço D', 'Antebraço E', 'Punhos', 'Cintura',
  'Quadril', 'Coxa D', 'Coxa E', 'Coxa Inf. D', 'Coxa Inf. E',
  'Panturrilha D', 'Panturrilha E'
]

// Componente para exibir cada linha de medida
const GymMedidas = ({ nomeMedida, medida = '-', unidade = '' }) => (
  <div className="medida">
    <label>{nomeMedida}:</label>
    <span>{medida}{unidade}</span>
  </div>
)

// Componente para exibir cada linha de evolução
const GymEvolucao = ({ medida = '-' }) => (
  <div className="medida-evo">
    <span>{medida}</span>
  </div>
)

// Componente para o resultado da evolução
const ResultadoEvolucao = ({ primeira, ultima }) => {
  if (!primeira || !ultima) {
    return NOME_MEDIDAS.map(chave => (
      <GymEvolucao key={chave} />
    ))
  }

  return (
    <>
      {NOME_MEDIDAS.map((chave) => {
        if (chave === 'Data') {
          return (
            <GymEvolucao
              key={chave}
              medida={CalcularDiasEntreDatas(primeira[chave], ultima[chave])}
            />
          )
        }
        
        const unidade = chave === 'Peso' ? 'kg' : 'cm'
        return (
          <GymEvolucao
            key={chave}
            medida={CalcularEvolucao(primeira[chave], ultima[chave], unidade)}
          />
        )
      })}
    </>
  )
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
            <div className="container-medidas comparacao1">
            <h2>Comparar 1º mês</h2>
            
            {/* Select para primeira data */}
            <div className="medida">
                <label>Data:</label>
                <select 
                value={medida1?.Data || ''} 
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
            {NOME_MEDIDAS.map(chave => (
                <GymMedidas
                key={`m1-${chave}`}
                nomeMedida={chave}
                medida={medida1 ? FormatarValor(chave, medida1[chave]) : '-'}
                unidade={getUnidade(chave)}
                />
            ))}
            </div>

            {/* COMPARAÇÃO 2 */}
            <div className="container-medidas comparacao2">
            <h2>Comparar 2º mês</h2>
            
            {/* Select para segunda data */}
            <div className="medida">
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
            {NOME_MEDIDAS.map(chave => (
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