import { Link, useNavigate } from "react-router-dom"
import { useState } from "react"
import { register } from "../../services/authService"
import { onAuthStateChanged } from "firebase/auth"
import { auth } from "../../firebase/firebase"

// Components
import Input from "../../components/ui/Input"
import Button from "../../components/ui/Button"

const Register = () => {
  const navigate = useNavigate()

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  })

  const handleChange = (e) => {
    const { name, value } = e.target

    // updating state
    setFormData(prevState => ({
      ...prevState, // previous state of the form
      [name]: value // updates ONLY the current field
    }))
  }

  const handleSubmit = async(e) => {
    e.preventDefault()

    // validation here
    if (formData.confirmPassword !== formData.password) {
      alert("As senhas estão diferentes. Corrija.")

    } else if (formData.password.length < 6) {
      alert("A senha precisa ter 6 caracteres ou mais.")
      
    } else {
      console.log("Dados recebidos:", formData)

      const user = await register(formData.email, formData.password)
      console.log(user)
      
      navigate("/") 
      
      // onAuthStateChanged(auth, (user) => {
      //   if (user) {
      //     navigate("/")          
      //   } else {
      //     alert("Ocorreu um erro. Tente novamente.")
      //   }
      // })

      setFormData({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
      })
    }
  }

  return (
    <div className="bg-gray-100 h-screen w-full flex flex-col items-center justify-center">
      <h1 className="font-bold text-3xl mb-7">
        Finan
        <span className="text-green-500">Flow</span>
      </h1>

      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-4 w-75 mb-5"
      >
        <Input
          label="Nome"
          id="name"
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Digite seu nome"
        />

        <Input
          label="Email"
          id="email"
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Digite seu e-mail"
        />

        <Input
          label="Senha"
          id="password"
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="Digite sua senha"
        />

        <Input
          label="Confirmar senha"
          id="confirmPassword"
          type="password"
          name="confirmPassword"
          value={formData.confirmPassword}
          onChange={handleChange}
          placeholder="Confirme sua senha"
        />

        <Button text={"Criar conta"} />
      </form>

      <Link to={"/login"} className="font-medium hover:text-green-600">
        Já tenho uma conta
      </Link>
    </div>
  )
}

export default Register