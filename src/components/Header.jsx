import React from 'react';
import Logo from '../../public/assets/codalablogo.png';
import {Link} from 'react-router-dom';


const Header = () => {
  return (
    <header className='bg-white shadow-md w-100'>
      <div className="mx-auto px-3 max-w-[1200px] w-100 pt-3 pb-3">
        <div className="grid grid-cols-12 items-center gap-3">
          <div className='site-logo-wrapper col-span-2'>
            <div className='flex items-center gap-2'>
              <img src={Logo} className='logo-image'/>
              <span className='logo-text text-lg font-bold'>CodaLab @ITR</span>
            </div>
          </div>
          <div className='navigation-menu-wrapper col-span-7 flex-wrap'>
            <nav className='flex items-center gap-2 text-base font-normal justify-center'>
              <Link to="/" className=''>Home</Link>
              <Link to="/people">People</Link>
              <Link to="/research">Research</Link>
              <Link to="/publication">Publications</Link>
              <Link to="/achievements">Achievements</Link>
              <Link to="/gallery">Gallery</Link>
              <Link to="/contact">Contact</Link>
            </nav>
          </div>  
        </div>
      </div>
    </header>
  )
}

export default Header
