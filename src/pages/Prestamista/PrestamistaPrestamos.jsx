import { useNavigate } from "react-router-dom"
import Slidebarprestamista from "../../components/slidebarprestamista";

function PrestamistaPrestamos() {
    const navigate = useNavigate();

    const prestamos = [
    {
      cliente: "Juan Pérez",
      monto: "$5,000,000",
      tasa: "2.5%",
      cuotas: "3/12",
      frecuencia: "Mensual",
      vencimiento: "2026-01-15",
      estado: "Activo",
    },
    {
      cliente: "María García",
      monto: "$3,500,000",
      tasa: "3.0%",
      cuotas: "2/6",
      frecuencia: "Semanal",
      vencimiento: "2025-07-10",
      estado: "Activo",
    },
    {
      cliente: "Carlos Rodríguez",
      monto: "$2,000,000",
      tasa: "2.0%",
      cuotas: "24/24",
      frecuencia: "Quincenal",
      vencimiento: "2025-01-05",
      estado: "Pagado",
    },
    {
      cliente: "Ana Martínez",
      monto: "$5,000,000",
      tasa: "2.5%",
      cuotas: "12/12",
      frecuencia: "Quincenal",
      vencimiento: "2025-01-20",
      estado: "Pagado",
    },
  ];


    return(
        <>
        <Slidebarprestamista></Slidebarprestamista>
    <div className="space-y-6 bg-linear-to-tl from-gray-300 to-gray-100 to-50% text-black min-h-screen">
      <div className="flex items-center justify-between">
        <div className="lg:mx-50">
          <h1 className="text-5xl font-bold text-foreground mb-5 pt-10">Préstamos</h1>
          <p className="text-muted-foreground text-gray-600">Administra todos los préstamos otorgados</p>
        </div>
        <button
          className="btn btn-primary lg:mx-50 lg:w-40 mx-2 w-20 mt-16 bg-cyan-600 hover:bg-cyan-300 hover:text-black border-cyan-600"
          onClick={() => navigate("/prestamista/crearoferta")} 
        >
          + Nuevo Préstamo
        </button>
      </div>

      <div className="space-y-6 rounded-2xl lg:mx-50 py-10 bg-white text-black shadow-md">
        <div className="flex items-center justify-star">
        <input
          type="text"
          placeholder="Buscar préstamos..."
           className="input input-info mx-1 lg:ml-20 px-5 bg-white text-black"
        />
        <button className="btn btn-outline btn-info lg:mx-8 lg:px-6 ">Filtros</button>
        </div>
      

    <div className="overflow-x-auto lg:px-20">
      <table className="table">
        <thead>
          <tr className="text-black">
            <th>Cliente</th>
            <th>Monto</th>
            <th>Tasa</th>
            <th>Cuotas</th>
            <th>Frecuencia</th>
            <th>Vencimiento</th>
            <th>Estado</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {prestamos.map((p, index) => (
            <tr key={index} className="text-base">
              <td>{p.cliente}</td>
              <td className="bold">{p.monto}</td>
              <td>{p.tasa}</td>
              <td>{p.cuotas}</td>
              <td>{p.frecuencia}</td>
              <td>{p.vencimiento}</td>
              <td>
                <span className={`estado ${p.estado.toLowerCase()}`}>
                  {p.estado}
                </span>
              </td>
              <td>
                <button className="btn btn-outline btn-accent">Ver</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
    </div>
    </div>
        </>
    )
}

export default PrestamistaPrestamos