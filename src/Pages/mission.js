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
import bannervideo from '../Assets/BlankHero.mp4';
import Mission from '../Assets/Mission.svg'
import Safety from '../Assets/Safety.svg'

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
        <h1 className="TechnicalReport2"> Mission & Safety </h1>
        <Article Img={Mission} Title={"Our Mission"} Description={"We strive to provide software that uses artificial intelligence to improve people's lives in multiple fields. We dedicate ourselves to providing high quality products that make a significant impact on people lives for the better. We do this while progressing our research on AI in fields that are applicable directly instead of being dangerous to humans such as AI that can fabricate video, images, and audio."} />
        <Article Img={Safety} Title={"Safety"} Description={"We promise to use fundamental machine learning technology to develop products, and never research AI beyond. We adhere this safety, and we will not develop AI that will significantly impact humans lives in negative ways."} />
        
      </body>
      <Footer/>
    </div>

  );
}

export default mission;
