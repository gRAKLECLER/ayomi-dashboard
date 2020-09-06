import React from 'react'
import Header from '../components/Header'
import '../style/Document.css'


export default class Calendar extends React.Component {
  render() {
    return (
      <div className="Document">
        <Header/>
        <section className="Document__container">
          <div className="Document__title">
            <h1>Espace Document</h1>
            <hr/>
          </div>
          <div className="Document__createrFile">
            <h5 className="Document__mainTitle">Document</h5>
            <div className="Document__firstContent">
              <div className="Document__chooseFile">
                <p>Document</p>
                <select name="file" className="Document__selector">
                  <option value="public">public</option>
                  <option value="Private">privée</option>
                </select>
              </div>
              <div className="Document__search">
                <label className="Document__label" htmlFor="searc">Rechercher</label>
                <input className="Document__input" type="text"/>
              </div>
              <div className="Document__create">
                <p className="Document__createText">Create new file</p>
              </div>
            </div>
            <div className="Document__parameters">
              <div className="Document__parameter">
                <p>Titre</p>
                <p>Description</p>
                <p>Telechargements</p>
                <p>Actions</p>
              </div>
              <hr/>
            </div>
          </div>
        </section>
      </div>
    )
  }
}