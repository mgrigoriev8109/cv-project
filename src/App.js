import React, { Component } from 'react';
import SubmittedCV from './components/SubmittedCV.js';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {}

    this.handleEdit = this.handleEdit.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    // do stuff with submit button
  }

  handleEdit(event) {
    // do stuff with edit button
  }

  render() {
    return (
      <div>

        <form onSubmit={this.handleSubmit}>
          <label>
            Name <input name="name" type="text" />
          </label>

          <input type="submit" value="Submit" />
        </form>

        <SubmittedCV data={this.state.data} />
      </div>
    );
  }
}

export default App;