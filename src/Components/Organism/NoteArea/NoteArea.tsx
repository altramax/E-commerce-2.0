import NoteAreaStyle from "./NoteAreaStyle";

type note = {
  text: string;
};

const Note = (props: note): JSX.Element => {
  return (
    <NoteAreaStyle>
      <div className="NoteContainer">
        <h2>{props.text}</h2>
      </div>
    </NoteAreaStyle>
  );
};

export default Note;
