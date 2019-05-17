import { Request, Response } from "express"
import formidable from "formidable"

export
function index (_req: Request, res: Response) {
  let body =
    `<html>`+
    `<head>`+
    `<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />`+
    `</head>`+
    `<body>`+
    `<form action="/up" enctype="multipart/form-data" method="post">`+
    `<input type="file" name="up" />`+
    `<input type="submit" value="Upload" />`+
    `</form>`+
    `</body>`+
    `</html>`
  res.send (body)
}

export
function up (req: Request, res: Response) {
  let form = new formidable.IncomingForm ()
  form.parse (req, (error, fields, files) => {
    let path = files.up.path
    res.type ("image/gif")
    res.sendFile (path)
  })
}
