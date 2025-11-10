import Slidebarprestatario from "../../components/slidebarprestatario";

function PrestatarioDashboard() {

    const stats = [
        {
      label: "Deuda Total",
      value: "$5,000,000",
    },
    {
      label: "Pagado",
      value: "$1,250,000",
    },
    {
      label: "Próximo pago",
      value: "15 Feb",
    },
    {
      label: "Pagos vencidos",
      value: "0",
    },
    ]


    const LastLoan = [
        {
        name: "Prestamo Personal #3213",
            date: "15 Ene 2025",
            monto: "$5,000,000",
            saldo: "$3,750,000",
            cuotas: "3/12 pagadas",
            proxpago: "15 Feb 2025",
        },
    ]

    const nextpay = [
        {
            date: "15 Feb 2025",
            state: "Pendiente",
            cash: "$416,667",
        },
        {
            date: "15 Mar 2025",
            state: "Pendiente",
            cash: "$416,667",
        },
        {
            date: "15 Abr 2025",
            state: "Pendiente",
            cash: "$416,667",
        }


    ]

    return(
        <>
        <Slidebarprestatario></Slidebarprestatario>
        <div className="space-y-6 bg-linear-to-tl from-gray-300 to-gray-100 to-50% text-black min-h-screen">
        <div className="flex items-center justify-between">
        <div className="lg:mx-40">
          <h1 className="text-5xl font-bold text-foreground mb-5 pt-10">Dashboard</h1>
          <p className="text-muted-foreground">Resumen general de tu cartera de préstamos</p>
        </div>
        </div>

        <div className="flex flex-wrap justify-center">
        {stats.map((stat, index) => (
          <div key={index} className="card w-100 h-40 mb-2 bg-white text-black shadow-md mx-1 transform transition duration-300 hover:scale-105 hover:shadow-xl">
            <div className="card-body">
            <div className="mx-3 font-semibold card-title text-3xl pt-13">{stat.value}</div>
            <div className="mx-3 mb-2 font-light">{stat.label}</div>
            </div>
          </div>
        ))}
      </div>

        <div className="space-y-6 rounded-2xl lg:mx-35 py-8 bg-white text-black shadow-md">
          <div className="flex items-center justify-between lg:mx-10 mb-4">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground">Mis Préstamos Activos</h2>
            <a href="/Prestamista/Prestamos" className="text-sm text-gray-600 hover:text-cyan-400">Ver todos</a>
          </div>

          <div className="lg:mx-10 space-y-4">
            {LastLoan.map((loan, index) => {
              let percent = 0;
              try {
                const match = loan.cuotas.match(/(\d+)\/(\d+)/);
                if (match) {
                  const paid = Number(match[1]);
                  const total = Number(match[2]);
                  percent = Math.round((paid / total) * 100);
                }
              } catch (e) {
                percent = 0;
              }

              return (
                <div key={index} className="rounded-lg border border-gray-400/20 p-6 bg-white shadow-sm">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="text-lg font-semibold">{loan.name || 'Préstamo'}</h3>
                      <p className="text-sm text-gray-500">Fecha de inicio: {loan.date}</p>
                    </div>
                    <div className="text-sm text-green-700">Activo</div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-6 items-end">
                    <div>
                      <p className="text-sm text-gray-500">Monto Original</p>
                      <p className="text-xl font-semibold mt-1">{loan.monto}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Saldo Pendiente</p>
                      <p className="text-xl font-semibold mt-1">{loan.saldo}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Cuotas</p>
                      <p className="text-lg font-semibold mt-1">{loan.cuotas}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Próximo Pago</p>
                      <p className="text-lg font-semibold mt-1">{loan.proxpago}</p>
                    </div>
                  </div>

                  <div className="mt-6">
                    <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                      <div className="h-full bg-cyan-500" style={{ width: `${percent}%` }}></div>
                    </div>
                    <p className="text-sm text-gray-500 mt-2">{percent}% completado</p>
                  </div>

                  <div className="mt-4 flex gap-3">
                    <button className="btn btn-info text-white h-9">Ver Detalles</button>
                    <button className="btn btn-sm btn-ghost h-9 hover:bg-blue-700">Historial de Pagos</button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="space-y-6 rounded-2xl lg:mx-35 py-15 bg-white text-black shadow-md">
        <div className="flex items-center justify-between lg:mx-10">
          <h2 className="text-4xl font-bold text-foreground mb-5">Proximos Pagos</h2>
        </div>

        <div className="lg:mx-10 space-y-4">
          {nextpay.map((nextpay, index) => (
            <div key={index} className="flex items-center justify-between p-4 border rounded-lg hover:bg-muted/50 transition-colors border-gray-500/30 bg-white text-black shadow-md">
              <div className="dashboard-loan-info">
                <div className="card-title">{nextpay.date}</div>
                <div className="text-gray-500 text-sm">{nextpay.state}</div>
              </div>
                <div className="font-semibold text-xl">{nextpay.cash}</div>
            </div>
          ))}
        </div>
      </div>








        </div>
        </>
    )
}

export default PrestatarioDashboard;