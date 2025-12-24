import React from 'react'

function Progress({index ,answer ,numQuestion,points,maxPossiblePoint}) {
  return (
    <div>
      <header>
        <progress max={numQuestion} value={index+
          Number(answer!==null) }/>
        <p> Question <strong>{index+1}</strong>/ {numQuestion}</p>
            <p><strong>{points}/{maxPossiblePoint}</strong></p>
      </header>
    </div>
  )
}

export default Progress
