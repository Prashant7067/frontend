import React from "react";
import "./Footer.css";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { Link } from "react-router-dom";

function Footer() {  
  return (
    <div className="footer">
        <div className="container">
            <div className="row">
                {/* Column1 */}
                <div className="col">
                    <h4>Get to Know Us</h4>
                    <ul className="list-unstyled">
                        <li>About Us</li>
                        <li>Careers</li>
                        <li>Press Releases</li>
                        <li>Amazon Cares</li>
                        <li>Gift a Smile</li>
                    </ul>
                </div>
                {/* column2 */}
                <div className="col">
                    <h4>Connect with Us</h4>
                    <ul className="list-unstyled">
                        <li>Facebook</li>
                        <li>Twitter</li>
                        <li>Instagram</li>
                    </ul>
                </div>
                {/* column3 */}
                <div className="col">
                    <h4>Make Money with Us</h4>
                    <ul className="list-unstyled">
                        <li>Sell on Amazon</li>
                        <li>Sell under Amazon Acclerator</li>
                        <li>Amazon Global Selling</li>
                        <li>Become an Affiliate</li>
                        <li>Fulfilmet by Amazon</li>
                        <li>Advertise Your Product</li>
                        <li>Amazon Pay on Merchants</li>
                    </ul>
                </div>
                {/* column4 */}
                <div className="col">
                    <h4>Let Us Help You</h4>
                    <ul className="list-unstyled">
                        <li>COVID-19 and Amazon</li>
                        <li>Your Account</li>
                        <li>100% Purchase Protection</li>
                        <li>Amazon App Download</li>
                        <li>Amazon Assistant Download</li>
                        <li>Help</li>
                    </ul>
                </div>
            </div>
            <hr/>
            <img className="header__logo"
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
        />
            <div className="row">
                <p className="col-sm">
                   Australia Brazil Canada China France Germany Italy Japan Mexico Netherlands Poland Singapore Spain Turkey United Arab Emirates United Kingdom United State 
                </p>
            </div>
        </div>
      
         
        
      </div>
    
  );
}

export default Footer;