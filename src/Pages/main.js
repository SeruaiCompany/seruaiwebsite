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
import WolfgangReport from '../Assets/wolfgangreport.svg'

import { Link } from 'react-router-dom';

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

        <h1 className="TechnicalReport"> Technical Reports </h1>
        <div class="MainpageContent"> 
          <img src={WolfgangReport} alt='wolfgangtechnicalreport' />
          <div class="MainpageText">
            <h2> The specifics behind the Wolfgang Anticheat </h2>
            <p> Wolfgang consists of multiple machine learning models to achieve a three stage process that is able to catch a variety of cheats. The advantage behind Wolfgang over
              all other anticheats is that Wolfgang builds its knowledge off of Cheaters data against them. Every stage in the system, i.e Prevention Stage, Active Stage, and Post report 
              stage is designed to gather data off of the cheaters for training purposes. For example, the Prevention Stage gathers data from analyzing DLL injection methods, memory reading process, in order
              for the anticheat to patch itself. The Active stage gathers data off of...
            </p>
            <a> <Link to="/wolfgang"> Learn more about Wolfgang... </Link> </a>
          </div>
        </div>

      </body>
      <Footer/>
    </div>

  );
}

export default Main;
