import react, { useState } from 'react'

export default function CurrentThought(props: any) {
  const [fadeThought, setFadeThought] = useState({
    fade: 'fade-in'
})
  const [thoughtText, setThoughtText] = useState('')


  const handleLetGoClick = function () {
    setFadeThought({fade:'fade-out'})
    setInterval(() => {
      setThoughtText('');
      setFadeThought({fade:'fade-in'})
    }, 2000)
  }

  return (
    <div id="currentThought">
      <input
        className={fadeThought.fade}
          type="text"
          value={thoughtText}
          onChange={(e) => setThoughtText(e.target.value)}
        />
      <button onClick={handleLetGoClick}>Let this thought go.</button>
      <button> Or save it.</button>
    </div>
  )
}

function getElementById(arg0: string) {
  throw new Error('Function not implemented.')
}
