import React, { Component } from 'react'
import '../style/BaseCalendar.css'


class BaseCalendar extends Component {
  render(){
    return(
      <div className="BaseCalendar">
        <h1 className="BaseCalendar__title">Juin 2020</h1>
        <div className="BaseCalendar__calendar">
          <div className="day">
            <p>Lun</p>
            <p>Mar</p>
            <p>Mer</p>
            <p>Jeu</p>
            <p>Ven</p>
            <p>Sam</p>
            <p>Dim</p>
          </div>
          <div className="numbers">
            <div className="numbers__number">1</div>
            <div className="numbers__number">2</div>
            <div className="numbers__number">3</div>
            <div className="numbers__number">4</div>
            <div className="numbers__number">5</div>
            <div className="numbers__number">6</div>
            <div className="numbers__number">7</div>
            <div className="numbers__number">8</div>
            <div className="numbers__number">9</div>
            <div className="numbers__number">10</div>
            <div className="numbers__number event">11</div>
            <div className="numbers__number">12</div>
            <div className="numbers__number">13</div>
            <div className="numbers__number">14</div>
            <div className="numbers__number">15</div>
            <div className="numbers__number">16</div>
            <div className="numbers__number">17</div>
            <div className="numbers__number">18</div>
            <div className="numbers__number">19</div>
            <div className="numbers__number">20</div>
            <div className="numbers__number">21</div>
            <div className="numbers__number">22</div>
            <div className="numbers__number">23</div>
            <div className="numbers__number">24</div>
            <div className="numbers__number">25</div>
            <div className="numbers__number">26</div>
            <div className="numbers__number">27</div>
            <div className="numbers__number">28</div>
            <div className="numbers__number">29</div>
            <div className="numbers__number">30</div>
          </div>
        </div>
      </div>
    )
  }
}

export default BaseCalendar
