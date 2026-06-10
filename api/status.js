export default function handler(req, res) {
  res.status(200).json({
    nama_aplikasi: "Tugas 12 PaaS",
    provider: "Vercel",
    model_layanan: "Platform as a Service",
    status: "Aplikasi berjalan"
  });
}