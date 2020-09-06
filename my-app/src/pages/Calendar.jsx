import React from 'react'
import '../style/Calendar.css'

import Header from '../components/Header'
import BaseCalendar from '../components/BaseCalendar'
import CardEvent from '../components/CardEvent'

export default class Calendar extends React.Component {
  render() {
    return (
      <div className="Calendar">
        <Header/>
        <section className="Calendar__left">
          <div className="Calendar__Title">
            <h1 className="Calendar__mainTitle">Calendrier</h1>
            <hr/>
          </div>
        <BaseCalendar/>
        </section>
        <section className="Calendar__right">
          <div className="Calendar__eventTitle">
            <h4 className="Calendar__eventMaintitle">EVENEMENTS A VENIR</h4>
            <p>-</p>
            <h4 className="Calendar__eventMaindate">11 juin 2020</h4>
          </div>
          <div className="Calendar__Cards">
            <p className="newEvent">+ add new events</p>
            <CardEvent/>
          </div>
        </section>
      </div>
    )
  }
}