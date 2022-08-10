import React, { useEffect, useState } from 'react';
import CurrentThought from './components/CurrentThought';
import NavBar from './components/NavBar';
import Song from './claire_de_lune.mp3';
import './main.css';

export default function App () {
    const myAudio = new Audio(Song);
    const pause = function () { myAudio.pause() };

    useEffect(() => {
        // myAudio.play();
    });

    return (
        <div id="App">
            <NavBar pause={pause}/>
           Hello, this is {process.env.name} app
           <div id="theBagel"></div>
           <CurrentThought id="currentThought"/>
        </div>
    )
}