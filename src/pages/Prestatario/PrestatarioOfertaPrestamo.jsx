import Slidebarprestatario from "../../components/slidebarprestatario"

function PrestatarioOfertaPrestamo() {
    const ofertas = [
        {
            nombre: "Prestamo Personal #3213",
            monto: "$2,500,000 - $5,000,000",
            interes: "2,5%",
            cuotas: "12",
            frecuencia: "mensual"
        },
        {
            nombre: "Prestamo Vehicular #2132",
            monto: "$2,500,000 - $5,000,000",
            interes: "2,5%",
            cuotas: "12",
            frecuencia: "mensual"
        },
        {
            nombre: "Prestamo Educativo #312",
            monto: "$2,500,000 - $5,000,000",
            interes: "2,5%",
            cuotas: "12",
            frecuencia: "mensual"
        },
        {
            nombre: "Prestamo Educativo #312",
            monto: "$2,500,000 - $5,000,000",
            interes: "2,5%",
            cuotas: "12",
            frecuencia: "mensual"
        },
        
    ]
    
    
    return(
        <>
        <Slidebarprestatario></Slidebarprestatario>

        <div className="min-h-screen bg-linear-to-tl from-gray-100 to-gray-200 p-6">
            <div className="max-w-7xl mx-auto">
                <h1 className="text-3xl md:text-5xl font-bold mb-2 text-black">Ofertas de Préstamo</h1>
                <p className="text-gray-600 mb-6">Compara las ofertas disponibles y solicita la que más se ajuste a tus necesidades.</p>

                <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
                    <aside className="col-span-1">
                        <div className="bg-white p-4 rounded-lg shadow-sm">
                            <h3 className="font-semibold mb-3 text-black">Monto del préstamo</h3>
                            <div className="mt-2 mb-4">
                                <input className="input input-bordered w-full bg-white text-gray-700 border-gray-500/30" defaultValue="1000000" placeholder="$250,000"/>
                            </div>
                            <button className="btn btn-block bg-cyan-500 hover:bg-cyan-600 text-white border-cyan-500">Filtrar</button>
                        </div>
                    </aside>

                    <section className="col-span-1 lg:col-span-3">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {ofertas.map((o, i) => (
                                <div key={i} className="bg-white rounded-lg shadow p-5">
                                    <div className="flex justify-between items-start">
                                        <div>
                                            <h3 className="text-lg font-semibold text-black">{o.nombre}</h3>
                                            <p className="text-base text-gray-500 mt-1">{o.monto}</p>
                                        </div>
                                        <div>
                                            <button className="btn btn-sm btn-primary text-white bg-blue-500 hover:bg-blue-700">Solicitar</button>
                                        </div>
                                    </div>

                                    <p className="text-sm text-gray-600 mt-4">Interés: <div className="font-semibold text-black">{o.interes}</div></p>

                                    <div className="grid grid-cols-2 gap-4 mt-4 text-sm text-gray-600">
                                        <div>
                                            <p className="text-xs">Cuotas</p>
                                            <p className="font-medium mt-1 text-black ">{o.cuotas}</p>
                                        </div>
                                        <div>
                                            <p className="text-xs">Frecuencia</p>
                                            <p className="font-medium mt-1 capitalize text-black">{o.frecuencia}</p>
                                        </div>
                                    </div>

                                    <div className="mt-4 border-t pt-3 text-sm text-gray-500">
                                        <div>Edad mínima: 18+</div>
                                        <div className="mt-1">Plazo: hasta {o.cuotas} cuotas</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>
                </div>
            </div>
        </div>
        </>
    )
}

export default PrestatarioOfertaPrestamo