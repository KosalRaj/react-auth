import React from 'react'

export const ButtonBase = (props) => {
  const {
    className,
    size = "base",
    as = 'button',
    children,
    IconStart,
    IconEnd,
    ...restProps
  } = props;

  const Element = as;

  const mapBaseSize = {
    sm: "py-2 px-2 text-xs",
    base: "py-3 px-5 text-base",
    lg: "py-4 px-5 text-xl"
  };

  return (
    <Element
      {...restProps}
      className={`flex items-center justify-center rounded whitespace-nowrap disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus:shadow-outline transition duration-300 ${className} ${mapBaseSize[size]}`}
    >
      <span className={IconStart && "mr-2"}>{IconStart}</span>
      {children}
      <span className={IconEnd && "ml-2"}>{IconEnd}</span>
    </Element>
  )
}
