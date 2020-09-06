import React from 'react';
import '../style/Header.css'
import homeLogo from '../assets/home.svg'
import calendarLogo from '../assets/calendar.svg'
import documentLogo from '../assets/document.svg'
import chatLogo from '../assets/chat.svg'
import Profile from '../assets/profile.jpg'

import {Link} from "react-router-dom";

export default class Header extends React.Component {
  render(){
    return(
      <div className="Header">
        <Link to="/">
          <h1 className="Header__title">AYOMI</h1>
        </Link>
        <ul className="Header__nav">
            <div className="Header__links">
          <Link to="/">
              <img className="logo" src={homeLogo} alt=""/>
              <li className="Header__link">ACCUEIL</li>
          </Link>
            </div>
          <Link to="/Calendar">
            <div className="Header__links">
              <img className="logo" src={calendarLogo} alt=""/>
              <li className="Header__link">CALENDRIER</li>
            </div>
          </Link>
            <div className="Header__links">
          <Link to="Document">
              <img className="logo" src={documentLogo} alt=""/>
              <li className="Header__link">ESPACE DOCUMENT</li>
          </Link>
            </div>
          <div className="Header__links">
          <Link to="Chat">
              <img className="logo" src={chatLogo} alt=""/>
              <li className="Header__link">CHAT</li>
          </Link>
          </div>
        </ul>
        <div className="Header__profile">
          <img className="Header__picture" src={Profile} alt=""/>
        </div>
      </div>
    );
  }
}