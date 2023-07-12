import {
  Router, Request, Response
} from 'express'
import { 
  PrismaClient
} from '@prisma/client'


const router = Router()
const prisma = new PrismaClient()

const getUsers = async (req: Request, res: Response): Promise<void> => {
  const users = await prisma.user.findMany()
    .catch((e) => console.error(e))
    .finally(async () => await prisma.$disconnect())

  res.json(users)
}

router.post('/',  getUsers)
router.get('/', getUsers)


export default router