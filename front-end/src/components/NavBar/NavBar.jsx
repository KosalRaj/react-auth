import React from 'react';
import { ButtonBase } from '../Buttons'

const NavBar = () => {
  return (
    <header className='shadow-xl'>
      <nav className='flex justify-between max-w-5xl mx-auto px-4'>
        <div className="logo">
          <ButtonBase as="a">Logo</ButtonBase>
        </div>
      </nav>
    </header>
  )
}

export default NavBar;