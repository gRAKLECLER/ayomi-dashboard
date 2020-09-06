import React, { Component } from 'react'
import '../style/CardEvent.css'
import pencil from '../assets/pencil.svg'


class CardEvent extends Component {
  render(){
    return(
      <div className="CardEvent">
        <div className="CardEvent__name">
          <h3 className="CardEvent__mainName">Julien Martens</h3>
          <h4 className="CardEvent__secondName">RENDEZ-VOUS D'AFFAIRE</h4>
        </div>
        <div className="CardEvent__firstText">
          <div className="CardEvent__hour">
            <h4 className="CardEvent__title">HEUR</h4>
            <h4 className="CardEvent__subtitle">18:00</h4>
          </div>
          <div className="CardEvent__place">
            <h4 className="CardEvent__title">LIEU</h4>
            <h4 className="CardEvent__subtitle">30 avenue charles de gaulle </h4>
          </div>
        </div>
        <div className="CardEvent__secondText">
          <div className="CardEvent__description">
            <h4  className="CardEvent__title">DESCRIPTIF SUPPLEMENTAIRES</h4>
            <h4 className="CardEvent__subtitle">Reunion avec l’equipe de acadomia</h4>
          </div>
          <div className="CardEvent__pencil">
            <img className="pencil" src={pencil} alt=""/>
          </div>
        </div>
      </div>
    )
  }
}

export default CardEvent