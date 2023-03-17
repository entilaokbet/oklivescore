import React from "react";
import OKBetLogo from '../assets/images/okbet-big.webp';

const Logo = () => {
    return (
        <>
        <div className="col-1">
            <div className="site-branding">
                <div className="custom-logo">
                    <a href="/">
                        <img src={OKBetLogo} className="LogoStyle" title="OKBET" alt="OKBET"  />
                    </a>
                </div>
            </div>
        </div>
        </>
    );
}

export default Logo;