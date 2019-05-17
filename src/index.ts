import express from "express"
import { Request, Response } from "express"

import * as ctrl from "./control"
import * as mid from "./middleware"

let app = express ()
let port = 3000

function the_story_begins () {
  console.log (`[info] the story begins on port ${port}`)
}

app.use (mid.request_time)

app.get ("/", ctrl.index)
app.post ("/up", ctrl.up)

app.use (mid.undefined_page)
app.use (mid.error_handling)

app.listen (port, the_story_begins)
