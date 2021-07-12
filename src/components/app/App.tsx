import { Grid } from '../grid/Grid'
import './App.css';

function App() {
  const direction = 'column';

  return (
    <div className="App">
      <header className="App-header">
        <h1>Context Switch</h1>
      </header>
      <Grid direction={direction} />
    </div>
  );
}

export default App;
