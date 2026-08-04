import { useNavigate } from "react-router-dom"
import { logout } from "../../services/authService"
import { useEffect } from "react"

// Icons
import { MdLogout } from "react-icons/md";

const Profile = () => {
  const navigate = useNavigate()

  const handleLogout = async () => {
    try {
      await logout()
      navigate("/login")

    } catch (error) {
      console.error(error)
    }
  }

  return (
    <div className='flex items-center justify-center h-screen'>
      <button
        type="button"
        className="flex items-center justify-center gap-1 rounded-md bg-red-500 hover:bg-red-600 text-white font-medium p-2"
        onClick={handleLogout}
      >
        Sair
        <MdLogout />
      </button>
    </div>
  )
}

export default Profile