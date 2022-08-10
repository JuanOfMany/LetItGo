import React from 'react';
import CurrentThought from './components/CurrentThought';

export default function App () {
    return (
        <div id="App">
           Hello, this is {process.env.name} app
           <div id="theBagel"></div>
           <CurrentThought />
        </div>
    )
}