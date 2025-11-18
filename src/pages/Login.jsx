import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      email: formData.email,
      contraseña: formData.password,
    };

    console.log("Enviando login:", payload);

    try {
      const res = await fetch("https://localhost:7105/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json();
      console.log("Respuesta del backend:", data);

      if (!res.ok) {
        alert(data.message || "Credenciales incorrectas");
        return;
      }


      // Guardamos datos importantes en localStorage
      localStorage.setItem("usuario", JSON.stringify(data.persona));
      localStorage.setItem("prestamistaId", data.prestamistaId ?? "");
      localStorage.setItem("prestatarioId", data.prestatarioId ?? "");
      localStorage.setItem("personaId", data.persona.personaId);

      // Redirigir según el rol
      if (data.persona.rol === "prestamista") {
        navigate("/Prestamista/Dashboard");
      } else if (data.persona.rol === "prestatario") {
        navigate("/Prestatario/Dashboard");
      } else {
        navigate("/");
      }

    } catch (error) {
      console.error("Error en login:", error);
      alert("No se pudo conectar con el servidor.");
    }
  };

  return (
    <>
      <div className="min-h-screen flex justify-center items-center bg-linear-to-br from-blue-500 to-blue-900 to-55%">
        <form onSubmit={handleSubmit} className="bg-white/10 p-20 rounded-xl">
          <h2 className="lg:text-4xl lg:ml-4 mb-6 font-bold ml-6 text-2xl">
            INICIO SESIÓN
          </h2>

          <label htmlFor="email" className="floating-label">
            Email:
            <input
              type="email"
              id="email"
              name="email"
              onChange={handleChange}
              className="input input-info mb-3 bg-white text-black"
              placeholder="example@email.com"
              required
            />
          </label>

          <label htmlFor="password" className="floating-label">
            Contraseña:
            <input
              type="password"
              id="password"
              name="password"
              onChange={handleChange}
              className="input input-info mb-3 bg-white text-black"
              placeholder="*********"
              required
            />
          </label>

          <button
            type="submit"
            className="btn lg:ml-20 mb-5 bg-cyan-500 hover:bg-cyan-400 border-cyan-500 ml-15"
          >
            Iniciar Sesión
          </button>

          <p>
            ¿No tienes una cuenta?{" "}
            <a
              href="/Register"
              className="text-cyan-300 hover:text-cyan-400"
            >
              Regístrate aquí
            </a>
          </p>
          <br />

          <a
            href="/"
            className="text-cyan-300 hover:text-cyan-400 lg:ml-20 ml:5"
          >
            ← Volver al inicio
          </a>
        </form>
      </div>
    </>
  );
}

export default Login;