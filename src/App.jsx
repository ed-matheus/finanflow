import { Route, Routes } from "react-router-dom"
import Layout from "./layouts/Layout"

// Pages
import Dashboard from "./pages/Dashboard/Dashboard"
import Login from "./pages/Login/Login"
import Register from "./pages/Register/Register"
import Transactions from "./pages/Transactions/Transactions"
import Profile from "./pages/Profile/Profile"

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Dashboard />} />
        <Route path="/transactions" element={<Transactions />} />
        <Route path="/profile" element={<Profile />} />
      </Route>

      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  )
}

export default App
