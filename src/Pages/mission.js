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

function mission() {

  return (

    <div className="App">
      <header className="App-header"></header>
      <body>
        <Navbar/>

        {/* Hero */}
        <HeroText Title1={"Seruai's Purpose is to use artificial intelligence"} Title2={"to make a positive impact on people's lives"} SubTitle={"We safely use and research artificial intelligence to achieve predicted results."} ButtonText={"Contact us"} Linkto={"/contactpage"} />
        <HeroVideo VideoPath={bannervideo} />

        {/* Page Body Code Below */}

        

      </body>
      <Footer/>
    </div>

  );
}

export default mission;
