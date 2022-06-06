import React from 'react';

const NavBar = () => {
  return (
    <nav className='flex justify-between'>
      <div className="logo">
        <ButtonBase as="a">Logo</ButtonBase>
      </div>
    </nav>
  )
}

export default NavBar;