import React from "react";
import DrumPad from './DrumPad';

const soundKitOne = [
  {
    id: "Heater-1",
    trigger: "Q",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"
  },
  {
    id: "Heater-2",
    trigger: "W",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3"
  },
  {
    id: "Heater-3",
    trigger: "E",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3"
  },
  {
    id: "Heater-4",
    trigger: "A",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3"
  },
  {
    id: "Clap",
    trigger: "S",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3"
  },
  {
    id: "Open-HH",
    trigger: "D",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3"
  },
  {
    id: "Kick-n'-Hat",
    trigger: "Z",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3"
  },
  {
    id: "Kick",
    trigger: "X",
    url: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3"
  },
  {
    id: "Closed-HH",
    trigger: "C",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3"
  },
];

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
    const drumPadOne = soundKitOne.map(sound => {
      return <DrumPad id={sound.id} trigger={sound.trigger} url={sound.url} />
    });

    return (
      <div className="Drum-Machine">
        <h1>Drum Machine</h1>
        <div id="display">
          {drumPadOne}
        </div>
      </div>
    );
  }
}

export default DrumMachine;
