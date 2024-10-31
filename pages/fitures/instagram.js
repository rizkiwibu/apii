const axios = require("axios")

module.exports = async (req, res) => {
  let urls = req.query.urls
  if (!urls) {
    return res.status(400).json({
      error: "Url Ig Nya Mana?"
    })
  }

  let url = `https://api.yanzbotz.live/api/downloader/instagram?url=${urls}{&apiKey=yanzdev`
  try {
    const response = await axios.get(url)
    let data = response.data
    let vid = data.result[0].url
    res.status(200).json({
      video: vid
    })
  } catch(e) {
    res.status(500).json({
      error: "Ada masalah, coba lagi nanti"
    })
  }
}