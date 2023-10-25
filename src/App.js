import "./styles.css";

function Capstone() {
  return (
    <a href="https://capstone.cse.sc.edu/milestone/source-control/" target="_blank">
    <button style = {{color: 'white', fontSize: '20px', background: 'gray'}}>
      Capstone
    </button>
    </a>
  );
}

export default function App() {
  return (
    <div className="App">
      <h1>Hello Capstone</h1>
      <h2>Here is my codebase!</h2>
      <h2>Here is another commit</h2>
      <h2>Here is a link to the website</h2>
      <h2 style={{textAlign: 'center'}}><Capstone/></h2>
    </div>
  );
}
