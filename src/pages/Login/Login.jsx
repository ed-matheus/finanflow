import { Link } from "react-router-dom"

// Components
import Input from "../../components/ui/Input"
import Button from "../../components/ui/Button"

const Login = () => {
  return (
    <div className="bg-gray-100 h-screen w-full flex flex-col items-center justify-center">
      <h1 className="font-bold text-3xl mb-7">
        Finan
        <span className="text-green-500">Flow</span>
      </h1>

      <form
        // onSubmit={handleSend}
        className="flex flex-col gap-3 w-75 mb-5"
      >
        <Input
          label={"Email"}
          id={"email"}
          type={"text"}
          name={"email"}
          // value={email}
          // onChange={handleChange}
          placeholder="Digite seu e-mail"
        />

        <Input
          label="Senha"
          id="password"
          type="password"
          name="password"
          // value={email}
          // onChange={handleChange}
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