import { HistoricoButtons } from "../components/Buttons"
import HistoricoPage from "../components/Historico"

export default function AdicionarMedidaPage() {
    return (
        <div className="container">

            <HistoricoButtons />

            <div className="container-info">

                <HistoricoPage />

            </div>

        </div>
    )
}