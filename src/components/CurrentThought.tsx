import react, { useState } from 'react'
import axios from 'axios'
axios.defaults.baseURL = 'http://localhost:3000'

export default function CurrentThought({ setThoughts, thoughts }) {
  const [fadeThought, setFadeThought] = useState({
    fade: 'fade-in',
  })
  const [thoughtText, setThoughtText] = useState('')

  const config = {
    method: 'get',
    url: '/thoughts',
  }

  const handleLetGoClick = function () {
    setFadeThought({ fade: 'fade-out' })
    setTimeout(() => {
      setThoughtText('')
      setFadeThought({ fade: 'fade-in' })
    }, 2000)
  }

  const cherishThought = function () {
    fetch('http://localhost:3000/thoughts', {
      method: 'POST',
      credentials: 'same-origin', // include, *same-origin, omit
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ text: thoughtText, name: 'Juan' }),
    })
      .then(() =>
        axios(config).then(function (response) {
          setThoughts(response.data)
        })
      )
      .then(() => handleLetGoClick())
  }

  return (
    <div id="currentThought">
      <input
        className={fadeThought.fade}
        type="text"
        value={thoughtText}
        placeholder="What are you thinking right now?"
        onChange={(e) => setThoughtText(e.target.value)}
      />
      <button onClick={handleLetGoClick}>Let this thought go.</button>
      <button onClick={cherishThought}>Cherish it.</button>
    </div>
  )
}

function getElementById(arg0: string) {
  throw new Error('Function not implemented.')
}
