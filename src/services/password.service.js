import bcrypt from 'bcrypt';

export const resetPassword = async (user, newPassword) => {
  const isSame = await bcrypt.compare(newPassword, user.password);

  if (isSame) throw new Error("No podes usar la misma contraseña");

  user.password = await bcrypt.hash(newPassword, 10);
  await user.save();
};