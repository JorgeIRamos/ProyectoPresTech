
function Login() {

    
    return(
        
        <>
        <div className="min-h-screen flex justify-center items-center bg-linear-to-br from-blue-500  to-blue-900 to-55%">
        <form className="bg-white/10 p-20 rounded-xl">
          <h2 className="lg:text-4xl lg:ml-4 mb-6 font-bold ml-6 text-2xl">INICIO SESION</h2>

            <label htmlFor="email" className="floating-label">Email: 
            <input type="email" id="email" name="email" className="input input-info mb-3 bg-white text-black" placeholder="example@email.com" required />
            </label>

            <label htmlFor="password" className="floating-label">Contraseña:
            <input type="password" id="password" name="password" className="input input-info mb-3 bg-white text-black" placeholder="*******" required />
            </label>

          <button type="submit" className="btn lg:ml-20 mb-5 bg-cyan-500 hover:bg-cyan-400 border-cyan-500 ml-15">
            Iniciar Sesión
          </button>

           <p>¿No tienes una cuenta?  <a href="/Register" className="text-cyan-300 hover:text-cyan-400">Regístrate aquí</a></p><br/>
            <a href="/" className="text-cyan-300 hover:text-cyan-400 lg:ml-20 ml:5" >← Volver al inicio</a>
        </form>
      </div>

        </>
    )
}

export default Login