import React, { Component } from 'react';

class Bene extends React.Component {
  constructor() {
    super();
    this.state = {
      name: '',
      benestudio: [{ name: '' }],
    };
  }
  handleBenestudioNameChange = (idx) => (evt) => {
    const newBenestudio = this.state.benestudio.map((benestudio, sidx) => {
      if (idx !== sidx) return benestudio;
      return { ...benestudio, name: evt.target.value };
    });
    this.setState({ benestudio: newBenestudio });
  }

  handleSubmit = (evt) => {
    const { name, benestudio } = this.state;
    alert(`You Have Canceld: ${name}  with ${benestudio.length} benestudio Developers`);
  }
  handleAddBenestudio = () => {
    this.setState({ benestudio: this.state.benestudio.concat([{ name: '' }]) });
  }
  handleRemoveBenestudio = (idx) => () => {
    this.setState({ benestudio: this.state.benestudio.filter((s, sidx) => idx !== sidx) });
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h4>Test</h4>
        {this.state.benestudio.map((benestudio, idx) => (
          <div className="benestudio">
            <input
              type="text"
               placeholder={`write ${idx + 1} `}
              value={benestudio.name}
              onChange={this.handleBenestudioNameChange(idx)}
            />
            <button type="button" onClick={this.handleRemoveBenestudio(idx)} className="small">X</button>
          </div>
        ))}
        <button type="button" onClick={this.handleAddBenestudio} className="small">Save</button>
        <button>Cancel</button>
      </form>
    )
  }
}
export default Bene;