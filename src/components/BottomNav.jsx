// Icons
import { GoHome } from "react-icons/go";
import { GoHomeFill } from "react-icons/go";
import { GrTransaction } from "react-icons/gr";
import { IoPersonCircleOutline } from "react-icons/io5";
import { IoPersonCircle } from "react-icons/io5";
import { MdLogout } from "react-icons/md";
import { NavLink } from "react-router-dom";

const BottomNav = () => {
  const navItems = [
    {
      id: 1,
      icon: GoHome,
      iconFill: GoHomeFill,
      name: "Início",
      link: '/',
    },
    {
      id: 2,
      icon: GrTransaction,
      iconFill: GrTransaction,
      name: "Transações",
      link: '/transactions',
    },
    {
      id: 3,
      icon: IoPersonCircleOutline,
      iconFill: IoPersonCircle,
      name: "Perfil",
      link: '/profile',
    }
  ]

  return (
    <nav className='fixed bottom-0 left-0 w-full shadow-2xl rounded-t-2xl bg-white py-4 px-8'>
      <ul className='flex items-center justify-between text-sm font-medium'>
        {
          navItems.map(item => (
            <li key={item.id}>
              <NavLink
                to={item.link}
                className={({ isActive }) => 
                  `flex flex-col items-center ${
                    isActive ? "text-green-500" : "text-gray-400"
                  }`
                }
              >
                {({ isActive }) => {
                  const Icon = isActive ? item.iconFill : item.icon

                  return (
                    <>
                      <Icon size={22} />
                      <span>{item.name}</span>
                    </>
                  )
                }}
              </NavLink>
            </li>
          ))
        }
      </ul>
    </nav>
  )
}

export default BottomNav