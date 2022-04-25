import nodemailer from 'nodemailer';
import { CONSTANTS } from '../constants';

const { NODEMAILER } = CONSTANTS;
const { HOST, PORT, AUTH } = NODEMAILER;
const { USER, PASS } = AUTH;

export const nodemailerTransporter = nodemailer.createTransport({
  host: HOST,
  port: PORT,
  auth: {
    user: USER,
    pass: PASS,
  },
});

