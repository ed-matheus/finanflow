// Icons
import { IoIosArrowForward } from "react-icons/io";

const TransactionCard = ({ icon: Icon, title, date, amount, category }) => {
  return (
    <div className="flex items-center justify-between">

      {/* Category Icon */}
      <div className="p-2 rounded-full w-11 border">
        <Icon size={25} className="" />
      </div>

      {/* Store and Date/Time */}
      <div className="w-40">
        <div className="flex flex-col">
          <span className="font-medium">{ title }</span>
          <span className="text-gray-500 text-sm">{ date }</span>
        </div>
      </div>

      {/* Value and Category */}
      <div className="flex flex-col text-right">
        <span className="font-medium">
          - R$ {amount}
        </span>
        <span className="text-sm">{ category }</span>
      </div>

      <IoIosArrowForward size={16} color="gray" />

    </div>
  )
}

export default TransactionCard