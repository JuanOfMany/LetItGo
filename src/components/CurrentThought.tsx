import react, { useState } from 'react';

export default function CurrentThought (props: any) {
  const [thoughtText, setThoughtText] = useState('');
  const [display, setDisplay] = useState(true);

  const hide = () => {
    setDisplay(false)
}

  return (
    <div id="currentThought">
      { display ? <input type="text" onChange={(e) => setThoughtText(e.target.value)}/> : null}
      <button style={{display:"block"}}onClick={(e) => hide()}>Let this thought go.</button>
    </div>

  )
}