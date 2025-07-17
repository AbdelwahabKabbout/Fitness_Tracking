import { UserModel } from "../models/user.model";

export const registerFunction = async(username, email, password) => {
  // Registration logic here
  try{
  const newUser = UserModel.create({
    username,
    email,
    password,
  });   
  return newUser;
} catch (error) {
  throw new Error("Registration failed: " + error.message);
  }
}



export const loginFunction = async(email, password) => {
  // Login logic here
  try {
    const user = await UserModel.findOne({ email });
    if (!user) {
      throw new Error("User not found");
    }
    const isMatch = await user.comparePassword(password);
    if (!isMatch) {
      throw new Error("Invalid password");
    }
    return user;
    } catch (error) {
      throw new Error("Login failed: " + error.message);
    }
}