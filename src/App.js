import React, { Component } from "react";
import NoteList from "./components/NoteList/";
import SubscribeForm from "./components/SubscribeForm";
import "./assets/App.css";
import "./assets/index.css";
class App extends Component {
  render() {
    return (
      <section className="conteudo">
        <SubscribeForm />
        <NoteList />
      </section>
    );
  }
}

export default App;
