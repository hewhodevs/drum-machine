/*
* -- Required Props --
* trackTitle - A description of the sound played
* text - button text to be displayed
* url - path to the sound track
*/

function DrumPad(props) {
  return (
    <button id={props.id} className="drum-pad">
      {props.trigger}
      <audio
        className="clip"
        id={props.trigger}
        src={props.url}
      ></audio>
    </button>
  );
}

export default DrumPad;