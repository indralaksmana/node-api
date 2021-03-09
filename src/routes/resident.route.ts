// Modules
import express from 'express';
const router = express.Router();

// Controllers
import ResidentController from '../controllers/resident.controller';

// Object Classes
const residentController = new ResidentController();

// Middlewares
import authMiddleware from '../middlewares/auth.middleware';

// Routes
router.get('/identity/:nomor', authMiddleware, residentController.getResidentIdentity);

export default router;