import React, { Component } from "react";

import "./styles.css"

class SubscribeForm extends Component {
  render() {
    return(
       <form className="subscribe-form">
        <input 
          type="text" 
          placeholder="title"
          className="subscribe-form-input"
        />
        <textarea 
          row={15} 
          placeholder="Escreva sua nota" 
          className="subscribe-form-input" 
        />
        <button className="subscribe-form-input subscribe-form-submit">Criar Nota</button>
      </form>
    )
  }
}

export default SubscribeForm;