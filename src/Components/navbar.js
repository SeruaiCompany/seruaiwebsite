import React, { useState, useEffect } from 'react';
import logo from '../Assets/logo.svg';
import dropdown from '../Assets/dropdown.svg';
import burgermenu from '../Assets/burgermenu.svg';
import { Link } from 'react-router-dom';

function Navbar() {
  const [isMenuOpen, setMenuOpen] = useState(false);

  // Function to toggle the menu state
  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  // Effect hook to add/remove class based on menu state
  useEffect(() => {
    document.body.classList.toggle('NoScroll', isMenuOpen);

    return () => {
      document.body.classList.remove('NoScroll');
    };
  }, [isMenuOpen]);

  return (

    <div> 

        {/* Navbar */}
        <div className="CenterNavBar">

          <div className={`Navbar ${isMenuOpen ? 'open' : ''}`}>

            {/* Logo */}
            <Link class="LogoHolder" to="/" > <img src={logo} alt="Logo" className='Logo' /> </Link>

            {/* Burger Toggle Mobile Only */} 
            <button className="BurgerItem" onClick={toggleMenu}>
              <img src={burgermenu} alt="Menu" />
            </button>

            {/* Item List */}
            <div className="ItemsList">

              {/* Dropdown Items */}
              <div className="DropdownItem">
                <div className="TitleItem">
                  <h3 className="NavLink"> Products </h3>
                  <img src={dropdown} alt="Dropdown" />
                </div>
                <div className="DropdownContent">
                  <a> <Link to="/wolfgang"> Wolfgang </Link> </a>
                </div>
              </div>

              <div className="DropdownItem">
                <div className="TitleItem">
                  <h3 className="NavLink"> Research </h3>
                  <img src={dropdown} alt="Dropdown" />
                </div>
                <div className="DropdownContent">
                  <a> <Link to="/futureproducts"> Future products </Link> </a>
                </div>
              </div>
              
              <div className="DropdownItem">
                <h3 className="NavLink"> Careers </h3>
              </div>

              <div className="DropdownItem">
                <h3 className="NavLink"> <Link to="/mission"> Mission </Link> </h3>
              </div>

            </div>
          </div>
        </div>

        {/* Burger Menu Panel */}
        <div className={`BurgerMenu ${isMenuOpen ? 'open' : ''}`}>

            {/* Nav Items */}
          <div className="NavItems">

            {/* Burger Menu Items */}

            <div className="NavProducts">
              <h3 className="NavLink"> Products </h3>
              <a> <Link to="/wolfgang"> Wolfgang </Link> </a>
            </div>

            <div className="NavProducts">
              <h3 className="NavLink"> Research </h3>
              <a> <Link to="/futureproducts"> Future products </Link> </a>
            </div>

            <div className="NavProducts">
              <h3 className="NavLink"> Company </h3>
              <a> Careers </a>
              <a> <Link to="/mission"> Mission </Link> </a>
            </div>

          </div>

        </div>

    </div>

  );
}

export default Navbar;
