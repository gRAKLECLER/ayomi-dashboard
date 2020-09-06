import React, {Component} from 'react';
import '../style/Up.css'
import arrowDown from '../assets/arrowDown.svg'
import {Link} from "react-router-dom";



class Up extends Component {
  render() {
    return(
      <Link to="/Calendar">
        <div className="Up">
          <h4 className="Up__name">Julien Martens</h4>
          <p className="Up__descriptif">RENDEZ-VOUS D'AFFAIRE</p>
          <img src={arrowDown} alt=""/>
        </div>
      </Link>
    )
  }
}
export default Up;
