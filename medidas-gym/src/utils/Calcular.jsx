import PropTypes from 'prop-types'
import { FormatarValorFloat } from './Formatar'
import { NomeMedidas } from '../components/Medida'
import '../styles/Medidas.css'

// para calcular a diferença entre a Data1 e Data2
export function CalcularEvolucao(primeira, ultima, unidade = '') {
    const resultado = parseFloat(ultima) - parseFloat(primeira)

    if (resultado > 0) {
        return '+ ' + FormatarValorFloat(resultado, unidade)
    } else if (resultado < 0) {
        // math.abs() evita na tela fique - - 1.5
        return '- ' + FormatarValorFloat(Math.abs(resultado), unidade)
    } else {
        return '0.0 ' + unidade
    }
}

export function CalcularDiasEntreDatas(data1, data2) {
    // converte as datas para um formato que possa calcular
    const d1 = new Date(data1);
    const d2 = new Date(data2);
  
    // Zera a hora para evitar diferença por horário
    d1.setHours(0, 0, 0, 0);
    d2.setHours(0, 0, 0, 0);

    const diferencaEmMs = Math.abs(d2 - d1);
    // converte o calculo acima de milessegundos para dias com essa formula abaixo
    const diferencaEmDias = Math.ceil(diferencaEmMs / (1000 * 60 * 60 * 24));
    
    if (diferencaEmDias > 1) {
        return diferencaEmDias + " dias"
    } else {
        return diferencaEmDias;
    }
}

// Calcula a diferença entre duas medidas
const GymEvolucao = ({ medida }) => {
    return (
        <div className="medida-item">
            <span>{medida || '-'}</span>
        </div>
    )
}

GymEvolucao.propTypes = {
    medida: PropTypes.string
}

export const ResultadoEvolucao = ({ primeira, ultima }) => {
    return (
        <>
            {NomeMedidas.map((chave) => {
                // verifica se a chave existe no objeto antes de acessar
                const valorPrimeira = primeira?.[chave] || '-';
                const valorUltima = ultima?.[chave] || '-';
                if (chave === 'Data') {
                    return (
                        <GymEvolucao
                            key={chave}                         
                            medida={CalcularDiasEntreDatas
                                (valorPrimeira, valorUltima)}
                        />
                    )
                } else if (chave === 'Peso') {
                    return (
                        <GymEvolucao
                            key={chave}
                            medida={CalcularEvolucao
                                (valorPrimeira, valorUltima, 'kg')}
                        />
                    )
                } else {
                    return (
                        <GymEvolucao
                            key={chave}
                            medida={CalcularEvolucao
                                (valorPrimeira, valorUltima, 'cm')}
                        />
                    )
                }
            })}
        </>
    )
}



  