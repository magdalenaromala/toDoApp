import React from 'react';

const Task = (props) => {

  const style = {
    color: 'red',
  }

 
    return (
      <div>

        <p>
          <strong>{props.task.text}</strong><em> (zrobić do {props.task.date})</em><br />

          <button onClick={()=>props.change(props.task.id)}>Zostało zrobione</button>

          <button onClick={() => props.delete(props.task.id)}>X</button>
        </p>
      </div>
    )
  }


export default Task;