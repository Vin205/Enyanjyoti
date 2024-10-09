// routes/userRoutes.js
import express from 'express';
import { getUsers, createUser } from '../controllers/userController.js';

const router = express.Router();

router.get('/users', getUsers);
router.post('/users', createUser);

export default router;
