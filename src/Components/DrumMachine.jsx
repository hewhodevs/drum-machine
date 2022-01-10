import React from "react";

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
          <button id="heater 1" className="drum-pad">
            Q{" "}
            <audio
              className="clip"
              id="Q"
              src="https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"
            ></audio>
          </button>
          <button id="heater 2" className="drum-pad">
            W
            <audio
              className="clip"
              id="W"
              src="https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3"
            ></audio>
          </button>
          <button id="heater 3" className="drum-pad">
            E
            <audio
              className="clip"
              id="E"
              src="https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3"
            ></audio>
          </button>
          <button id="heater 4" className="drum-pad">
            A
            <audio
              className="clip"
              id="A"
              src="https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3"
            ></audio>
          </button>
          <button id="clap" className="drum-pad">
            S
            <audio
              className="clip"
              id="S"
              src="https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3"
            ></audio>
          </button>
          <button id="open HH" className="drum-pad">
            D
            <audio
              className="clip"
              id="D"
              src="https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3"
            ></audio>
          </button>
          <button id="kick n hat" className="drum-pad">
            Z
            <audio
              className="clip"
              id="Z"
              src="https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3"
            ></audio>
          </button>
          <button id="kick" className="drum-pad">
            X
            <audio
              className="clip"
              id="X"
              src="https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3"
            ></audio>
          </button>
          <button id="closed HH" className="drum-pad">
            C
            <audio
              className="clip"
              id="C"
              src="https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3"
            ></audio>
          </button>
        </div>
      </div>
    );
  }
}

export default DrumMachine;
