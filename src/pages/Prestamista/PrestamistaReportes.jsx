import Slidebarprestamista from "../../components/slidebarprestamista"

function PrestamistaReportes() {
    return(
        <>
        <Slidebarprestamista></Slidebarprestamista>
        <div className="space-y-6 bg-linear-to-tl from-gray-300 to-gray-100 to-50% text-black min-h-screen">
      <header className="lg:mx-60">
        <h1 className="text-5xl font-bold text-foreground mb-5 pt-10">Reportes</h1>
        <p className="text-muted-foreground text-gray-600">Genera y descarga reportes financieros</p>
      </header>

      <section className="flex justify-center mx-50">
        <div className="card w-90 mb-2 bg-white shadow-md mx-1">
        <div className="card-body">
          <h2 className="card-title">Reporte de Préstamos</h2>
          <p className="text-muted-foreground">Listado completo de todos los préstamos con detalles de montos, tasas y estados.</p>
          <button className="btn btn-info my-3 text-white">Descargar PDF</button>
        </div>
        </div>

        <div className="card w-90 mb-2 bg-white shadow-md mx-1">
        <div className="card-body">
          <h2 className="card-title">Reporte de Pagos</h2>
          <p className="text-muted-foreground">Historial detallado de todos los pagos recibidos con fechas y montos.</p>
          <button className="btn btn-info my-3 text-white">Descargar Excel</button>
        </div>
        </div>

        <div className="card w-90 mb-2 bg-white shadow-md mx-1">
        <div className="card-body">
          <h2 className="card-title">Reporte de Clientes</h2>
          <p className="text-muted-foreground">Información completa de clientes con historial de préstamos y pagos.</p>
          <button className="btn btn-info my-3 text-white">Descargar PDF</button>
        </div>
        </div>

        <div className="card w-90 mb-2 bg-white shadow-md mx-1">
        <div className="card-body">
          <h2 className="card-title">Reporte de Morosidad</h2>
          <p className="text-muted-foreground">Listado de préstamos vencidos y clientes con pagos pendientes.</p>
          <button className="btn btn-info my-3 text-white">Descargar PDF</button>
        </div>
        </div>
      </section>

      <section className="p-6">
        <div className=" mx-50 border rounded-lg hover:bg-gray-50 transition-colors border-gray-200 bg-white text-black shadow-sm h-50">
        <h2 className="text-xl font-semibold mb-5 mx-10 my-5">Estadísticas Generales</h2>
        <div className="grid md:grid-cols-3 ">
          <div className="p-4 bg-gray-300/20 rounded-lg mx-10">
            <p className="text-sm text-muted-foreground mb-1">Total Prestado</p>
            <h3 className="text-2xl font-bold">$45,250,000</h3>
          </div>
          <div className="p-4 bg-gray-300/20 rounded-lg mx-10">
            <p className="text-sm text-muted-foreground mb-1"> Total Recuperado</p>
            <h3 className="text-2xl font-bold">$38,100,000</h3>
          </div>
          <div className="p-4 bg-gray-300/20 rounded-lg mx-10">
            <p className="text-sm text-muted-foreground mb-1">Intereses Ganados</p>
            <h3 className="text-2xl font-bold">$2,850,000</h3>
          </div>
        </div>
        </div>
      </section>
    </div>
        </>
    )
}

export default PrestamistaReportes