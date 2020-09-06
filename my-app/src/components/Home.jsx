import React from 'react';
import '../style/Home.css'
import eye from '../assets/eye.svg'
import doc from '../assets/doc.svg'
import profile from '../assets/profile.jpg'
import more from '../assets/more.jpg'

import Header from './Header'
import Up from './Upcoming'


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
            <h3 className="Home__H3">ACTUALITES</h3>
          </div>
          <div className="Home__document">
            <div className="Home__titleDoc">
              <h3 className="Home__H3">DOCUMENTS</h3>
              <img src={eye} alt=""/>
            </div>
            <div className="Home__docSection">
              <img className="Home__files" src={doc} alt=""/>
              <img className="Home__files" src={doc} alt=""/>
              <img className="Home__files" src={doc} alt=""/>
              <img className="Home__files" src={doc} alt=""/>
              <img className="Home__files" src={doc} alt=""/>
              <img className="Home__files" src={doc} alt=""/>
              <img className="Home__files" src={doc} alt=""/>
              <img className="Home__files" src={doc} alt=""/>
              <img className="Home__files" src={doc} alt=""/>
            </div>
          </div>
        </section>
        <section className="Home__right">
          <div className="Home__profile">
            <img className="Home__pic" src={profile} alt=""/>
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
              <img src={eye} alt=""/>
            </div>
            <div>
              <Up/>
            </div>
            <img className="Home__more" src={more} alt=""/>
          </div>
        </section>
      </div>
    );
  }
}