import React from "react";
import DrumPad from './DrumPad';

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
        <div id="display">
          <DrumPad trackTitle="heater-1" text="Q" url="https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3" />
          <DrumPad trackTitle="heater-2" text="W" url="https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3" />
          <DrumPad trackTitle="heater-3" text="E" url="https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3" />
          <DrumPad trackTitle="heater-4" text="A" url="https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3" />
          <DrumPad trackTitle="clap" text="S" url="https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3" />
          <DrumPad trackTitle="Open HH" text="D" url="https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3" />
          <DrumPad trackTitle="kick n hat" text="Z" url="https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3" />
          <DrumPad trackTitle="kick" text="X" url="https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3" />
          <DrumPad trackTitle="clip" text="C" url="https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3" />
        </div>
      </div>
    );
  }
}

export default DrumMachine;
