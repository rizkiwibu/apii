const os = require("os");

module.exports = async (req, res) => {
  const action = req.query.action;

  if (action === "specs") {
    // Mengambil spesifikasi server
    const serverSpecs = {
      platform: os.platform(),
      architecture: os.arch(),
      cpu: os.cpus(),
      totalMemory: os.totalmem(),
      freeMemory: os.freemem(),
      uptime: os.uptime(),
      hostname: os.hostname(),
    };

    return res.status(200).json({
      serverSpecs,
    });
  }

  // Jika tidak ada action yang cocok, kembalikan pesan error
  return res.status(400).json({
    error: "Action tidak dikenali. Gunakan 'specs' untuk mengecek spesifikasi server.",
  });
};
