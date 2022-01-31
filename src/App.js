import React from "react";
import Card from "./components/Card.js";
import image2 from "./img/2.jpg";
import "./App.css";

  
function App() {
  return (
    <div className="app">
      <Card name="Marek" surname="Kowalski" image="../img/2.jpg" bronze="3" silver="6" gold="1"></Card>
    </div>
  );
}

export default App;
