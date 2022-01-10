/*
* -- Required Props --
* trackTitle - A description of the sound played
* text - button text to be displayed
* url - path to the sound track
*/

function DrumPad(props) {
  return (
    <button id={props.trackTitle} className="drum-pad">
      {props.text}
      <audio
        className="clip"
        id={props.text}
        src={props.url}
      ></audio>
    </button>
  );
}

export default DrumPad;