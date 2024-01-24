import bcrypt from "bcrypt";

const hashPassword = async (password) => {
  const saltRounds = 10;
  try {
    const hash = await bcrypt.hash(password, saltRounds);
    return hash;
  } catch (error) {
    console.error("Password hashing failed", error.message);
  }
};

export default hashPassword;
