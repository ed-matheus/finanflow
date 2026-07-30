import { auth } from "../firebase/firebase"
import { createUserWithEmailAndPassword } from "firebase/auth"

const register = async(email, password) => {
  // console.log(email, password)
  const userCredential = await createUserWithEmailAndPassword(auth, email, password)

  return userCredential.user;
}

export { register }