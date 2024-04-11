import '../App.css';
import '../Styles/Mobile.css'
import '../Styles/Hero.css'
import '../Styles/Navbar.css'
import '../Styles/Footer.css'
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
        <HeroText Title1={"Providing Developers With"} Title2={"Tech to fight against Piracy and Cheating"} SubTitle={"Protect your digital rights with the latest technology powered by artificial intelligence."} ButtonText={"Request a Demo"} Linkto={"/contactpage"} />
        <HeroVideo VideoPath={bannervideo} />

        {/* Page Body Code Below */}

        <h1 className="TechnicalReport"> Technical Reports </h1>
        <div class="MainpageContent"> 
          <img src={WolfgangReport} alt='wolfgangtechnicalreport' />
          <div class="MainpageText">
            <h2> Protecting against Piracy and Cheating </h2>
            <p>We, Seruai offer a product called Wolfgang that protects your intellectual property against pirates and cheaters with the latest technology in artificial intelligence. <br/> We analyze processes and input, and compare it against data from legitimate humans in order
            to train our machine learning models to detect cheating. We use anti-tampering techniques in order to stop modifications to the game process, and are able to detect if is pirated.
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
