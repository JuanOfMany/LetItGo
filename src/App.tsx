import React, { useEffect, useState } from 'react';
import CurrentThought from './components/CurrentThought';
import NavBar from './components/NavBar';
import Song from './claire_de_lune.mp3';
import CherishedThoughtsList from './components/CherishedThoughtsList';

export default function App () {
    const [thoughts, setThoughts] = useState([]);
    const [showCherished, setShowCherished] = useState(false);
    const myAudio = new Audio(Song);
    const pause = function () { myAudio.pause() };

    useEffect(() => {
        // myAudio.play();
        fetch('http://localhost:3000/thoughts')
        .then(response => response.json())
        .then((data) => setThoughts(data))
    }, []);

    return (
        <div id="App">
            <button onClick={() => setShowCherished(true)}>Explore cherished thoughts.</button>
            {showCherished ? <CherishedThoughtsList thoughts={thoughts} setShowCherished={setShowCherished} setThoughts={setThoughts}/> : null}
            <NavBar pause={pause}/>
           <div id="theBagel"></div>
           <CurrentThought id="currentThought" setThoughts={setThoughts} thoughts={thoughts}/>
        </div>
    )
}