import './App.css';

import Navbar from './Components/navbar'
import BottomFooter from './Components/footer'
import HeroVideo from './Components/herovideo'

import bannervideo from './Assets/tempherovideo.mp4';

function App() {

  return (
    <div className="App">
      {/* Header */}
      <header className="App-header"></header>

      {/* Body */}
      <body>
       
        {/* Navbar */}
        <Navbar/>

        {/* Hero Section Text */}
        <div className="HeroTextHolder">
          <div className="HeroText">
            <h1> Leading innovation in <br /> cybersecurity and artificial intelligence </h1>
            <h2> Researching and implementing new technologies in our daily lives for the better </h2>
            <button> Our mission </button>
          </div>
        </div>

        {/* Hero Video */}
        <HeroVideo VideoPath={bannervideo} />

        {/* Page Body Code Below */}

        <p> Text </p>

      </body>

      {/* Footer */}
      <BottomFooter/>

    </div>
  );
}

export default App;
