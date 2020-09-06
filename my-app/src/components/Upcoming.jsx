import React, {Component} from 'react';
import '../style/Up.css'
import arrowDown from '../assets/arrowDown.svg'



class Up extends Component {
  render() {
    return(
      <div className="Up">
        <h4 className="Up__name">Julien Martens</h4>
        <p className="Up__descriptif">RENDEZ-VOUS D'AFFAIRE</p>
        <img src={arrowDown} alt=""/>
      </div>
    )
  }
}
export default Up;
