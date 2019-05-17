import { Request, Response, NextFunction } from "express"

export
function request_time (
  req: Request,
  res: Response,
  next: NextFunction,
) {
  console.log (`[info] ${req.method} "${req.path}" at ${new Date ()}`)
  next ()
}

export
function undefined_page (
  req: Request,
  res: Response,
) {
  res.status (404) .send ("undefined page")
}

export
function error_handling (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction,
) {
  console.error (err.stack)
  res.type ("text/plain")
  res.status (500) .send (">_<!")
}
