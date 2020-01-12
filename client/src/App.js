import React from 'react';
import './App.css';
import Customers from './components/customers/customers';
function App() {
  
  return (
    <div className="App">
     
      <header className="App-header">
      <img src="https://media.licdn.com/dms/image/C4D1BAQGUGx2oe5ZcBg/company-background_10000/0?e=1578402000&v=beta&t=nqtwXIsFcs6iJFXF5wm0azk-8E4W36cU4JfHfuowkGg" alt="EquityBee"/>
      
      
      </header>
      <Customers />
    </div>
  );
}

export default App;
