import React, { Component } from 'react';
import axios from "axios";
import './SmurfForm.css';

class SmurfForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      age: '',
      height: ''
    };
  }






  addSmurf = ev => {
    ev.preventDefault();
    // add code to create the smurf using the api
    let newSmurf = {
      name: this.state.name,
      age: this.state.age,
      height: this.state.height,
    }
    
    axios
    .post("http://localhost:3333/smurfs", newSmurf)
    .then(res => {
      this.props.addSmurfs(res.data)
      this.props.history.push('/'); 
    })
    .catch(error => console.log(error));
    this.setState({
      name: '',
      age: '',
      height: ''
    });
  }

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <div className="smurf-form">
        <h1>NEW SMURF</h1>
        <form onSubmit={this.addSmurf}>
          <input
            onChange={this.handleInputChange}
            placeholder="name"
            value={this.state.name}
            name="name"
            required
          />
          <input
            onChange={this.handleInputChange}
            placeholder="age"
            value={this.state.age}
            name="age"
            type='number'
            required
          />
          <input
            onChange={this.handleInputChange}
            placeholder="height"
            value={this.state.height}
            name="height"
            required
          />
          <button onClick={this.addSmurf} type="submit">Add to the village</button>
        </form>
      </div>
    );
  }
}

export default SmurfForm;