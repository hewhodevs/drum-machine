import React from "react";
import DrumPad from './DrumPad';

const soundKitOne = [
  {
    id: "Heater-1",
    keyTrigger: "Q",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"
  },
  {
    id: "Heater-2",
    keyTrigger: "W",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3"
  },
  {
    id: "Heater-3",
    keyTrigger: "E",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3"
  },
  {
    id: "Heater-4",
    keyTrigger: "A",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3"
  },
  {
    id: "Clap",
    keyTrigger: "S",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3"
  },
  {
    id: "Open-HH",
    keyTrigger: "D",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3"
  },
  {
    id: "Kick-n'-Hat",
    keyTrigger: "Z",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3"
  },
  {
    id: "Kick",
    keyTrigger: "X",
    url: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3"
  },
  {
    id: "Closed-HH",
    keyTrigger: "C",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3"
  },
];

class DrumMachine extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      soundPlayed: "test"
    };
    // bind any class methods here
    this.setSoundPlayed = this.setSoundPlayed.bind(this);
  }

  componentDidMount() {
    // Append FreeCodeCamp tests to the DOM to see the test suite
    const script = document.createElement("script");
    script.src =
      "https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js";
    script.async = true;
    document.body.appendChild(script);
  }

  setSoundPlayed(str) {
    this.setState(prevState => ({
      soundPlayed: str
    }));
  }

  render() {
    const drumPadOne = soundKitOne.map(sound => {
      return <DrumPad 
                key={sound.id} 
                id={sound.id} 
                keyTrigger={sound.keyTrigger} 
                url={sound.url} 
                setSoundPlayed={this.setSoundPlayed}
              />
    });

    return (
      <div className="Drum-Machine">
        <h1>Drum Machine</h1>
        <div id="display">
          <h2>{this.state.soundPlayed}</h2>
          {drumPadOne}
        </div>
      </div>
    );
  }
}

export default DrumMachine;
