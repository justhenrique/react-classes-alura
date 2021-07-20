import React, { Component } from 'react'
import "./styles.css"

class NoteCard extends Component {
  state = {  }
  render() { 
    return (
      <section className="note-card">
        <header className="note-card-header">
          <h3 className="note-card-title">
            Title
          </h3>
          <p className="note-card-text">Write a note</p>
        </header>
      </section>
    );
  }
}
 
export default NoteCard;