import '../App.css';
import '../Styles/Mobile.css'
import '../Styles/Hero.css'
import '../Styles/Navbar.css'
import '../Styles/Footer.css'

import Navbar from '../Components/navbar'
import Footer from '../Components/footer'
import HeroVideo from '../Components/herovideo'
import HeroText from '../Components/herotext';

import bannervideo from '../Assets/BlankHero.mp4';

function futureproducts() {

  return (

    <div className="App">
      <header className="App-header"></header>
      <body>
        <Navbar/>

        {/* Hero */}
        <HeroText Title1={"Researching, Innovating, Applying."} Title2={"Creating products that make a positive change"} SubTitle={"From creating software that make the internet a safer space to providing tools to impower other creators, we change lives."} ButtonText={"Contact us"} Linkto={"/contactpage"} />
        <HeroVideo VideoPath={bannervideo} />

        {/* Page Body Code Below */}

        

      </body>
      <Footer/>
    </div>

  );
}

export default futureproducts;
