import '../App.css';
import '../Styles/Mobile.css'
import '../Styles/Hero.css'
import '../Styles/Navbar.css'
import '../Styles/Footer.css'
import '../Styles/4k.css'

import Navbar from '../Components/navbar'
import Footer from '../Components/footer'
import HeroVideo from '../Components/herovideo'
import HeroText from '../Components/herotext';

import bannervideo from '../Assets/tempherovideo.mp4';

function Main() {

  return (

    <div className="App">
      <header className="App-header"></header>
      <body>
        <Navbar/>

        {/* Hero */}
        <HeroText Title1={"Introducing Wolfgang:"} Title2={"our latest product that provides power"} SubTitle={"A new AI driven anticheat that is cheaper, faster, and better for game developers than ever made before."} ButtonText={"Request a Demo"} Linkto={"/contactpage"} />
        <HeroVideo VideoPath={bannervideo} />

        {/* Page Body Code Below */}

        

      </body>
      <Footer/>
    </div>

  );
}

export default Main;
