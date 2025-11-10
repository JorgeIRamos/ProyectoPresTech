import { useNavigate } from "react-router-dom"
import Slidebarprestamista from "../../components/slidebarprestamista"

function PrestamistaOfertaPrestamo() {
    const navigate = useNavigate();

    return (
        <>
        <Slidebarprestamista></Slidebarprestamista>
            <div className="min-h-screen bg-linear-to-tl from-gray-300 to-gray-100 p-6">
                <div className="max-w-5xl mx-auto">
                    <header className="mb-6">
                        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">Crear Préstamo</h1>
                        <p className="text-gray-600">Registra un nuevo préstamo</p>
                    </header>

                    <form className="grid gap-6 bg-white rounded-2xl shadow-md p-6 md:grid-cols-2 text-gray-700">
                        <div className="space-y-2 md:col-span-2">
                            <label className="block text-sm font-medium">Categoría del Préstamo *</label>
                            <select defaultValue="" className="select select-bordered w-full md:w-96 bg-white border-gray-700/30" required>
                                <option value="" disabled>Seleccione una categoría</option>
                                <option value="personal">Personal</option>
                                <option value="vehicular">Vehicular</option>
                                <option value="hipotecario">Hipotecario</option>
                                <option value="empresarial">Empresarial</option>
                                <option value="educativo">Educativo</option>
                                <option value="microcredito">Microcrédito</option>
                                <option value="emergencia">Emergencia</option>
                            </select>
                        </div>

                        <div className="space-y-2">
                            <label className="block text-sm font-medium">Montos de préstamo *</label>
                            <div className="flex gap-4">
                                <input type="number" className="input input-bordered w-full bg-white border-gray-700/30" placeholder="Monto mínimo" required />
                                <input type="number" className="input input-bordered w-full bg-white border-gray-700/30" placeholder="Monto máximo" required />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="block text-sm font-medium ">Tasa de interés anual (%) *</label>
                            <input type="number" step="0.01" className="input input-bordered w-full md:w-64 bg-white border-gray-700/30" placeholder="tasa de interés" required />
                        </div>

                        <div className="space-y-2">
                            <label className="block text-sm font-medium ">Número de cuotas *</label>
                            <input type="number" className="input input-bordered w-full bg-white border-gray-700/30" placeholder="número de cuotas" required />
                        </div>

                        <div className="space-y-2">
                            <label className="block text-sm font-medium ">Frecuencia de pago *</label>
                            <select className="select select-bordered w-full md:w-64 bg-white border-gray-700/30" required>
                                <option disabled={true}>Seleccione una frecuencia</option>
                                <option value="semanal">Semanal</option>
                                <option value="quincenal">Quincenal</option>
                                <option value="mensual">Mensual</option>
                            </select>
                        </div>

                        <div className="md:col-span-2">
                            <label className="Bio block text-sm font-medium ">Descripción</label>
                            <textarea className="textarea textarea-bordered w-full bg-white border-gray-700/30" placeholder="Agregue una descripción del préstamo (opcional)"></textarea>
                        </div>

                        <div className="md:col-span-2 flex justify-end gap-3">
                            <button type="button" className="btn btn-secondary bg-red-400 hover:bg-red-700" onClick={() => navigate("/Prestamista/Prestamos")}>Cancelar</button>
                            <button type="submit" className="btn btn-info bg-cyan-500 hover:bg-cyan-700 text-white">Crear Oferta de Préstamo</button>
                        </div>
                    </form>
                </div>
            </div>
        
        </>
    )
}

export default PrestamistaOfertaPrestamo