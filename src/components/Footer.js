import React, { Component } from "react";
import { Link } from "react-router-dom";

 class Footer extends Component {
    render() {
        return (
            <div id="footer">
                <div className="navbar">
                    <img className="logo" src="brown.png" alt="logo brown bros" />
                    <p>Tel.: </p>
                    <p>Email:</p>
                    <a href="https://es-es.facebook.com/" title="Facebook" target="_blank" rel="noreferrer">
                        <img src="facebook.png" alt="Enlace a Facebook" />
                    </a>
                    <a href="https://www.instagram.com/?hl=es" title="Instagram" target="_blank" rel="noreferrer">
                        <img src="Instagram.png" alt="Enlace a Instagram" />
                    </a>
                    <a href="https://twitter.com/?lang=es" title="Twitter" target="_blank" rel="noreferrer">
                        <img src="twitter.png" alt="Enlace a twitter" />
                    </a>
                </div>
                <div className="subNav">
                    <p><Link to={""}>aaaaaaa</Link></p>
                    <p><Link to={""}>aaaaaaa</Link></p>
                    <p><Link to={""}>aaaaaaa</Link></p>
                    <p><Link to={""}>aaaaaaa</Link></p>
                </div>  
            </div>
        )
    }
}

export default Footer;
