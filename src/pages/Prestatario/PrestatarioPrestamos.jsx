import Slidebarprestatario from "../../components/slidebarprestatario";

function PrestatarioPrestamos() {
    
    const prestamos = [
    {
      nombre: "Prestamo Personal #3213",
      monto: "$5,000,000",
      tasa: "2.5%",
      cuotas: "3/12",
      frecuencia: "Mensual",
      vencimiento: "2026-01-15",
      estado: "Activo",
    },
    {
      nombre: "Prestamo Vehicular #2132",
      monto: "$3,500,000",
      tasa: "3.0%",
      cuotas: "2/6",
      frecuencia: "Semanal",
      vencimiento: "2025-07-10",
      estado: "Activo",
    },
    {
      nombre: "Prestamo Educativo #312",
      monto: "$2,000,000",
      tasa: "2.0%",
      cuotas: "24/24",
      frecuencia: "Quincenal",
      vencimiento: "2025-01-05",
      estado: "Pagado",
    },
    {
      nombre: "Prestamo Personal #1011",
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
        <Slidebarprestatario></Slidebarprestatario>
    <div className="space-y-6 bg-linear-to-tl from-gray-300 to-gray-100 to-50% text-black min-h-screen">
      <div className="flex items-center justify-between">
        <div className="lg:mx-50">
          <h1 className="text-5xl font-bold text-foreground mb-5 pt-10">Préstamos</h1>
          <p className="text-muted-foreground">Administra todos los préstamos activos y antiguos</p>
        </div>
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
          <tr className="text-black text-base">
            <th>Nombre</th>
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
              <td className="w-85">{p.nombre}</td>
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

export default PrestatarioPrestamos