import React, { Component } from 'react'
import '../style/BaseChat.css'



class BaseChat extends Component {
  constructor(props){
    super(props);

    this.state={
      newItem:"",
      list:[]
    }
  }

  updateInput(key, value){
    this.setState({
      [key]: value
    });
  }

  addItem(){
    //create item with unique id
    const newItem = {
      id: 1 + Math.random(),
      value: this.state.newItem.slice(),
    };
    //copy of current list of items
    const list = [...this.state.list];
    //add new item to list
    list.push(newItem)

    //update state with new list and rest new item input
    this.setState({
      list,
      newItem:""
    });
  }

  render(){
    return(
      <div className="BaseChat">
        <div className="BaseChat__sendMessage">
          <br/>
          <ul className="BaseChat__container">
            {this.state.list.map(item => {
              return(
                <li className="BaseChat__message" key={item.id}>
                  {item.value}
                </li>
              )
            })}
          </ul>
          <input
          className="BaseChat__input"
          type="text"
          placeholder="Ecris ton message"
          value={this.state.newItem}
          onChange={e => this.updateInput("newItem",e.target.value)}
          />
          <button className="BaseChat__button" onClick={() => this.addItem()}>envoyer</button>
          <br/>
        </div>
      </div>
    )
  }
}

export default BaseChat