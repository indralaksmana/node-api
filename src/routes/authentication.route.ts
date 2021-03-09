// Modules
import express from 'express';
const router = express.Router();

// Controllers
import AuthenticationController from '../controllers/authentication.controller';

const authenticationController = new AuthenticationController();

router.post('/login', authenticationController.login);

export default router;