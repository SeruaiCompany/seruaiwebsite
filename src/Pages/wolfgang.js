import '../App.css';
import '../Styles/Mobile.css'
import '../Styles/Hero.css'
import '../Styles/Navbar.css'
import '../Styles/Footer.css'
import '../PageStyles/wolfgang.css'
import '../Styles/article.css'

import Navbar from '../Components/navbar'
import Footer from '../Components/footer'
import HeroVideo from '../Components/herovideo'
import HeroText from '../Components/herotext';
import Article from '../Components/article';
import WolfGangArticle from '../Assets/wolfgangreport.svg'
import WolfGangImageOne from '../Assets/WolfgangImageOne.svg'
import WolfGangImageTwo from '../Assets/WolfgangImageTwo.svg'

import bannervideo from '../Assets/herovideo.mp4';

function wolfgang() {

  return (

    <div className="App">
      <header className="App-header"></header>
      <body>
        <Navbar/>

        {/* Hero */}
        <HeroText Title1={"Seruai Introduces: Wolfgang:"} Title2={"Our solution to Developers problems"} SubTitle={"Designed to cut costs for developers while protecting their intellectual property."} ButtonText={"Request a Demo"} Linkto={"/contactpage"} />
        <HeroVideo VideoPath={bannervideo} />

        {/* Page Body Code Below */}
        <h1 className="TechnicalReport2"> How Wolfgang Works </h1>
        <Article Img={WolfGangImageOne} Title={"Step One: Indentifying Modifications"} Description={"We analyze and feed data into a Machine Learning Model. The data that trains the Artificial Intelligence is process data collected from the game's DLL on the Cheaters client. We manually detect Cheaters using our systems and feed the process data into the Learning Model, once enough Data is collected and the targeted accuracy of Learning Model is achieved. The Anticheat gets toggled into automatic mode which automatically patches vulnerabilities of the system by scanning processes in which completetly protects the DLL from injections from unwanted sources. Our method also works against Privacy when the Anticheat automatically detects a modification within the DLL, it stops the game process from launching. Keeping your game safe from cheaters and pirates. "} />
        <Article Img={WolfGangArticle} Title={"Step Two: Analyzing Gameplay"} Description={"This process consists of gathering midmatch data such as replay data, and player input. We use this gathered data to in two ways, we compare the data to detect AI assistance or compare it to the data of other cheaters to compare and reconize patterns between them using Machine Learning. We are able to detect discrepancies through Input when comparing it to Cheaters for a multiude of cheats including walls, aimbot, etc. We can ensure a fair match for a majority of players using our methods, giving the players a overall better experience. This system allows us to automatically check the reports of players live, and analyze the data while the match is being played. Making players action matter. "} />
        <Article Img={WolfGangImageTwo} Title={"Step Three: Overview"} Description={"We can further improve the experience of players through live tracking of reports. We can automatically analyze Textchat, Voice communications, and Gameplay to determine if Player reports are legitimate, and instantly take action based on the reports. We use a Machine learning model to analyze gameplay, and determine the characteristics of certain gameplay. We can also process chatlogs and voice communcations to determine discriminatory speech. The entire Wolfgang Anticheat system is designed to provide the most competitive and fair experience for players, while cutting the maintenance costs for Developers. Ensuring total security with lower costs than our competitors."} />

      </body>
      <Footer/>
    </div>

  );
}

export default wolfgang;
