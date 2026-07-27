// Components
import Header from "../../components/Header"
import BalanceCard from "../../components/BalanceCard"

// Icons
import { FaPlus } from "react-icons/fa";
import CategoryExpenses from "../../components/CategoryExpenses";
import TransactionCard from "../../components/TransactionCard";

// Component Icons
import { CiShoppingCart } from "react-icons/ci";
import { IoHomeOutline } from "react-icons/io5";
import { IoCarOutline } from "react-icons/io5";
import { IoGameControllerOutline } from "react-icons/io5";
import { BsThreeDots } from "react-icons/bs";
import { FaDollarSign } from "react-icons/fa6";

const Dashboard = () => {

  const categories = [
    {
      id: 1,
      category: "Alimentação",
      percent: 46,
      expense: "380,70",
      bgColor: "bg-green-200",
      barColor: "#22d55e",
      iconColor: "text-green-800",
      icon: CiShoppingCart,
    },
    {
      id: 2,
      category: "Casa",
      percent: 22,
      expense: "184,90",
      bgColor: "bg-orange-200",
      barColor: "orange",
      iconColor: "text-orange-800",
      icon: IoHomeOutline,
    },
    {
      id: 3,
      category: "Transporte",
      percent: 15,
      expense: "125,40",
      bgColor: "bg-blue-200",
      barColor: "#3B57B3",
      iconColor: "text-blue-800",
      icon: IoCarOutline,
    },
    {
      id: 4,
      category: "Lazer",
      percent: 9,
      expense: "72,80",
      bgColor: "bg-purple-200",
      barColor: "#9048B6",
      iconColor: "text-purple-800",
      icon: IoGameControllerOutline,
    },
    {
      id: 5,
      category: "Outros",
      percent: 8,
      expense: "73,75",
      bgColor: "bg-red-200",
      barColor: "#B7403C",
      iconColor: "text-red-800",
      icon: BsThreeDots,
    },
  ]

  const transactions = [
    {
      id: 1,
      icon: CiShoppingCart,
      type: "expense",
      title: "São Vicente",
      category: "Alimentação",
      amount: 80.00,
      date: "Hoje, 11:32",
    },
    {
      id: 2,
      icon: IoHomeOutline,
      type: "expense",
      title: "Estrela do Lar",
      category: "Casa",
      amount: 32.27,
      date: "Ontem, 16:25",
    },
    {
      id: 3,
      icon: FaDollarSign,
      type: "income",
      title: "Salário",
      category: "Salário",
      amount: 3800.00,
      date: "Ontem, 14:22",
    }
  ]

  return (
    <>
      <Header />
      <main className="mx-4.5 my-2 pb-20">
        <BalanceCard />

        <button className="flex items-center gap-3 p-4 mt-4 w-full rounded-2xl bg-green-100">
          <div className="rounded-xl p-3 bg-green-400">
            <FaPlus />
          </div>

          <div>
            <h2 className="font-medium text-lg">Registrar gasto</h2>
            <span className="text-gray-500">Rápido e simples</span>
          </div>
        </button>

        {/* Expenses */}
        <section className="mt-4 p-4 rounded-2xl shadow-xl">
          <h2 className="font-medium mb-5">Gastos por categoria</h2>

          <ul className="flex flex-col gap-3">
            {
              categories.map((category) => (
                <li key={category.id}>
                  <CategoryExpenses
                    categoryName={category.category}
                    percent={category.percent}
                    expense={category.expense}
                    bgColor={category.bgColor}
                    barColor={category.barColor}
                    iconColor={category.iconColor}
                    icon={category.icon}
                  />
                </li>
              ))
            }
          </ul>

        </section>

        {/* Transactions */}
        <section className="mt-4 p-4 rounded-2xl shadow-xl">
          <h2 className="font-medium mb-5">Transações</h2>

          <ul className="flex flex-col gap-7">
            {
              transactions.map((transaction) => (
                <li key={transaction.id}>
                  <TransactionCard
                    icon={transaction.icon}
                    title={transaction.title}
                    date={transaction.date}
                    amount={transaction.amount}
                    category={transaction.category}
                  />
                </li>
              ))
            }
          </ul>
        </section>
      </main>
    </>
  )
}

export default Dashboard