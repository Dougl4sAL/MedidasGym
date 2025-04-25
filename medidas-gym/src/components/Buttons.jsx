// src/components/Buttons.jsx
import '../styles/Buttons.css'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

// Botão genérico reutilizável
export const GymButton = ({ to, text, className = '' }) => (
  <Link to={to} className={`btn ${className}`}>
    {text}
  </Link>
)

GymButton.propTypes = {
  to: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  className: PropTypes.string
}

// array que vai ser passado para o botão generico 
// com as propriedades to e o Nome que vai aparecer na tela
const buttonConfigs = {
  home: { to: "/", text: "Voltar ao Início" },
  adicionar: { to: "/adicionar", text: "Nova Medida" },
  historico: { to: "/historico", text: "Histórico Medidas" },
  relatorio: { to: "/relatorio", text: "Relatório Corporal" }
}

// Componente flexível para grupos de botões
// recebe o array e mapeia ele passando cada elemento para a função
// key serve para melhorar o react, evitando recriar componentes e melhora desempenho
export const ButtonGroup = ({ buttons }) => (
  <div className="topo">
    {/* Espalha props dinamicamente sem precisar nomear cada uma */}
    {buttons.map((buttonKey) => ( // Chave única para a lista
      <GymButton key={buttonKey} {...buttonConfigs[buttonKey]} />
      // Os ... espalha { to: "...", text: "..." } como props
    ))}
  </div>
)

ButtonGroup.propTypes = {
  buttons: PropTypes.arrayOf(
    PropTypes.oneOf(['home', 'adicionar', 'historico', 'relatorio'])
  ).isRequired
}

// Configurações pré-definidas para cada página
export const HomeButtons = () => (
  <ButtonGroup buttons={['adicionar', 'historico', 'relatorio']} />
)

export const AdicionarButtons = () => (
  <ButtonGroup buttons={['home', 'historico', 'relatorio']} />
)

export const HistoricoButtons = () => (
  <ButtonGroup buttons={['adicionar', 'home', 'relatorio']} />
)

export const RelatorioButtons = () => (
  <ButtonGroup buttons={['adicionar', 'historico', 'home']} />
)