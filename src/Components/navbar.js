import React, { useState, useEffect } from 'react';
import logo from '../Assets/logo.svg';
import dropdown from '../Assets/dropdown.svg';
import burgermenu from '../Assets/burgermenu.svg';

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
            <img src={logo} alt="Logo" />

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
                  <a> Wolfgang </a>
                  <a> Wolfgang Attacha </a>
                </div>
              </div>

              <div className="DropdownItem">
                <div className="TitleItem">
                  <h3 className="NavLink"> Research </h3>
                  <img src={dropdown} alt="Dropdown" />
                </div>
                <div className="DropdownContent">
                  <a> Compania </a>
                </div>
              </div>
              
              <div className="DropdownItem">
                <h3 className="NavLink"> Careers </h3>
              </div>

              <div className="DropdownItem">
                <h3 className="NavLink"> Mission </h3>
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
              <a> Wolfgang </a>
              <a> Wolfgang Attacha </a>
            </div>

            <div className="NavProducts">
              <h3 className="NavLink"> Research </h3>
              <a> Compania </a>
            </div>

            <div className="NavProducts">
              <h3 className="NavLink"> Company </h3>
              <a> Careers </a>
              <a> Mission </a>
            </div>

          </div>

        </div>

    </div>

  );
}

export default Navbar;
