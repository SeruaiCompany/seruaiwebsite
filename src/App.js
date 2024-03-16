import logo from './logo.svg';
import './App.css';
import dropdown from './dropdown.svg'
import burgermenu from './burgermenu.svg'
import Article1 from './Article.svg'
import Article2 from './Article2.svg'
import Article3 from './Article3.svg'
import Article4 from './article4.svg'
import seruailogo from './seruailogo.svg'

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

        <div class="HeroTextHolder"> 
          <div class="HeroText">  
            <h1> Leading innovation in <br></br> cybersecurity and artificial intelligence </h1>
            <h2> Researching and implementing new technologies in our daily lives for the better </h2>
            <button> Our mission </button>
          </div>
        </div>

        <div class="HeroContainer">  
          <video class="HeroVideo" muted loop autoPlay>   
          <source src={bannervideo}/>
          </video>
        </div>

        <div class="ArticlesHolder"> 
          <div class="ArticlesDisplay">
            <h1 class="ArticleTitle"> Articles </h1>
            <div class="Articles">

              <div class="Article"> 
                <img src={Article1} />
                <h2> Real Time Assistance with Compania </h2>
                <p> No more following instructions from a text prompt </p>
              </div>

              <div class="Article"> 
                <img src={Article4} />
                <h2> Catching Cheaters with Wolfgang </h2>
                <p> Implementing Wolfgang as your anticheat solution </p>
              </div>

              <div class="Article"> 
                <img src={Article3} />
                <h2> Adding Wolfgang to your anticheat </h2>
                <p> Impower your current anticheat solution with AI</p>
              </div>

              <div class="Article"> 
                <img src={Article2} />
                <h2> The mission of Seruai </h2>
                <p> The beginning of something great </p>
              </div>

            </div>
          </div>
        </div>

      </body>

      <footer> 
        <div class="FooterHolder"> 
          <div class="FooterContainers">

            <div class="FooterLinksContainers">  
      
              <div class="FooterLinks">        
                <a class="FooterTitle"> Products </a>
                <a> Wolfgang </a>
                <a> Wolfgang Attacha </a>
              </div>

              <div class="FooterLinks"> 
                <a class="FooterTitle"> Research </a>
                <a> Compania </a>
              </div>

              <div class="FooterLinks"> 
                <a class="FooterTitle"> Company </a>
                <a> Careers </a>
                <a> Mission </a>
              </div>

              <div class="FooterLinks"> 
                <a class="FooterTitle"> External </a>
                <a> Github </a>
              </div>

              <div class="FooterLinks"> 
                <a class="FooterTitle"> Shortcuts </a>
                <a> Homepage </a>
                <a> Terms of Service </a>
              </div>

            </div> 
    
            <img src={seruailogo} />
            <p> Seruai 2024 © </p>

          </div>
        </div>
      </footer>

    </div>
  );
}


export default App;
