import React from 'react'

const Input = ({ label, id, type, name, value, placeholder, onChange }) => {
  return (
    <label htmlFor={id} className="flex flex-col font-medium">
      {label}
      <input
        id={id}
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required
        className="font-normal border border-gray-400 rounded p-2"
      />
    </label>
  )
}

export default Input