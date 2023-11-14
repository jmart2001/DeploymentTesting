import "./styles.css";

function Capstone() {
  return (
    <a href="https://capstone.cse.sc.edu/milestone/research/#deliverables" target="_blank">
    <button style = {{color: 'white', fontSize: '20px', background: 'gray'}}>
      Capstone
    </button>
    </a>
  );
}

function App() {
  return (
    <div className="App">
      <h1>Hello Capstone</h1>
      <h2>Here is my codebase!</h2>
      <h2>Here is another commit</h2>
      <h2>Here is a link to the Capstone website</h2>
      <h2 style={{textAlign: 'center'}}><Capstone/></h2>
      <h2>Hello! Testing the commit 2!</h2>
      <h2>Hello! Testing the commit 3!</h2>
    </div>
  );
}
