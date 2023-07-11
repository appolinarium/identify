import {
  Router, Request, Response
} from 'express'
import {
  generateKeyPair,
} from 'node:crypto'
import BodyParser from 'body-parser'

const router = Router()

const parser = BodyParser.json()


// key exchange
router.post('/', parser, (req: Request, res: Response): void => {
  const queryLenght = Object.keys(req.query).length

  if (queryLenght === 0 && req.body.clientPublicKey && req.body.clientDigest) {
    generateKeyPair('rsa', {
      modulusLength: 4096,
      publicKeyEncoding: {
        type: 'spki',
        format: 'pem',
      },
      privateKeyEncoding: { 
        type: 'pkcs8',
        format: 'pem'
      },
    }, (err, publicKey, privateKey) => {
      res.send(
        publicKey
      )
    })
  }
  else res.sendStatus(400)

})

export default router