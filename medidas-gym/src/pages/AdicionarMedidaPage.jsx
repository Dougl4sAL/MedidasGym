import { AdicionarButtons } from "../components/Buttons"
import { FormularioMedidas } from "../components/NovaMedida"

export default function AdicionarMedidaPage() {
    return (
        <div className="container">

            <AdicionarButtons />

            <div className="container-info">

                <h2>Adicionar Medida</h2>
                <FormularioMedidas />
                
            </div>

        </div>
    )
}