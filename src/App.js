import logo from './logo.svg';
import './App.css';

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
            <div class="ItemsList"> 
               
                <div class="DropdownItem"> 
                  <h3 class="NavLink"> Products </h3>
                  <div class="DropdownContent">  
                    <a> Wolfgang </a>
                  </div>
                </div>

                <div class="DropdownItem"> 
                  <h3 class="NavLink"> Research </h3>
                  <div class="DropdownContent">  
                    <a> Wolfgang </a>
                  </div>
                </div>

                <div class="DropdownItem"> 
                  <h3 class="NavLink"> Careers </h3>
                  <div class="DropdownContent">  
                    <a> Wolfgang </a>
                  </div>
                </div>
              
                <div class="DropdownItem"> 
                  <h3 class="NavLink"> Mission </h3>
                  <div class="DropdownContent">  
                    <a> Wolfgang </a>
                  </div>
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
