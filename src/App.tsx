
import { useState } from 'react'
import './App.css'

/*import React from 'react';*/
import ReactDOM from 'react-dom/client';
import Title from './title.tsx';
import Intro from './intro';
import Hobby2 from "./hobby2.tsx";


/*
const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(<Title />);

const introduction = ReactDOM.createRoot(document.getElementById('introduction')!);
root.render(<Intro />);
*/

function App() {

    return (
        <div className = "web-container">
            <Title/>
            <Intro Cindy="Cindy" Tran=" Tran's paragraph"/>
            <Hobby2 />

        </div>

    );
}

export default App
