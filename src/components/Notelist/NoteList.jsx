import React, { Component } from 'react';
import NoteCard from '../NoteCard/NoteCard';
import "./styles.css"

class NoteList extends Component {
 render(){
   return(
      <ul className="notes-list">
       {Array.of("Works","Tasks","Studies").map((category) => {
         return(
           <li className="notes-list-item">
             <div>{category}</div>
             <NoteCard/>
            </li>
         )
       })}
      </ul>
   )
 } 
}

export default NoteList;