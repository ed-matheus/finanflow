// Icons
import { IoIosArrowForward } from "react-icons/io";

const CategoryExpenses = ({ categoryName, percent, expense, bgColor, barColor, iconColor, icon: Icon }) => {
  return (
    <div className="flex gap-3.5 items-center justify-between">
      {/* Category Icon */}
      <div className={`${bgColor} p-2 rounded-lg`}>
        <Icon size={25} className={iconColor} />
      </div>

      {/* Category and Percentage Bar */}
      <div className="w-40">
        <div className="flex gap-3">
          <span className="font-medium">{ categoryName }</span>
          <span className="text-gray-500">{ percent }%</span>
        </div>

        <div className="w-full h-1 bg-gray-200 rounded-full mt-1.5">
          <div
            className="h-full rounded-full transition-all duration-300"
            style={{
              width: `${percent}%`,
              backgroundColor: barColor,
            }}
          />
        </div>
      </div>

      {/* Amount */}
      <span className="font-medium text-right w-20">
        R$ {expense}
      </span>

      {/* <IoIosArrowForward size={16} color="gray" /> */}
    </div>
  )
}

export default CategoryExpenses