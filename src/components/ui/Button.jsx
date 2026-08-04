import React from 'react'

const Button = ({ text, type }) => {
  return (
    <button
      type={type}
      className="rounded-lg border mt-2 p-2 font-medium text-white bg-green-500 hover:bg-green-600 hover:cursor-pointer"
    >
      {text}
    </button>
  )
}

export default Button