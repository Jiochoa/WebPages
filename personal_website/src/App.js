import React from 'react';
import './App.css';
import Content from './components/Content/Content';
import Postamble from './components/Postamble/Postamble';

function App() {
    return ( 
        <div className="App"> 
            <Content />
            
            <Postamble />
        </div>
    );
}

export default App;
