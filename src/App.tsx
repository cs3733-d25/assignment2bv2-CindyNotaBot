
import { useState } from 'react'
import './App.css'

/*import React from 'react';*/
import ReactDOM from 'react-dom/client';
import Title from './title.tsx';
import Intro from './intro';

const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(<Title />);

const introduction = ReactDOM.createRoot(document.getElementById('introduction')!);
root.render(<Intro />);


function App() {

    return (
        <div> className = "Web-container"
            <Title/>
            <Intro Cindy="Cindy" Tran=" Tran's paragraph"/>
        </div>

    );
}

export default App
