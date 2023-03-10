import React, { useState, useEffect } from 'react'
import { DATA } from "./Data"
import './App.css'
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';

function App() {
  const [url, setUrl] = useState(null)
  const [name, setName] = useState(null)
  const changeUrl = (url, name) => {
    setUrl(url);
    setName(name);
    console.log(url);
  }

  return (
    <div>
      <div className="header"> 📻 Radio Station </div>
      {/* <div>Hangi İstasyon Çalıyor ? {name}</div> */}
      <div className="App">
        {DATA.map((item, index) => {
          return (
            <a onClick={() => setUrl(item.url)} key={index} className="radio-station" >
              {/* <span></span></br> */}
              <img src={item.image} alt={item.name} title={item.id + " " + item.name} />
            </a>
          )
        })}
      </div>
      <div className="playerfooter">
        <div>Hangi İstasyon Çalıyor ? {url}</div>
        <div className="player">
          <AudioPlayer
            autoPlay
            src={url}
            // showSkipControls={true}
            onPlay={e => console.log("onPlay")}
          // other props here
          />
        </div>
      </div>


    </div >
  )
}

export default App
