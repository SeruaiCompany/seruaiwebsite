import '../App.css';
import '../Styles/Mobile.css'
import '../Styles/Hero.css'
import '../Styles/Navbar.css'
import '../Styles/Footer.css'

import Navbar from '../Components/navbar'
import Footer from '../Components/footer'
import HeroVideo from '../Components/herovideo'
import HeroText from '../Components/herotext';
import Article from '../Components/article';
import FutureProduct from '../Assets/FutureProductsImageOne.svg'

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
        <h1 className="TechnicalReport2"> Future Products </h1>
        <Article Img={FutureProduct} Title={"Compania"} Description={"Compania is a desktop companian that sees exactly what you see, and automatically fills in information for you as well as helps you with tasks such as installing applications, programming, and organizing files for you. You can use this product in a company setting to boost productivity or at home. Getting rid of those mind numbing tasks."} />
        

      </body>
      <Footer/>
    </div>

  );
}

export default futureproducts;
