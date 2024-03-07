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
              <ul>  
                <li> Technology </li>
                <li> Products </li>
                <li> Careers </li>
                <li> API </li>
              </ul>
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
