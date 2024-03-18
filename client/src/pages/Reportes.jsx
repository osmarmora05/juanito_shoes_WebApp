import ReportCard from "../components/ReportCard";
import ScreenHeader from "../components/ScreenHeader";
import { CatalogoIcon, ClientesIcon, PedidosIcon, RegistrarCatalogoIcon, TrabajadoresIcon } from "../components/ui/Icons";
import '../css/reportes.css'

export default function Reportes () {

    const REPORTS = [
        {
            id: "Catalogo",
            icon: <CatalogoIcon/>,
            text: "Catalogo"
        },
        {
            id: "Registro_productos",
            icon: <RegistrarCatalogoIcon/>,
            text: <span>Registro<br/>Productos</span>
        },
        {
            id: "Pedidos",
            icon: <PedidosIcon/>,
            text: "Pedidos"            
        },
        {
            id: "Clientes",
            icon: <ClientesIcon/>,
            text: "Clientes"
        },
        {
            id: "Trabajadores",
            icon: <TrabajadoresIcon/>,
            text: "Trabajadores"
        }
    ]
    return(
       <section className="reportes">
            <ScreenHeader title="Reportes" description="Reportes para tus futuros analisis"/>
            <div className="reportes__content">
                <ReportCard values={REPORTS}/>
            </div>
       </section>
    )
}
