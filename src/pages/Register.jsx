import { useState } from "react";
import { useNavigate } from "react-router-dom";


function Register() {

  const navigate = useNavigate();
  
    return(
        <>
        <div className="min-h-screen flex justify-center items-center bg-linear-to-br from-blue-500  to-blue-900 to-55%">
        <form className="bg-white/10 p-20 rounded-xl w-11/12 max-w-md backdrop-blur-md space-y-4">
          <h2 className="lg:text-4xl lg:ml-4 mb-6 font-bold ml-6 text-2xl text-center">REGISTRO</h2>

            <label htmlFor="fullname" className="floating-label "> Nombre Completo:
            <input type="text" id="fullname" name="fullname" className="input input-info mb-3 bg-white text-black" required />
            </label>

          <label htmlFor="tipodocumento" className="floating-label"> Tipo de documento: 
            <select defaultValue="Tipo de documento" className="select bg-white text-black">
              <option disabled={true}>Tipo de documento</option>
              <option>Cedula de ciudadania</option>
              <option>Cedula de extranjeria</option>
              <option>Pasaporte</option>
          </select>
          </label>

            <label htmlFor="identificacion" className="floating-label"> Identificacion:
            <input type="text" id="identificacion" name="identificacion" className="input input-info mb-3 bg-white text-black" required />
            </label>


            <label htmlFor="email" className="floating-label"> Email:
            <input type="email" id="email" name="email" className="input input-info mb-3 bg-white text-black" required />
            </label>

          <label htmlFor="sexo" className="floating-label"> Sexo: 
            <select defaultValue="Sexo" className="select bg-white text-black" id="sexo">
              <option disabled={true}>Sexo</option>
              <option>Masculino</option>
              <option>Femenino</option>
          </select>
          </label>


            <label htmlFor="telefono" className="floating-label"> Telefono:
            <input type="text" id="telefono" name="telefono" className="input input-info mb-3 bg-white text-black" required />
            </label>


            <label htmlFor="direccion" className="floating-label"> Direccion: 
            <input type="text" id="direccion" name="direccion" className="input input-info mb-3 bg-white text-black" required />
            </label>


            <label htmlFor="ciudad" className="floating-label"> Ciudad: 
            <input type="text" id="ciudad" name="ciudad"  className="input input-info mb-3 bg-white text-black"required />
            </label>


            <label htmlFor="password" className="floating-label"> Contraseña: 
            <input type="password" id="password" name="password" className="input input-info mb-3 bg-white text-black" required />
            </label>

            <label htmlFor="verificarpassword" className="floating-label"> Verificar Contraseña: 
            <input type="password" id="verificarpassword" name="verificarpassword" className="input input-info mb-3 bg-white text-black" required />
            </label>

            <p className="floating-label">Tipo de usuario</p>

          <div className="flex space-x-3 mb-10">
            <label className="mr-5">
              <input
                type="radio"
                name="rol"
                value="prestatario"
                className="radio radio-info radio-xs mr-1"
                required
              />
              Prestatario
            </label>

            <label className="mr-5">
              <input
                type="radio"
                name="rol"
                value="prestamista"
                className="radio radio-info radio-xs mr-1"
                required
              />
              Prestamista
            </label>
          </div>

            <label htmlFor="terms" className="flaoting-label">
              <input type="checkbox" id="terms" className="checkbox checkbox-info checkbox-xs mr-1" required />  
               Acepto los términos y condiciones de uso de PresTech y autorizo el
              tratamiento de mis datos personales
            </label>


          <button type="submit" className="w-full mt-6 bg-cyan-500 hover:bg-cyan-400 border-cyan-500 h-9">
            Registrarse
          </button>

            <a href="/Login" className="text-cyan-300 hover:text-cyan-400 flex flex-col items-center gap-3 mt-4">¿Ya tienes cuenta? Inicia sesión aquí</a>
            <a href="/" className="text-cyan-300 hover:text-cyan-400 lg:ml-20 ml:5 ">← Volver al inicio</a>

        </form>
      </div>
        </>
    )    
}

export default Register;

