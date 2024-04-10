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
        <h1 className="TechnicalReport"> Mission & Safety </h1>
        <Article Img={Mission} Title={"Our Mission"} Description={"We can further improve the experience of players through live tracking of reports. We can automatically analyze Textchat, Voice communications, and Gameplay to determine if Player reports are legitimate, and instantly take action based on the reports. We use a Machine learning model to analyze gameplay, and determine the characteristics of certain gameplay. We can also process chatlogs and voice communcations to determine discriminatory speech. The entire Wolfgang Anticheat system is designed to provide the most competitive and fair experience for players, while cutting the maintenance costs for Developers. Ensuring total security with lower costs than our competitors."} />
        <Article Img={Safety} Title={"Safety"} Description={"We can further improve the experience of players through live tracking of reports. We can automatically analyze Textchat, Voice communications, and Gameplay to determine if Player reports are legitimate, and instantly take action based on the reports. We use a Machine learning model to analyze gameplay, and determine the characteristics of certain gameplay. We can also process chatlogs and voice communcations to determine discriminatory speech. The entire Wolfgang Anticheat system is designed to provide the most competitive and fair experience for players, while cutting the maintenance costs for Developers. Ensuring total security with lower costs than our competitors."} />
        

      </body>
      <Footer/>
    </div>

  );
}

export default mission;
