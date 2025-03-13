import './App.css'
import { useState } from 'react'

function App() {

  const [color, setColor] = useState('');

  const onClick = async () => {
    let [tab] = await chrome.tabs.query({active:true});
    chrome.scripting.executeScript({
      target: {tabId: tab.id!},
      args: [color],
      func: (color) => {
          document.body.style.backgroundColor = color;
      }
  });
  }
  return (
    <>
      <h1>Background Changer </h1>
      <div className="card">
        <input type='color' onChange={(e) => setColor(e.currentTarget.value)}></input> <br></br>
        <button onClick={onClick}> Change Color </button> <br></br>
        <p> This might not work on all wesbites ! </p> <br></br>
        <h4> Created by Pawan HK</h4>
      </div>
    </>
  )
}

export default App
