import logo from './logo.svg';
import './App.css';

const task = (value) => {
  return (
    <li>{value}</li>
  );
}

function App() {
  const compromissos = [
    'aprender react',
    'usar react',
    'avançar no react',
    'viver no react'
  ];

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {compromissos.map((compromisso) => {
          return task(compromisso);
        })}
      </header>
    </div>
  );
}

export default App;
