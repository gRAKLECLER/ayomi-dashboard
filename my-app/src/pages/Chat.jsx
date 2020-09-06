import React from 'react'
import Header from '../components/Header'
import BaseChat from '../components/BaseChat'
import '../style/Chat.css'
import BaseInviteCard from '../components/BaseInveCard'
import Add from '../assets/add.svg'



export default class Chat extends React.Component {
  render() {
    return (
      <div className="Chat">
        <Header/>
        <section className="Chat__left">
          <div className="Chat__Title">
            <h1 className="Chat__mainTitle">Chat</h1>
            <hr/>
          </div>
          <BaseChat/>
        </section>
        <section className="Chat__right">
          <div className="Chat__inviteTitle">
            <div>
              <h4 className="Chat__inviteMaintitle">INVITE DES PARTICIPANTS</h4>
              <h5 className="Chat__inviteSecondtitle">Connectés</h5>
            </div>
              <img className="Chat__addInvite" src={Add} alt=""/>
          </div>
          <BaseInviteCard/>
        </section>
      </div>
    )
  }
}