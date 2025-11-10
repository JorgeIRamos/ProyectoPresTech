import Slidebarprestamista from "../../components/slidebarprestamista";

function PrestamistaClientes() {
    const clientes = [
    {
      id: 1,
      nombre: "Juan Pérez",
      email: "juan@email.com",
      telefono: "300-123-4567",
      prestamos: 2,
      total: "$8,000,000",
    },
    {
      id: 2,
      nombre: "María García",
      email: "maria@email.com",
      telefono: "301-234-5678",
      prestamos: 1,
      total: "$3,500,000",
    },
    {
      id: 3,
      nombre: "Carlos Rodríguez",
      email: "carlos@email.com",
      telefono: "302-345-6789",
      prestamos: 3,
      total: "$12,000,000",
    },
  ];
    
    return(
        <>
        <Slidebarprestamista></Slidebarprestamista>
        <div className="space-y-6 bg-linear-to-tl from-gray-300 to-gray-100 to-50% text-black min-h-screen">
        <div className="lg:mx-50">
      <h1 className="text-5xl font-bold text-foreground mb-5 pt-10">Clientes</h1>
      <p className="text-muted-foreground">Gestiona la información de tus prestatarios</p>
     </div>

    <div className="space-y-6 rounded-2xl lg:mx-50 py-10 bg-white text-black shadow-md">
      <div className="flex items-center justify-star">
        <input
          type="text"
          placeholder="Buscar clientes..."
          className="input input-info mx-1 lg:ml-10 px-5 bg-white text-black"
        />
        <button className="btn btn-outline btn-info lg:mx-8 lg:px-6 ">Filtros</button>
      </div>

      <div className="lg:mx-10 space-y-4">
        {clientes.map((cliente) => (
          
          <div key={cliente.id} className="flex items-start justify-between p-4 border rounded-lg hover:bg-gray-50 transition-colors border-gray-200 bg-white text-black shadow-sm">
            <div className="flex flex-col gap-1">
              <h3 className="text-lg font-semibold text-gray-900">{cliente.nombre}</h3>
              <div className="flex gap-4 text-sm text-gray-600">
                <p>{cliente.email}</p>
                <p>{cliente.telefono}</p>
              </div>
            </div>

            <div className="flex flex-col items-end gap-2">
              <div className="text-right">
                <p className="text-sm font-medium text-gray-600">{cliente.prestamos} préstamos</p>
                <p className="text-lg font-semibold text-gray-900">{cliente.total}</p>
              </div>
              <button className="btn btn-outline btn-accent">Ver Detalles</button>
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>
        </>
    )
}

export default PrestamistaClientes