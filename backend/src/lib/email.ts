import nodemailer from 'nodemailer';
import { env } from '../config/index.js';

export interface SendEmailOptions {
  to: string;
  subject: string;
  html: string;
}

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: { user: env.GMAIL_USER, pass: env.GMAIL_APP_PASSWORD },
});

export const sendEmail = async (_options: SendEmailOptions): Promise<void> => {
  // TODO: implement in Step 7 (price-drop alerts)
};
