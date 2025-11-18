
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './pages/Home.jsx'
import Login from "./pages/Login.jsx"
import Register from './pages/Register.jsx'
import PrestamistaDashboard from './pages/Prestamista/PrestamistaDashboard.jsx'
import PrestamistaPrestamos from './pages/Prestamista/PrestamistaPrestamos.jsx'
import PrestamistaOfertas from './pages/Prestamista/PrestamistaOfertas.jsx'
import PrestamistaOfertaPrestamo from './pages/Prestamista/PrestamistaOfertaPrestamo.jsx'
import PrestamistaClientes from './pages/Prestamista/PrestamistaClientes.jsx'
import PrestamistaReportes from './pages/Prestamista/PrestamistaReportes.jsx'
import PrestatarioDashboard from './pages/Prestatario/PrestatarioDashboard.jsx'
import PrestatarioOfertaPrestamo from './pages/Prestatario/PrestatarioOfertaPrestamo.jsx'
import PrestatarioPrestamos from './pages/Prestatario/PrestatarioPrestamos.jsx'
import PrestatarioHistorial from './pages/Prestatario/PrestatarioHistorial.jsx'
import PrestatarioDetalleOferta from './pages/Prestatario/PrestatarioDetalleOferta.jsx'
import PrestatarioPagos from './pages/Prestatario/PrestatarioPagos.jsx'


function App() {


  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Login' element={<Login />}/>
        <Route path='/Register' element={<Register />}/>
        <Route path='/Prestamista/Dashboard' element={<PrestamistaDashboard/>}/>
        <Route path='/Prestamista/OfertasPrestamos' element={<PrestamistaOfertas/>}/>
        <Route path='/Prestamista/Prestamos' element={<PrestamistaPrestamos/>}/>
        <Route path='/Prestamista/CrearOferta' element={<PrestamistaOfertaPrestamo/>}/>
        <Route path='/Prestamista/Clientes' element={<PrestamistaClientes/>}/>
        <Route path='/Prestamista/Reportes' element={<PrestamistaReportes/>}/>

        <Route path='/Prestatario/Dashboard' element={<PrestatarioDashboard/>}/>
        <Route path='/Prestatario/OfertaPrestamo' element={<PrestatarioOfertaPrestamo/>}/>
        <Route path="/prestatario/oferta/:id" element={<PrestatarioDetalleOferta />} />
        <Route path='/Prestatario/Prestamos' element={<PrestatarioPrestamos/>}/>
        <Route path='/Prestatario/Historial' element={<PrestatarioHistorial/>}/>
        <Route path='/Prestatario/Pagos' element={<PrestatarioPagos/>}/>
        
      </Routes>
    </Router>
  )
}

export default App
