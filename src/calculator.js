import "./calculator.css";

export default function Calculator() {
  return (
    <div className="calculator">
      <TextArea />
      <Numbers />
    </div>
  );
}

function TextArea() {
  return (
    <div className="textbox">
      <input type="text" />
    </div>
  );
}

function Numbers() {
  return (
    <div className="numbers">
      {Array.from({ length: 9 }, (_, i) => (
        <button key={i}>{i + 1}</button>
      ))}
      <button>+/-</button>
      <button>0</button>
    </div>
  );
}
