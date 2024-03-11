import logo from './logo.svg';
import './App.css';
import dropdown from './dropdown.svg'
import burgermenu from './burgermenu.svg'

// Import
import bannervideo from '../src/tempherovideo.mp4'


function App() {
  return (
    <div className="App">
      <header className="App-header">


      </header>
      <body>
        
        <div class="CenterNavBar">
          <div class="Navbar">
            <img src={logo} />

            <button class="BurgerItem"> <img src={burgermenu} /> </button>

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
