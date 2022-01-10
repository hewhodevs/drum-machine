import React from 'react';

class DrumMachine extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    // bind any class methods here
  }

  componentDidMount() {
    // Append FreeCodeCamp tests to the DOM to see the test suite
    const script = document.createElement("script");
    script.src =
      "https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js";
    script.async = true;
    document.body.appendChild(script);
  }

  render() {
    return (
      <div className="Drum-Machine">
        <h1>Drum Machine</h1>
      </div>
    );
  }
}

export default DrumMachine;