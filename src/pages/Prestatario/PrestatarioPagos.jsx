import Slidebarprestatario from "../../components/slidebarprestatario"

function PrestatarioPagos() {
    const prestamos = [
        {
            id: 1,
            nombre: "Prestamo Personal #3213",
            montoCuota: "$416,667",
            fechaVencimiento: "15 Feb 2025",
            montoTotal: "$5,000,000",
            pagado: "$1,250,000",
            cuotasPagadas: "3/12",
            estado: "Al día"
        },
        {
            id: 2,
            nombre: "Prestamo Vehicular #2132",
            montoCuota: "$583,334",
            fechaVencimiento: "10 Feb 2025",
            montoTotal: "$3,500,000",
            pagado: "$1,166,668",
            cuotasPagadas: "2/6",
            estado: "Al día"
        }
    ];

    const metodospago = [
        { id: 'transferencia', nombre: 'Transferencia Bancaria' },
        { id: 'efectivo', nombre: 'Efectivo' },
        { id: 'tarjeta', nombre: 'Tarjeta de Crédito/Débito' }
    ];

    return(
        <>
        <Slidebarprestatario />
        <div className="space-y-6 bg-linear-to-tl from-gray-300 to-gray-100 to-50% text-black min-h-screen">
            <div className="lg:mx-50">
                <h1 className="text-5xl font-bold text-foreground mb-5 pt-10">Pagos</h1>
                <p className="text-muted-foreground">Realiza los pagos de tus préstamos activos</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:mx-50">
                {/* Lista de Préstamos */}
                <div className="lg:col-span-2 space-y-4">
                    <div className="space-y-6 rounded-2xl py-8 bg-white text-black shadow-md">
                        <div className="px-6">
                            <h2 className="text-2xl font-semibold mb-4">Préstamos Pendientes</h2>
                            <div className="space-y-4">
                                {prestamos.map((prestamo) => (
                                    <div key={prestamo.id} className="border rounded-lg p-4 hover:bg-gray-50 transition-colors border-gray-400/30">
                                        <div className="flex justify-between items-start mb-4">
                                            <div>
                                                <h3 className="font-semibold text-lg">{prestamo.nombre}</h3>
                                                <p className="text-sm text-gray-600">Próximo pago: {prestamo.fechaVencimiento}</p>
                                            </div>
                                            <span className="px-3 py-1 rounded-full text-sm text-green-800">
                                                {prestamo.estado}
                                            </span>
                                        </div>
                                        <div className="grid grid-cols-2 gap-4 text-sm">
                                            <div>
                                                <p className="text-gray-600">Monto total</p>
                                                <p className="font-semibold">{prestamo.montoTotal}</p>
                                            </div>
                                            <div>
                                                <p className="text-gray-600">Pagado</p>
                                                <p className="font-semibold">{prestamo.pagado}</p>
                                            </div>
                                            <div>
                                                <p className="text-gray-600">Cuotas pagadas</p>
                                                <p className="font-semibold">{prestamo.cuotasPagadas}</p>
                                            </div>
                                            <div>
                                                <p className="text-gray-600">Próxima cuota</p>
                                                <p className="font-semibold">{prestamo.montoCuota}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Formulario de Pago */}
                <div className="space-y-6 rounded-2xl py-8 bg-white text-black shadow-md h-fit">
                    <div className="px-6">
                        <h2 className="text-2xl font-semibold mb-6">Realizar Pago</h2>
                        <form className="space-y-4">
                            <div className="form-control">
                                <label className="label">
                                    <span>Seleccionar Préstamo</span>
                                </label>
                                <select className="select select-bordered bg-white border-gray-400/30 ml-3">
                                    <option disabled selected>Seleccione un préstamo</option>
                                    {prestamos.map((prestamo) => (
                                        <option key={prestamo.id} value={prestamo.id}>
                                            {prestamo.nombre}
                                        </option>
                                    ))}
                                </select>
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span>Método de Pago</span>
                                </label>
                                <select className="select select-bordered bg-white border-gray-400/30 ml-3">
                                    <option disabled selected>Seleccione método de pago</option>
                                    {metodospago.map((metodo) => (
                                        <option key={metodo.id} value={metodo.id}>
                                            {metodo.nombre}
                                        </option>
                                    ))}
                                </select>
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span>Monto a Pagar</span>
                                </label>
                                <input
                                    type="number"
                                    placeholder="$0.00"
                                    className="input input-bordered bg-white border-gray-400/30 ml-3"
                                />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span>Comprobante de Pago</span>
                                </label>
                                <input
                                    type="file"
                                    className="file-input file-input-bordered bg-white w-full mt-2"
                                />
                            </div>

                            <div className="mt-6">
                                <button className="btn btn-info w-full bg-cyan-500 hover:bg-cyan-600 text-white">
                                    Confirmar Pago
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default PrestatarioPagos