import React, { Component } from 'react'
import profile from '../assets/profile.jpg'
import '../style/BaseInviteCard.css'


class BaseInviteCard extends Component {
  render(){
    return(
      <div className="BaseInviteCard">
        <div className="BaseInviteCard__content">
          <img className="BaseInviteCard__profile" src={profile} alt=""/>
          <div className="BaseInviteCard__text">
            <h3 className="BaseInviteCard__name">
              JULIEN MARTENS
            </h3>
            <h4 className="BaseInviteCard__job">
              Directeur Artistique
            </h4>
          </div>
        </div>
      </div>
    )
  }

}

export default BaseInviteCard