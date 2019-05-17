let formidable = require ("formidable")

module.exports = {
  exe: (req, res) => {
    let form = new formidable.IncomingForm ()
    form.parse (req, (error, fields, files) => {
      let path = files.up.path
      res.type ("image/gif")
      res.sendFile (path)
    })
  }
}
