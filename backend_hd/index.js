import express from 'express';
import cors from 'cors';
import nodemailer from 'nodemailer';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

import authRoutes from './routes/authRoutes.js';
import path from "path";
dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const url = process.env.MONGOID;
mongoose
  .connect(url)
  .then(() => {
    console.log("Connected to MONGO ATLAS");
  })
  .catch((err) => {
    console.log(err);
  });

// Setup nodemailer transporter (replace with your email service details)
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

// Generate OTP
function generateOTP() {
  return Math.floor(100000 + Math.random() * 900000).toString();
}

app.post('/send-otp', async (req, res) => {
  const { email } = req.body;
  const otp = generateOTP();

  const mailOptions = {
    from: 'your-email@gmail.com',
    to: email,
    subject: 'Your OTP for Signup',
    text: `Your OTP is: ${otp}`
  };

  try {
    await transporter.sendMail(mailOptions);
    res.json({ success: true, message: 'OTP sent successfully' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ success: false, message: 'Failed to send OTP' });
  }
});

app.use('/api/auth', authRoutes);
const  __dirname = path.resolve();

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

app.use(express.static(path.join(__dirname, '../dist')));

app.get('*',(req,res)=>{
  res.sendFile(path.join(__dirname,'../dist','index.html'));
});
export default transporter;