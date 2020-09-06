import React from 'react';
import '../style/Header.css'
import homeLogo from '../assets/home.svg'
import calendarLogo from '../assets/calendar.svg'
import documentLogo from '../assets/document.svg'
import chatLogo from '../assets/chat.svg'

export default class Header extends React.Component {
  render(){
    return(
      <div className="Header">
        <h1 className="Header__title">AYOMI</h1>
        <ul className="Header__nav">
          <div className="Header__links">
            <img className="logo" src={homeLogo} alt=""/>
            <li className="Header__link">ACCUEIL</li>
          </div>
          <div className="Header__links">
            <img className="logo" src={calendarLogo} alt=""/>
            <li className="Header__link">CALENDRIER</li>
          </div>
          <div className="Header__links">
            <img className="logo" src={documentLogo} alt=""/>
            <li className="Header__link">ESPACE DOCUMENT</li>
          </div>
          <div className="Header__links">
            <img className="logo" src={chatLogo} alt=""/>
            <li className="Header__link">CHAT</li>
          </div>
        </ul>
      </div>
    );
  }
}