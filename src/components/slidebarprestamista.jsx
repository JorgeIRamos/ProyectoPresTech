import { useNavigate } from "react-router-dom";

function Slidebarprestamista() {
    const navigate = useNavigate();
    
    return (
        <div className="drawer">
            <input id="my-drawer" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
                {/* Navbar */}
                <div className="navbar bg-gray-900 shadow-sm h-full">
                    <div className="flex-none lg:mx-5">
                        <label htmlFor="my-drawer" className="btn btn-square btn-ghost drawer-button">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block h-5 w-5 stroke-current">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                            </svg>
                        </label>
                    </div>
                    <div className="flex-1 flex justify-center">
                        <a className="text-3xl text-center font-bold">PresTech</a>
                    </div>
                    <div className="flex-none">
                        <button className="btn btn-ghost border-cyan-500 text-cyan-500 hover:bg-blue-500 hover:text-white lg:w-30 lg:mx-5" onClick={() => navigate("/login")}>Salir</button>
                    </div>
                </div>
                <div className="p-4">
                </div>
            </div>
            
            {/* Sidebar */}
            <div className="drawer-side">
            <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>

            <div className="flex flex-col justify-between h-full w-80 bg-gray-900 text-base-content p-4 ">
            <ul className="menu">
                <li className="mb-10 text-3xl font-semibold text-center">Menu Principal</li>
                <li><a href="/prestamista/dashboard" className="mb-3 text-base font-extralight hover:bg-blue-500">Dashboard</a></li>
                <li><a href="/prestamista/prestamos" className="mb-3 text-base font-extralight hover:bg-blue-500">Préstamos</a></li>
                <li><a href="/prestamista/clientes" className="mb-3 text-base font-extralight hover:bg-blue-500">Clientes</a></li>
                 <li><a href="/prestamista/reportes" className="mb-3 text-base font-extralight hover:bg-blue-500">Reportes</a></li>
            </ul>

            <div className="mt-4">
             <p className="font-thin">Prestamista</p>
             <p className="my-2 font-semibold hover:text-blue-200">example@email.com</p>
            </div>

            </div>
        </div>
    </div>
    )
 
}

export default Slidebarprestamista;