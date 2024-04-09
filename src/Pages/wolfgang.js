import '../App.css';
import '../Styles/Mobile.css'
import '../Styles/Hero.css'
import '../Styles/Navbar.css'
import '../Styles/Footer.css'
import '../PageStyles/wolfgang.css'

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
        <HeroText Title1={"Introducing Wolfgang:"} Title2={"Our solution to Developers problems"} SubTitle={"Designed to cut costs for developers while protecting their intellectual property."} ButtonText={"Request a Demo"} Linkto={"/contactpage"} />
        <HeroVideo VideoPath={bannervideo} />

        {/* Page Body Code Below */}
        
        

      </body>
      <Footer/>
    </div>

  );
}

export default wolfgang;
