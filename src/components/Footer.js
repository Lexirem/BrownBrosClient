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
                    <div className="navbar-button">
                        <Link to={""}><img src="" alt=""/></Link>
                        <Link to={""}><img src="" alt=""/></Link>
                        <Link to={""}><img src="" alt=""/></Link>
                    </div>
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
