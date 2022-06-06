import React from 'react'

const Input = ({ type, placeholder, onChange, value, className="" }) => {
  return (
    <input
      className = {`px-5 py-4 bg-slate-100 ${className}`}
      type = {type}
      placeholder = {placeholder}
      value = {value}
      onChange = {onChange}
    />
  )
}

export default Input;