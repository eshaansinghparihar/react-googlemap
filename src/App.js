import logo from './logo.svg';
import {useState,useEffect} from 'react';
import GoogleMapReact from 'google-map-react';
import Pin from './Pin';
import './App.css';

function App() {
  const [location,setLocation]=useState({lat:20.5937,lng:78.9629});
  function updateLocation(){
    const latitude=(Math.random() * 90) * (Math.round(Math.random()) ? 1 : -1)
    const longitude=(Math.random() * 180) * (Math.round(Math.random()) ? 1 : -1)
    setLocation(
    {
      lat:latitude,
      lng:longitude
    }  
    )
  }
  return (
    <div className="App">
      <header className="App-header">
      <h1>React Google Maps</h1>
      <div className="google-map">
      <GoogleMapReact
      bootstrapURLKeys={{ key: 'your-key' }}
      layerTypes={['TrafficLayer', 'TransitLayer']}
      center={location}
      defaultZoom={6}
      >
      <Pin
      lat={location.lat}
      lng={location.lng}
      />
      </GoogleMapReact>
      </div>
      <button
      className="btn"
      onClick={updateLocation}
      >Generate Random Location</button>
      </header>
    </div>
  );
}

export default App;
