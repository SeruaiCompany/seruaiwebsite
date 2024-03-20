import seruailogo from '../Assets/seruailogo.svg';

function BottomFooter() {
  return (

    <footer>

        <div className="FooterHolder">

          <div className="FooterContainers">

            <div className="FooterLinksContainers">

              {/* Footer Links */}
              <div className="FooterLinks">
                <a className="FooterTitle"> Products </a>
                <a> Wolfgang </a>
              </div>

              <div className="FooterLinks">
                <a className="FooterTitle"> Research </a>
                <a> Future Products </a>
              </div>

              <div className="FooterLinks">
                <a className="FooterTitle"> Company </a>
                <a> Careers </a>
                <a> Mission </a>
              </div>

              <div className="FooterLinks">
                <a className="FooterTitle"> External </a>
                <a> Github </a>
              </div>

              <div className="FooterLinks">
                <a className="FooterTitle"> Shortcuts </a>
                <a> Homepage </a>
                <a> Terms of Service </a>
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
