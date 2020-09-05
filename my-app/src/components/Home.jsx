import React from 'react';
import '../style/Home.css'
import eye from '../assets/eye.svg'
import doc from '../assets/doc.svg'

import Header from './Header'


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
            <h3>ACTUALITES</h3>
          </div>
          <div className="Home__document">
            <div className="Home__titleDoc">
              <h3>DOCUMENTS</h3>
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
      </div>
    );
  }
}