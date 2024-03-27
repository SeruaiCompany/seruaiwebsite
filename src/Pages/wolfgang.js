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

import bannervideo from '../Assets/herovideo.mp4';

function wolfgang() {

  return (

    <div className="App">
      <header className="App-header"></header>
      <body>
        <Navbar/>

        {/* Hero */}
        <HeroText Title1={"We solve all your problems,"} Title2={"Wolfgang was made with Developers in mind"} SubTitle={"Designed to cut costs of regular anticheat development, with more power and security, resulting in a better experience for players"} ButtonText={"Request a Demo"} Linkto={"/contactpage"} />
        <HeroVideo VideoPath={bannervideo} />

        {/* Page Body Code Below */}

        

      </body>
      <Footer/>
    </div>

  );
}

export default wolfgang;
