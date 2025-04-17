// src/components/Buttons.jsx
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

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

// Objeto com todos os botões disponíveis
const buttonConfigs = {
  home: { to: "/", text: "Voltar ao Início" },
  adicionar: { to: "/adicionar", text: "Nova Medida" },
  historico: { to: "/historico", text: "Histórico Medidas" },
  relatorio: { to: "/relatorio", text: "Relatório Coportal" }
}

// Componente flexível para grupos de botões
export const ButtonGroup = ({ buttons }) => (
  <div className="topo">
    {buttons.map((buttonKey) => (
      <GymButton key={buttonKey} {...buttonConfigs[buttonKey]} />
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