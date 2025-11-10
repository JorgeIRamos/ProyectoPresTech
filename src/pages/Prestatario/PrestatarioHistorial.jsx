import Slidebarprestatario from "../../components/slidebarprestatario"

function PrestatarioHistorial() {
    const pagos = [
    {
      id: 1,
      fecha: "15 Abr 2025",
      tipopago: "Transferencia",
      total: "$380,000",
    },
    {
      id: 2,
      fecha: "15 Mar 2025",
      tipopago: "Transferencia",
      total: "$380,000",
    },
    {
      id: 3,
      fecha: "15 Feb 2025",
      tipopago: "Efectivo",
      total: "$380,000",
    },
  ];
    
    
    return(
        <>
        <Slidebarprestatario></Slidebarprestatario>
        <div className="space-y-6 bg-linear-to-tl from-gray-300 to-gray-100 to-50% text-black min-h-screen">
        <div className="lg:mx-50">
      <h1 className="text-5xl font-bold text-foreground mb-5 pt-10">Historial</h1>
      <p className="text-muted-foreground">Gestiona la información de los pagos realizados</p>
     </div>

    <div className="space-y-6 rounded-2xl lg:mx-50 py-10 bg-white text-black shadow-md">
      
      <div className="lg:mx-10 space-y-4">
        {pagos.map((pagos) => (
          
          <div key={pagos.id} className="flex items-start justify-between p-4 border rounded-lg hover:bg-gray-50 transition-colors border-gray-200 bg-white text-black shadow-sm">
            <div className="flex flex-col gap-1">
              <h3 className="text-lg font-semibold text-gray-900">{pagos.fecha}</h3>
              <div className="flex gap-4 text-sm text-gray-600">
                <p>{pagos.tipopago}</p>
              </div>
            </div>

            <div className="flex flex-col items-end gap-2">
              <div className="text-right">
                <p className="text-lg font-semibold text-gray-900">{pagos.total}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    
    <section className="p-6">
        <div className=" mx-45 border rounded-lg hover:bg-gray-50 transition-colors border-gray-200 bg-white text-black shadow-sm h-50">
        <h2 className="text-xl font-semibold mb-5 mx-10 my-5">Resumenes generales</h2>
        <div className="grid md:grid-cols-3 ">
          <div className="p-4 bg-gray-300/20 rounded-lg mx-10">
            <p className="text-sm text-muted-foreground mb-1">Total pagado</p>
            <h3 className="text-2xl font-bold">$1,140,000</h3>
          </div>
          <div className="p-4 bg-gray-300/20 rounded-lg mx-10">
            <p className="text-sm text-muted-foreground mb-1"> Numero de pagos</p>
            <h3 className="text-2xl font-bold">3</h3>
          </div>
          <div className="p-4 bg-gray-300/20 rounded-lg mx-10">
            <p className="text-sm text-muted-foreground mb-1">Saldo Restante</p>
            <h3 className="text-2xl font-bold">$3,860,000</h3>
          </div>
        </div>
        </div>
      </section>

    </div>
        </>
    )
}

export default PrestatarioHistorial