import React from 'react';
import './App.css';

import ChatComp from "./components/ChatComp/ChatComp";

function App() {
  const data = [{from: 'a', to: 'a0'}, {from: 'b', to: 'b+'}, {from: 'c', to: 'c+'}, {from: 'd', to: 'd+'}];
  return (
    <div className="main">
      <ChatComp data={data}/>
    </div>
  );
}

export default App;
