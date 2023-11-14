import "./styles.css";
import Header from "./Header";

function Capstone() {
  return (
    <a href="https://capstone.cse.sc.edu/milestone/research/#deliverables" target="_blank">
    <button style = {{color: 'white', fontSize: '20px', background: 'gray'}}>
      Capstone
    </button>
    </a>
  );
}

export default function App() {
  return (
    <div className="App">
    <div style={{background: 'lemonchiffon'}} className="App">
      <h1 style={{background: 'lemonchiffon'}}><Header/></h1>
      <h1>Hello Capstone</h1>
      <h2 style={{textAlign: 'center'}}><Capstone/></h2>
    </div>
    </div>
  );
}
