import logo from './logo.svg';
import './App.css';
import dropdown from './dropdown.svg'
import burgermenu from './burgermenu.svg'

// Import
import bannervideo from '../src/tempherovideo.mp4'
import React, { useState, useEffect } from 'react';


function App() {

  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    // Add or remove 'NoScroll' class based on the menu state
    if (isMenuOpen) {
      document.body.classList.add('NoScroll');
    } else {
      document.body.classList.remove('NoScroll');
    }

    // Cleanup: Remove the class when the component unmounts
    return () => {
      document.body.classList.remove('NoScroll');
    };
  }, [isMenuOpen]);

  return (
    <div className="App">
      <header className="App-header">


      </header>
      <body>
        
        <div class="CenterNavBar">
          <div className={`Navbar ${isMenuOpen ? 'open' : ''}`}>
            <img src={logo} />

            <button class="BurgerItem" onClick={toggleMenu}> <img src={burgermenu} /> </button>

            <div class="ItemsList"> 
               
                <div class="DropdownItem"> 
                  <div class="TitleItem">
                    <h3 class="NavLink"> Products </h3>
                    <img src={dropdown} />
                  </div>
                  <div class="DropdownContent">  
                    <a> Wolfgang </a>
                    <a> Protactia </a>
                    <a> Wolfgang Attacha </a>
                  </div>
                </div>

                <div class="DropdownItem"> 
                  <div class="TitleItem">
                    <h3 class="NavLink"> Research </h3>
                    <img src={dropdown} />
                  </div>
                  <div class="DropdownContent">  
                    <a> Compania </a>
                  </div>
                </div>

                <div class="DropdownItem"> 
                  <h3 class="NavLink"> Careers </h3>
                </div>
              
                <div class="DropdownItem"> 
                  <h3 class="NavLink"> Mission </h3>
                </div>

            </div>
          </div> 
        </div>
        
        <div class={`BurgerMenu ${isMenuOpen ? 'open' : ''}`}> 
            <div class="NavItems">  
              <div class="NavProducts">  
                <h3 class="NavLink"> Products </h3>    
                <a> Wolfgang </a>
                <a> Protactia </a>
                <a> Wolfgang Attacha </a>
              </div>
              <div class="NavProducts">  
                <h3 class="NavLink"> Research </h3>    
                <a> Compania </a>
              </div>
              <div class="NavProducts">  
                <h3 class="NavLink"> Company </h3>    
                <a> Careers </a>
                <a> Mission </a>
              </div>
            </div>
         </div>

        <div class="HeroContainer">  
          <video class="HeroVideo" muted loop autoPlay>   
          <source src={bannervideo}/>
          </video>
        </div>

      </body>
    </div>
  );
}



export default App;
