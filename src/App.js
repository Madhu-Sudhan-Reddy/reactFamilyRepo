import logo from './Soccerball.svg';
import {useState} from 'react';
import './App.css';

function App() {
  const [index,setIndex]=useState(0);
  const matter=[["Chiarnjeevi","Ram Charan","Klin Kaara"],["Allu Ramalingaiah","Allu Aravind","Allu Arjun", "Allu Ayaan"],["Sr. NTR","Hari Krishna","Jr. NTR","Abhay", "Bhargav"]];
  return (
    <div className="App">
      <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" /> 
      <div>
       <h1 className="heading">Family Tree</h1>
       <p className="description">This is the family tree of three popular families.</p>
      </div>
        </header>
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        
        <div id="tabs">
        <menu>
          <button className={index===0?"active":""} onClick={()=>setIndex(0)}>
            Mega
          </button>
          <button className={index===1?"active":""} onClick={()=>setIndex(1)}>
            Allu
          </button>
          <button className={index===2?"active":""} onClick={()=>setIndex(2)}>
            NTR
          </button>
          </menu>
       
        <div id="tab-content">
        <ul>
          {matter[index].map((item)=>(
            <li key={item}>{item}</li>
          )

          )
          }
        </ul>
        </div>
        </div>
      
    </div>
  );
}

export default App;
