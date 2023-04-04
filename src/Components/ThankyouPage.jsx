import React from 'react'
import mobileLogo from "../images/mobileLogo.svg"
import SignUpLogo from "../images/signupLogo.svg"
import RightCardImage from "../images/ThankyouPageRight.svg"

function ThankyouPage() {
  return (
    <>
    <div className="mobilelogo">
        <img src={mobileLogo} alt=""/>
        <span className="headingStyle">Asatera</span>
    </div>

    <div className="thankyouParentClass">
        <div className="mobilemode">

            <div className="logostyle">
                <img src={SignUpLogo} alt=""/>
                <span className="headingStyle">Asatera</span>
            </div>

            <div>
                <span className="thankyouCss">
                    Registeration Completed. Please confirm
                    your email id by clicking on the link sent
                    to your email.
                </span>
                <div>
                    <button className="buttonClass" ><span className="buttonClassText">Sounds Great !</span></button>
                </div>
            </div>
        </div>

        <div  className="desktopMode">
            <img src={RightCardImage} alt=""/>
        </div>
    </div>
    </>
  )
}

export default ThankyouPage