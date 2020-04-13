import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Homestay from './components/homestay';

class App extends Component {
  render() {
    const homestay = {
      "nama": "Dago Homestay",
      "fotoUrl": "https://www.pegipegi.com/travel/wp-content/uploads/2016/08/Dago-Guest-House-Kampung-Padi-1024x717.jpg",
      "harga": 500
    };
    
    return (
      <div className='app'>
        <div className="main">
          <div className="homestays">
            <Homestay homestay={homestay} />
            <Homestay homestay={homestay} />
            <Homestay homestay={homestay} />
          </div>
        </div>
        <div className="peta">

        </div>
      </div>
    ); 
  }
}

export default App;
