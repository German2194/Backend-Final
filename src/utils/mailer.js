import nodemailer from 'nodemailer';

export const sendResetEmail = async (user, token) => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS
    }
  });

  const link = `${process.env.BASE_URL}/reset-password/${token}`;

  await transporter.sendMail({
    from: process.env.EMAIL_USER,
    to: user.email,
    subject: "Recuperar contraseña",
    html: `<a href="${link}">Restablecer contraseña</a>`
  });
};