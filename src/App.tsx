import React from 'react';
import logo from './logo.svg';
import './App.css';

// Flexport 
// top left : 41.88861774976357, -87.65091409316182
// bottom left : 41.88585573608352, -87.65039592433256
// top right
// bottom right

// Climb 

// Home

function LocationEmoji(props:
  { emoji: string, isCurrentLocation?: boolean}){

  return (
    
    <div style={{fontSize: "140px", textAlign: "center"}}>
      {props.emoji}
      {props.isCurrentLocation && <div style = {{ textAlign: "center", fontSize:"140px"}}>🚶‍♂</div>}
    </div>
  )

}

function App() {

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(success, error);
  } else {
    console.log("Geolocation not supported");
  }
  
  function success(position: any) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    console.log(`Latitude: ${latitude}, Longitude: ${longitude}`);
  }
  
  function error() {
    console.log("Unable to retrieve your location");
  }


  return (
    <div className="App">
      <header className="App-header">
        <div style={{display: "grid", gridTemplateColumns:"repeat(3, 1fr)", gap: "50px"}}>
          <LocationEmoji emoji="🧗"/>
          <LocationEmoji emoji="🏢"/>
          <LocationEmoji emoji="🏡"/>
        </div>
      </header>
    </div>
  );
}

export default App;
