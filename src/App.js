import './App.css';

import Navbar from './Components/navbar'
import Footer from './Components/footer'
import HeroVideo from './Components/herovideo'
import HeroText from './Components/herotext';

import bannervideo from './Assets/tempherovideo.mp4';

function App() {

  return (

    <div className="App">
      <header className="App-header"></header>
      <body>
        <Navbar/>

        {/* Hero */}
        <HeroText Title1={"Introducing Wolfgang:"} Title2={"our latest product that provides relief"} SubTitle={"New AI powered anticheat that excels in both prevention and catching cheaters in action"} ButtonText={"Request a Demo"} />
        <HeroVideo VideoPath={bannervideo} />

        {/* Page Body Code Below */}

    

      </body>
      <Footer/>
    </div>

  );
}

export default App;
