/* eslint-disable no-template-curly-in-string */
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import React, { Component } from "react";
import "./App.css";
import Board from "./Board.js";
//component นี้ return หน้า webpage
class App extends Component {
  render() {
    return (
      <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonTitle>SUDOKU</IonTitle>
          </IonToolbar>
        </IonHeader>
        <div className="App">
          <Board></Board>
        </div>
      </IonPage>
    );
  }
}

export default App;
