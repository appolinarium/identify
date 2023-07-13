import {
  Request,
  Response,
  NextFunction
} from 'express'


export default (req: Request, res: Response, next: NextFunction) => {
  console.log(`request from ${req.ip}`)
  next()
}