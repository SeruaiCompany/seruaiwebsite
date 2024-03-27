import '../App.css';
import '../Styles/Mobile.css'
import '../Styles/Hero.css'
import '../Styles/Navbar.css'
import '../Styles/Footer.css'
import '../Styles/4k.css'
import '../PageStyles/main.css'

import Navbar from '../Components/navbar'
import Footer from '../Components/footer'
import HeroVideo from '../Components/herovideo'
import HeroText from '../Components/herotext';

import bannervideo from '../Assets/herovideo.mp4';
import WolfgangReport from '../Assets/wolfgangreport.svg'

import { Link } from 'react-router-dom';

function Main() {

  return (

    <div className="App">
      <header className="App-header"></header>
      <body>
        <Navbar/>

        {/* Hero */}
        <HeroText Title1={"Introducing Wolfgang:"} Title2={"our latest product that provides power"} SubTitle={"Gain back control with a new anticheat completely driven by artificial intelligence."} ButtonText={"Request a Demo"} Linkto={"/contactpage"} />
        <HeroVideo VideoPath={bannervideo} />

        {/* Page Body Code Below */}

        <h1 className="TechnicalReport"> Technical Reports </h1>
        <div class="MainpageContent"> 
          <img src={WolfgangReport} alt='wolfgangtechnicalreport' />
          <div class="MainpageText">
            <h2> The specifics of Wolfgang </h2>
            <p> The anticheat consists of three machine learning models that are created to achieve the 3 steps of improving experiences for players. The steps consist of the 'Pregame Patching', 'Midmatch Analyzing', 'Report Processing'. The first step is dedicated
              to catching cheaters before they even enter the game through DLL analyzation, etc. The second step is catching cheaters mid game through gameplay analyzation, and the third step is automatic player report processing.
            </p>
            <button class="TechnicalReportButton"> <Link to="/wolfgang"> <a> Read Technical Report </a> </Link> </button>
          </div>
        </div>

      </body>
      <Footer/>
    </div>

  );
}

export default Main;
