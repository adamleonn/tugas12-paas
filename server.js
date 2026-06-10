const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send(`
    <h1>Tugas 12 PaaS</h1>
    <p>Aplikasi sederhana ini berjalan menggunakan layanan PaaS.</p>
    <p><b>Provider:</b> Render</p>
    <p><b>Runtime:</b> Node.js Express</p>
    <p><a href="/api/status">Cek Status API</a></p>
  `);
});

app.get("/api/status", (req, res) => {
  res.json({
    nama_aplikasi: "Tugas 12 PaaS",
    provider: "Render",
    model_layanan: "Platform as a Service",
    status: "Aplikasi berjalan"
  });
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server berjalan pada port ${PORT}`);
});