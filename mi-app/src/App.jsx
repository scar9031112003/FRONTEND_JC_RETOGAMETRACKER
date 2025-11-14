import { useEffect, useState } from "react";

function App() {
  const [mensaje, setMensaje] = useState("Cargando...");
  const cors = require('cors');
  app.use(cors());

  useEffect(() => {
    fetch("/api/saludo")
      .then((res) => res.json())
      .then((data) => setMensaje(data.mensaje))
      .catch((err) => setMensaje("Error al conectar con el servidor"));
  }, []);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>{mensaje}</h1>
    </div>
  );
}

export default App;

