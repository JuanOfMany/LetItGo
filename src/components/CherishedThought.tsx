import React, { useState } from 'react'

type thoughtType = {
  text: string
}

export default function CherishedThought({ thought, setThoughts, thoughts }) {
  const [inEditMode, setInEditMode] = useState(false)
  const [newText, setNewText] = useState('')

  const deleteThought = function () {
    fetch('http://localhost:3000/thoughts', {
      method: 'DELETE',
      credentials: 'same-origin', // include, *same-origin, omit
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ id: thought._id }),
    }).then(
      fetch('http://localhost:3000/thoughts')
        .then((response) => response.json())
        .then((data) => {
          console.log(data)
          setThoughts(data)
        })
    )
  }

  const editThought = function () {
    fetch('http://localhost:3000/thoughts', {
      method: 'PUT',
      credentials: 'same-origin', // include, *same-origin, omit
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ id: thought._id, text: newText }),
    })
      .then(
        fetch('http://localhost:3000/thoughts')
          .then((response) => response.json())
          .then((data) => {
            console.log(data)
            setThoughts(data)
          })
      )
      .then(() => setInEditMode(false))
      .then(() => console.log(thoughts))
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
