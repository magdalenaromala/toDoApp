import React, { Component } from 'react';
import './AddTask.css';
class AddTask extends Component {



  render() {
  

    return (
      <div className="form">
        <input type="text" placeholder="dodaj zadanie" />
        <input type="checkbox"  />
        <label htmlFor="important">Priorytet</label><br />
        <label htmlFor="date">Do kiedy zrobić</label>
        <input type="date"  />
        <br />
        <button onClick={this.handleClick}>Dodaj</button>
      </div>
    );
  }
}

export default AddTask;