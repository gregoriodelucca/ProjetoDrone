// Lógica de controle do drone
const controlDrone = (command) => {
    switch (command) {
      case "subir":
        console.log("Drone subindo");
        return "Drone subindo";
      case "descer":
        console.log("Drone descendo");
        return "Drone descendo";
      case "direita":
        console.log("Drone virando à direita");
        return "Drone virando à direita";
      case "esquerda":
        console.log("Drone virando à esquerda");
        return "Drone virando à esquerda";
      case "avançar":
        console.log("Drone avançando");
        return "Drone avançando";
      case "retroceder":
        console.log("Drone retrocedendo");
        return "Drone retrocedendo";
      default:
        console.log("Comando desconhecido");
        return "Comando desconhecido";
    }
  };
  
  module.exports = { controlDrone };
  