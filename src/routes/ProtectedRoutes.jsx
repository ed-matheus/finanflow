import { useEffect, useState } from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from '../firebase/firebase'

const ProtectedRoutes = () => {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user)
      setLoading(false)
    })

    return () => unsubscribe()
  }, [])

  if (loading) {
    return (
      <div className='flex items-center justify-center h-screen'>
        <p className='text-center font-medium'>Carregando...</p>
      </div>
    )
  }

  if (user) {
    return <Outlet />
  } else {
    return <Navigate to={"/login"} />
  }
}

export default ProtectedRoutes