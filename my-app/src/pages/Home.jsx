import React from 'react';
import '../style/Home.css'
import eye from '../assets/eye.svg'
import doc from '../assets/doc.svg'
import profile from '../assets/profile.jpg'
import more from '../assets/more.jpg'
import chatIcon from '../assets/chatIcon.svg'

import Header from '../components/Header'
import Upcoming from '../components/Upcoming'


export default class Home extends React.Component {
  render(){
    return(
      <div className="Home">
        <Header/>
        <section className="Home__left">
          <div className="Home__Title">
            <h1 className="Home__mainTitle">Accueil</h1>
            <hr/>
            <h2 className="Home__underTitle">Hi, patrick welcome back</h2>
          </div>
          <div className="Home__actuality">
            <h3 className="Home__H3 actuality">ACTUALITES</h3>
          </div>
          <div className="Home__document">
            <div className="Home__titleDoc">
              <h3 className="Home__H3 document">DOCUMENTS</h3>
              <img className="Home__eyeIcon" src={eye} alt="oeil"/>
            </div>
            <div className="Home__docSection">
              <img className="Home__files" src={doc} alt="document"/>
              <img className="Home__files" src={doc} alt="document"/>
              <img className="Home__files" src={doc} alt="document"/>
              <img className="Home__files" src={doc} alt="document"/>
              <img className="Home__files" src={doc} alt="document"/>
              <img className="Home__files" src={doc} alt="document"/>
              <img className="Home__files" src={doc} alt="document"/>
              <img className="Home__files" src={doc} alt="document"/>
              <img className="Home__files" src={doc} alt="document"/>
            </div>
          </div>
        </section>
        <section className="Home__right">
          <div className="Home__profile">
            <img className="Home__pic" src={profile} alt="profile"/>
            <div className="Home__profileText">
              <h3 className="Home__H3">STYLUS</h3>
              <p className="Home__text">LE CHANGEMENT DE L’air du digital dans vos maison</p>
            </div>
          </div>
          <div className="Home__event">
            <div className="Home__eventText">
              <div className="Home__eventTitle">
                <h3 className="Home__H3">EVENEMENTS A VENIR</h3>
                <span className="Home__numEvent">3</span>
              </div>
              <img src={eye} alt="oeil"/>
            </div>
            <div className="Home__eventUp">
              <Upcoming/>
              <Upcoming/>
              <Upcoming/>
            </div>
            <div className="Home__LastDiv">
              <img className="Home__more" src={more} alt="en savoir plus"/>
              <img src={chatIcon} alt="text message"/>
            </div>
          </div>
        </section>
      </div>
    );
  }
}