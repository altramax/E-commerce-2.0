import "./styles/NoteArea.scss";

type note = {
  text: string;
};
export default function Note(props: note) {
  return (
    <div className="NoteContainer">
      <h2>{props.text}</h2>
    </div>
  );
}
