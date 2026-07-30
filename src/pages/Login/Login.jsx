import { Link, useNavigate } from "react-router-dom"
import { useState } from "react"
import { login } from "../../services/authService"

// Components
import Input from "../../components/ui/Input"
import Button from "../../components/ui/Button"

const Login = () => {
  const navigate = useNavigate()

  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  })

  const handleChange = (e) => {
    const { name, value } = e.target

    // updating state
    setLoginData(prevState => ({
      ...prevState, // previous state of the form
      [name]: value // updates ONLY the current field
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    try {
      const user = await login(loginData.email, loginData.password)
      console.log(user)
      
      navigate("/")

    } catch (error) {
      alert(error.message)
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
        className="flex flex-col gap-3 w-75 mb-5"
      >
        <Input
          label={"Email"}
          id={"email"}
          type={"text"}
          name={"email"}
          value={loginData.email}
          onChange={handleChange}
          placeholder="Digite seu e-mail"
        />

        <Input
          label="Senha"
          id="password"
          type="password"
          name="password"
          value={loginData.password}
          onChange={handleChange}
          placeholder="Digite sua senha"
        />

        <Button text={"Entrar"} />
      </form>

      <span className="font-medium">
        Não é cadastrado ainda? <Link to={"/register"} className="text-green-600 hover:text-green-700">Clique aqui.</Link>
      </span>
    </div>
  )
}

export default Login