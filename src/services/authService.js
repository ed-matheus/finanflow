import { auth } from "../firebase/firebase"
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth"

const register = async (email, password) => {
  // console.log(email, password)
  const userCredential = await createUserWithEmailAndPassword(auth, email, password)

  return userCredential.user;
}

const login = async (email, password) => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password)
    
    return userCredential.user;

  } catch (error) {
    if (error.code === "auth/invalid-credential") {
      throw new Error("Email ou senha incorretos.")
    }

    throw error
  }
}

export { register, login }