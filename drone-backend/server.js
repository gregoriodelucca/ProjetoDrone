const express = require("express");
const bodyParser = require("body-parser");
const { controlDrone } = require("./droneController");
const ffmpeg = require("fluent-ffmpeg");
const app = express();
const port = 5000;

// Middleware para processar dados JSON
app.use(bodyParser.json());

// Rota para controlar o drone
app.post("/control", (req, res) => {
  const { command } = req.body;
  const status = controlDrone(command); // Chama a função para controlar o drone
  res.status(200).send(status);
});

// Rota para servir o stream de vídeo do drone
app.get("/video-stream", (req, res) => {
  const rtspUrl = "rtsp://<drone-stream-url>"; // Substitua pela URL do stream RTSP do drone

  res.contentType("video/mp4");

  ffmpeg(rtspUrl)
    .outputFormat("mp4")
    .videoCodec("libx264")
    .audioCodec("aac")
    .on("start", () => {
      console.log("Iniciando o streaming de vídeo...");
    })
    .on("end", () => {
      console.log("Streaming finalizado.");
    })
    .pipe(res, { end: true });
});

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
