import React from 'react';
import ReactDOM from 'react-dom';
import Giphy from './components/Giphy'
import "./App.css"

function App() {
  return (
   <div> <header class="jumbotron">
        
                <div>
                    <h1 style={{backgroundColor:"grey",width:"100%", height:"100px",fontFamily:"American Typewriter,san-serif",textAlign:"Center",paddingTop:"25px",color:"white"}}>Welcome! to GIFTown.</h1>
                    <p style={{fontFamily:"Courier",fontSize:"30px",color:"plum"}}>Search for GIFs you like and use them anywhere!!</p>
                </div>
        
    </header>
    <div className="App"><Giphy />
    </div>
    </div>
  );
}

export default App;
