import express from 'express';

import { signup, verifyOTP, login } from '../controllers/authController.js';

const router = express.Router();

router.post('/signup', signup);
router.post('/verify-otp', verifyOTP);
router.post('/login', login);

// module.exports = router;
export default router;