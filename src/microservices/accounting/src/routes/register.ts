import {
  Router, Request, Response
} from 'express'
import express from 'express'
import {
  generateKeyPair,
} from 'node:crypto'
import BodyParser from 'body-parser'
import joi from 'joi'
import { PrismaClient } from '@prisma/client'
import qs from 'qs'
import Joi from 'joi'


const prisma = new PrismaClient()

async function createUser(publicKey: string, digest: string): Promise<void> {
  await prisma.user.create({
    data: {
      publicKey: publicKey,
      privateKeydigest: digest
    }
  })
}

// router setup
const router = Router()
const parser = BodyParser.json()
router.use(express.json())


// datavalidators
const userCredentialsSchema = joi.object({
  // public key must be replace '\n' to ''
  clientPublicKey: joi.string()
    .length(786)
    .required(),
  clientDigest: joi.string()
  .length(128)
  .alphanum()
  .required()
})
 
async function extractKeys(req: Request): Promise<any> {
  return {
    clientPublicKey: req.body.clientPublicKey,
    clientDigest: req.body.clientDigest
  }
}

// key exchange
router.post('/', parser, async (req: Request, res: Response): Promise<void> => {
  extractKeys(req)
  .then(async (v) => {
    try {
      return await userCredentialsSchema.validateAsync({
        clientPublicKey: v.clientPublicKey,
        clientDigest: v.clientDigest
      })
    }
    catch (error) {
      throw new Error()
    }
  }) 
  .then((v: any) => {
    if (Object.keys(req.query).length === 0) {
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
        createUser(req.body.clientPublicKey, req.body.clientDigest)
          .catch((e) => console.error(e))
          .finally(async () => await prisma.$disconnect())
        res.send(
          publicKey
        )
      }) 
    }
  },
  // error callback
  (error: any) => {
    res.sendStatus(400)
    return
  }
  )
})

// TODO: add qs support


export default router