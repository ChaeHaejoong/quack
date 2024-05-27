import React from "react";
import './Nav.css';
import '../index.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping, faUser} from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";

function Nav() {
  return(
    <div className="nav-container pad-LR">
      <div className="nav-left">
        <div className="nav-item logo"><Link to="/">
          <img src="images/icons/오리가 꽥꽥.png" className="logo-img" /> QUACK
        </Link></div>
        <div className="nav-item"><Link to="/about">ABOUT</Link></div>
        <div className="nav-item">SHOP</div>
        <div className="nav-item"><Link to={"/community"}>COMMUNITY</Link></div>
      </div>
      <div className="nav-right">
        <div className="nav-item login"><FontAwesomeIcon icon={faUser} /> 로그인</div>
        <div className="nav-item cart"><FontAwesomeIcon icon={faCartShopping} /> 장바구니</div>
      </div>
    </div>
  )
}


export default Nav;