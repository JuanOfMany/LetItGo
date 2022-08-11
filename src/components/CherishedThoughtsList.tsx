import React, { useState } from 'react'
import CherishedThought from './CherishedThought'

export default function CherishedThoughtsList({ thoughts, setShowCherished, setThoughts }) {
  let thoughtList = thoughts.map((thought) => (
    <CherishedThought thought={thought} key={thought._id} setThoughts={setThoughts} thoughts={thoughts}/>
  ))
  return (
    <div className="cherished-container">
      <button onClick={() => setThoughts([])}>EMPTY THOUGHTS</button>
      <button onClick={() => setShowCherished(false)}>Add a Thought</button>
      <div className="cherished-list">{thoughtList}</div>
    </div>
  )
}
