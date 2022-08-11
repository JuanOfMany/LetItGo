import React, { useState } from 'react'
import axios from 'axios';
axios.defaults.baseURL = 'http://localhost:3000';

type thoughtType = {
  text: string
}

export default function CherishedThought({ thought, setThoughts, thoughts }) {
  const [inEditMode, setInEditMode] = useState(false)
  const [newText, setNewText] = useState('')

  const config = {
    method: 'get',
    url: '/thoughts'
}

  const deleteThought = async function () {
    return await fetch('http://localhost:3000/thoughts', {
      method: 'DELETE',
      credentials: 'same-origin', // include, *same-origin, omit
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ id: thought._id }),
    })
    .then(() => axios(config)
    .then(function (response) {
      setThoughts(response.data)
    })
  )
  }

  const editThought = async function () {
    return await fetch('http://localhost:3000/thoughts', {
      method: 'PUT',
      credentials: 'same-origin', // include, *same-origin, omit
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ id: thought._id, text: newText })
    })
      .then(() => axios(config)
        .then(function (response) {
          setThoughts(response.data)
        })
      )
      .then(() => {
        setInEditMode(false)
      })
  }

  return (
    <div className="thought">
      <button className="delete-thought" onClick={() => deleteThought()}>
        X
      </button>
      {inEditMode ? (
        <button className="edit-thought" onClick={() => editThought()}>
          Edit Thought
        </button>
      ) : (
        <button
          className="edit-thought"
          onClick={() => setInEditMode(!inEditMode)}
        >
          Edit Thought
        </button>
      )}

      {inEditMode ? (
        <input onChange={(e) => setNewText(e.target.value)} type="text" />
      ) : (
        thought.text
      )}
    </div>
  )
}
