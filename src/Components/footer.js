import seruailogo from '../Assets/seruailogo.svg';
import { Link } from 'react-router-dom';

function BottomFooter() {
  return (

    <footer>

        <div className="FooterHolder">

          <div className="FooterContainers">

            <div className="FooterLinksContainers">

              {/* Footer Links */}
              <div className="FooterLinks">
                <a className="FooterTitle"> Products </a>
                <a> <Link to="/wolfgang"> wolfgang </Link> </a>
              </div>

              <div className="FooterLinks">
                <a className="FooterTitle"> Research </a>
                <a> <Link to="/futureproducts"> Future products </Link> </a>
              </div>

              <div className="FooterLinks">
                <a className="FooterTitle"> Company </a>
                <a> Careers </a>
                <a> <Link to="/mission"> Mission </Link> </a>
              </div>

              <div className="FooterLinks">
                <a className="FooterTitle"> External </a>
                <a href='https://github.com/SeruAICompany'> Github </a>
              </div>

              <div className="FooterLinks">
                <a className="FooterTitle"> Shortcuts </a>
                <a> <Link to="/"> Homepage </Link> </a>
                <a> <Link to="/termsofservice"> Terms of Service </Link> </a>
              </div>

            </div>

            {/* Seruai Logo and Copyright */}
            <img src={seruailogo} alt="Seruai Logo" />
            <p> Seruai 2024 © </p>

          </div>

        </div>

      </footer>

  );
}

export default BottomFooter;
