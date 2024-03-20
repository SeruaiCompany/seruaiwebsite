import React from "react";

function HeroText( { Title1, Title2, SubTitle, ButtonText} ) {

    return (
  
        <div className="HeroTextHolder">

            <div className="HeroText">

            <h1> {Title1} <br></br> {Title2} </h1>
            <h2> {SubTitle} </h2>

            <button> {ButtonText}</button>
            
            </div>

        </div>
  
    );
  }
  
  export default HeroText;
  