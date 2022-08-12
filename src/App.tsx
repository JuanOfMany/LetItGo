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
        myAudio.play();
        fetch('http://172.31.29.117:3000/thoughts')
        .then(response => response.json())
        .then((data) => setThoughts(data))

    }, []);

    return (
        <div id="App">

            {showCherished ? <CherishedThoughtsList thoughts={thoughts} setShowCherished={setShowCherished} setThoughts={setThoughts}/> : null}

           { <div id="theBagel">
           <img id='bagel-img' src='https://res.cloudinary.com/juannncodes/image/upload/v1660091449/everythingbagel_xvakm1.png'></img>
           </div>}

           <h1>Look Into The Bagel...</h1>
           <CurrentThought id="currentThought" setThoughts={setThoughts} thoughts={thoughts}/>
           <button onClick={() => setShowCherished(true)}>Explore cherished thoughts.</button>

           <NavBar pause={pause}/>
        </div>
    )
}