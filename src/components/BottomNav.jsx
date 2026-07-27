// Icons
import { GoHome } from "react-icons/go";
import { GoHomeFill } from "react-icons/go";
import { GrTransaction } from "react-icons/gr";
import { IoPersonCircleOutline } from "react-icons/io5";
import { IoPersonCircle } from "react-icons/io5";
import { MdLogout } from "react-icons/md";

const BottomNav = () => {
  const navItems = [
    {
      id: 1,
      icon: <GoHome size={25} />,
      name: "Início",
      link: '/',
    },
    {
      id: 2,
      icon: <GrTransaction size={25} />,
      name: "Transações",
      link: '/transactions',
    },
    {
      id: 3,
      icon: <IoPersonCircleOutline size={25} />,
      name: "Perfil",
      link: '/profile',
    },
    {
      id: 4,
      icon: <MdLogout size={25} />,
      name: "Sair",
      link: '/login',
    },
  ]

  return (
    <nav className='fixed bottom-0 left-0 w-full shadow-2xl rounded-t-2xl bg-white py-4 px-8'>
      <ul className='flex items-center justify-between text-sm font-medium'>
        {
          navItems.map(item => (
            <li
            key={item.id}
            className={`flex flex-col items-center text-gray-400 hover:${"" ? "" : ""}`}
            >
              {item.icon}
              {item.name}
            </li>
          ))
        }
      </ul>
    </nav>
  )
}

export default BottomNav