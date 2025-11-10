import { useNavigate } from "react-router-dom";
import Slidebarprestamista from "../../components/slidebarprestamista";

function PrestamistaDashboard() {
    const navigate = useNavigate();

  const stats = [
    {
      label: "Total",
      value: "$45,250,000",
      description: "Préstamos activos",
    },
    {
      label: "Este mes",
      value: "$8,450,000",
      description: "Pagos recibidos",
    },
    {
      label: "Activos",
      value: "24",
      description: "Clientes",
    },
    {
      label: "Atención",
      value: "3",
      description: "Pagos vencidos",
    },
  ];

  const recentLoans = [
    { name: "Juan Pérez", date: "2025-01-15", amount: "$5,000,000" },
    { name: "María García", date: "2025-01-10", amount: "$3,500,000" },
    { name: "Carlos Rodríguez", date: "2025-01-05", amount: "$2,000,000"},
  ];

    return(
        <>
        <Slidebarprestamista />
        <div className="space-y-6 bg-linear-to-tl from-gray-300 to-gray-100 to-50% text-black min-h-screen">
        <div className="flex items-center justify-between">
        <div className="lg:mx-40">
          <h1 className="text-5xl font-bold text-foreground mb-5 pt-10">Dashboard</h1>
          <p className="text-muted-foreground text-gray-600">Resumen general de tu cartera de préstamos</p>
        </div>
        <button
          className="btn btn-primary lg:mx-40 lg:w-40 mx-2 w-20 mt-16 bg-cyan-600 hover:bg-cyan-300 hover:text-black border-cyan-600"
          onClick={() => navigate("/prestamista/crearoferta")}
        >
          + Nuevo Préstamo
        </button>
      </div>

      <div className="flex flex-wrap justify-center">
        {stats.map((stat, index) => (
          <div key={index} className="card w-100 h-40 mb-2 bg-white text-black shadow-md mx-1 transform transition duration-300 hover:scale-105 hover:shadow-xl">
            <div className="card-body">
              <span className="card-title">{stat.label}</span>
            </div>
            <div className="mx-3 font-semibold text-3xl ml-5">{stat.value}</div>
            <div className="mx-3 mb-2 font-light ml-5">{stat.description}</div>
          </div>
        ))}
      </div>

      <div className="space-y-6 rounded-2xl lg:mx-35 py-15 bg-white text-black shadow-md">
        <div className="flex items-center justify-between lg:mx-10">
          <h2 className="text-4xl font-bold text-foreground mb-5">Préstamos Recientes</h2>
          <a href="/Prestamista/Prestamos" className="hover:bg-gray-200 duration-300 ease-in-out rounded-xl lg:mx-10 text-black">
            Ver todos
          </a>
        </div>

        <div className="lg:mx-10 space-y-4">
          {recentLoans.map((loan, index) => (
            <div key={index} className="flex items-center justify-between p-4 border rounded-lg hover:bg-muted/50 transition-colors border-gray-500/30 bg-white text-black shadow-md">
              <div className="dashboard-loan-info">
                <div className="card-title">{loan.name}</div>
                <div className="text-gray-500 text-sm">Fecha: {loan.date}</div>
              </div>
                <div className="font-semibold text-xl">{loan.amount}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
        </>
    )
    
}

export default PrestamistaDashboard;