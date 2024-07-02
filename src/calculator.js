import "./calculator.css";

export default function Calculator() {
  return (
    <>
      <Numbers />
    </>
  );
}

function Numbers() {
  return (
    <div className="numbers">
      {Array.from({ length: 9 }, (_, i) => (
        <button key={i}>{i + 1}</button>
      ))}
      <button>0</button>
    </div>
  );
}
