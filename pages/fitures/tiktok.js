const axios = require("axios")

module.exports = async (req, res) => {
  let urls = req.query.urls
  if (!urls) {
    return res.status(400).json({
      error: "Url Tiktok Nya Mana Btw"
    })
  }

  let url = `https://api.yanzbotz.live/api/downloader/tiktok?url=${urls}&apiKey=yanzdev`

  try {
    const response = await axios.get(url)
    const videoUrl = response.data.result.video["no-watermark"]
    res.status(200).json({
      videoUrl
    })
  } catch (error) {
    res.status(500).json({
      error: "Ada masalah, coba lagi nanti"
    })
  }
}