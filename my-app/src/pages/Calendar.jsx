import React from 'react'
import '../style/Calendar.css'

import Header from '../components/Header'
import BaseCalendar from '../components/BaseCalendar'

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
        <section className="Calendar__right"></section>
      </div>
    )
  }
}