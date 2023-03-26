import React from 'react'
import Ehtiyat from './Ehtiyat'
import Avtosalon from './Avtosalon'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='navbar'>
        <h3>TURBO.AZ</h3>
        <NavLink to="/about">Bütün elanlar</NavLink>
        <NavLink to="/avto">Avtosalonlar</NavLink>
        <NavLink to="/ehtiyat" className="nav-item dropdown">
          <div className='drop'>
              <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Ehtiyat hissələri və aksesuarlar
              </a>
             
              </div>    
            </NavLink>
            <NavLink to="/about">
              <button>yeni elan</button>
            </NavLink>
    </div>
  )
}

export default Navbar