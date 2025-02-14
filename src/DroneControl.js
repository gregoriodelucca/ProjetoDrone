import React, { useState } from "react";
import axios from "axios";
import "./DroneControl.css"; // Importando o arquivo CSS para estilização

const DroneControl = () => {
  const [status, setStatus] = useState("");

  const sendCommand = (command) => {
    axios
      .post("http://localhost:5000/control", { command })
      .then((response) => {
        setStatus(`Comando "${command}" enviado com sucesso!`);
      })
      .catch((error) => {
        setStatus("Erro ao enviar comando");
      });
  };

  return (
    <div className="container">
      <h1>Controle de Drone</h1>

      <div className="control-buttons">
        <button className="control-btn subir" onClick={() => sendCommand("subir")}>Subir</button>
        <button className="control-btn descer" onClick={() => sendCommand("descer")}>Descer</button>
        <button className="control-btn direita" onClick={() => sendCommand("direita")}>Direita</button>
        <button className="control-btn esquerda" onClick={() => sendCommand("esquerda")}>Esquerda</button>
        <button className="control-btn avancar" onClick={() => sendCommand("avançar")}>Avançar</button>
        <button className="control-btn retroceder" onClick={() => sendCommand("retroceder")}>Retroceder</button>
      </div>

      <p className="status">{status}</p>

      <h3>Visualização ao Vivo</h3>
      <div className="video-container">
        <video
          src="http://localhost:5000/video-stream"
          width="640"
          height="480"
          controls
          autoPlay
        ></video>
      </div>
    </div>
  );
};

export default DroneControl;
