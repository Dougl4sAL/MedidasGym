// HistoricoPage.jsx
// HistoricoPage.jsx
import { useState, useEffect } from 'react';
import { getListaMedidas } from '../utils/storege';
import { formatarDataBR, preencherCampos, preencherEvolucao } from '../utils/utilitarios';
import Navbar from '../components/NavBar';
import { HistoricoButtons } from '../components/Buttons';

export default function HistoricoPage() {
  const [medidas, setMedidas] = useState(getListaMedidas());
  const [medida1, setMedida1] = useState(null);
  const [medida2, setMedida2] = useState(null);

  // Atualiza os selects quando as medidas mudam
  useEffect(() => {
    const select1 = document.getElementById('select-data-1');
    const select2 = document.getElementById('select-data-2');
    
    // Limpa os selects
    select1.innerHTML = '<option value="0">Selecionar Data</option>';
    select2.innerHTML = '<option value="0">Selecionar Data</option>';
    
    // Preenche com as opções
    medidas.forEach(medida => {
      const option1 = document.createElement('option');
      option1.value = medida.data;
      option1.textContent = formatarDataBR(medida.data);
      
      const option2 = option1.cloneNode(true);
      
      select1.appendChild(option1);
      select2.appendChild(option2);
    });
  }, [medidas]);

  // Manipuladores de eventos
  const handleData1Change = (e) => {
    const dataSelecionada = e.target.value;
    if (dataSelecionada === "0") {
      limparCamposMedida("m1-");
      setMedida1(null);
      return;
    }
    const medida = medidas.find(m => m.data === dataSelecionada);
    setMedida1(medida);
    exibirEvolucao();
  };

  const handleData2Change = (e) => {
    const dataSelecionada = e.target.value;
    if (dataSelecionada === "0") {
      limparCamposMedida("m2-");
      setMedida2(null);
      return;
    }
    const medida = medidas.find(m => m.data === dataSelecionada);
    setMedida2(medida);
    exibirEvolucao();
  };

  const limparCamposMedida = (prefixo) => {
    const campos = [
      "data", "altura", "peso", "ombro", "peito",
      "bicepsD", "bicepsE", "antebracoD", "antebracoE", "punho",
      "cintura", "quadril", "coxaD", "coxaE",
      "coxaInfD", "coxaInfE", "panturrilhaD", "panturrilhaE"
    ];

    campos.forEach(campo => {
      const span = document.getElementById(`${prefixo}${campo}`);
      if (span) span.textContent = "-";
    });
  };

  const exibirEvolucao = () => {
    if (!medida1 || !medida2) {
      limparCamposMedida("m-evo-");
      return;
    }
    if (medida1.data === medida2.data) {
      alert("As datas escolhidas são iguais.");
    }
    preencherEvolucao(medida1, medida2);
  };

  return (
    <>
        <div className="container-info">
          {/* COMPARAÇÃO 1 */}
          <div className="container-medidas comparacao1">
            <h2>Comparar 1º mês</h2>
            <div className="medida">
              <label>Data:</label>
              <select id="select-data-1" onChange={handleData1Change}>
                <option value="0">Selecionar Data</option>
              </select>
            </div>
            <div className="medida">
              <label>Altura:</label>
              <span id="m1-altura">-</span>
            </div>
            {/* Repita para todos os outros campos */}
            <div className="medida">
              <label>Peso:</label>
              <span id="m1-peso">-</span>
            </div>
            {/* ... outros campos ... */}
          </div>

          {/* COMPARAÇÃO 2 */}
          <div className="container-medidas comparacao2">
            <h2>Comparar 2º mês</h2>
            <div className="medida">
              <label>Data:</label>
              <select id="select-data-2" onChange={handleData2Change}>
                <option value="0">Selecionar Data</option>
              </select>
            </div>
            <div className="medida">
              <label>Altura:</label>
              <span id="m2-altura">-</span>
            </div>
            {/* Repita para todos os outros campos */}
            <div className="medida">
              <label>Peso:</label>
              <span id="m2-peso">-</span>
            </div>
            {/* ... outros campos ... */}
          </div>

          {/* EVOLUÇÃO */}
          <div className="container-evolucao comparacao-evo">
            <h2>Diferença</h2>
            <div className="medida-evo">
              <span id="m-evo-data">-</span>
            </div>
            <div className="medida-evo">
              <span id="m-evo-altura">-</span>
            </div>
            {/* Repita para todos os outros campos */}
            <div className="medida-evo">
              <span id="m-evo-peso">-</span>
            </div>
            {/* ... outros campos ... */}
          </div>
        </div>
    </>
  )
}