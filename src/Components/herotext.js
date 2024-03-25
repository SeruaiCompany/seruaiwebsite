import React from "react";
import { Link } from 'react-router-dom';

function HeroText( { Title1, Title2, SubTitle, ButtonText, Linkto} ) {

    return (
  
        <div className="HeroTextHolder">

            <div className="HeroText">

            <h1> {Title1} <br></br> {Title2} </h1>
            <h2> {SubTitle} </h2>

            <button> <Link to={Linkto}> {ButtonText} </Link>  </button>
            
            </div>

        </div>
  
    );
  }
  
  export default HeroText;
  