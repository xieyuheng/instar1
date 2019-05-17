let express = require ("express")

let app = express ()
let port = 3000

let main = require ("./main")
let up = require ("./up")

function request_time (req, res, next) {
  let request_time = new Date ()
  req.request_time = request_time
  console.log (`[info] ${req.method} "${req.path}" at ${request_time}`)
  next ()
}

function undefined_page (req, res) {
  res.status (404) .send ("undefined page")
}

function the_story_begins () {
  console.log (`[info] the story begins on port ${port}`)
}

function error_handling (err, req, res, next) {
  console.error (err.stack)
  res.type ("text/plain")
  res.status (500) .send (">_<!")
}

app.use (request_time)
app.get ("/", main.exe)
app.post ("/up", up.exe)
app.use (undefined_page)
app.use (error_handling)
app.listen (port, the_story_begins)
