import express from 'express'
import * as usertasks from '../service/userServices.js'
import { authMiddleware } from '../middleware/auth.js'

const router = express.Router()

router.post('/register', async (req, res) => {
  try {
    const user = await usertasks.register(req.body)
    res.status(201).json(user)
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
})

router.post('/login', async (req, res) => {
  try {
    const user = await usertasks.login(req.body)
    res.status(200).json(user)
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
})


router.post('/', authMiddleware, async (req, res) => {
  try {
    const task = await usertasks.addtask(req.body, req.user.userId)
    res.status(201).json(task)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
})


router.get('/', authMiddleware, async (req, res) => {
  try {
    const tasks = await usertasks.getAllTask(req.user.userId)
    res.status(200).json(tasks)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
})


router.get('/:id', authMiddleware, async (req, res) => {
  try {
    const task = await usertasks.gettask(req.params.id)
    res.status(200).json(task)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
})


router.put('/:id', authMiddleware, async (req, res) => {
  try {
    const task = await usertasks.updateId(req.params.id, req.body)
    res.status(200).json(task)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
})


router.delete('/:id', authMiddleware, async (req, res) => {
  try {
    const task = await usertasks.deleteValue(req.params.id)
    res.status(200).json(task)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
})

export const UserController = router