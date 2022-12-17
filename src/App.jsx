import { useState } from 'react';
import Dancing from './components/Dancing/Dancing';
import Scene from './components/Scene';

function App() {
  const [state, setState] = useState(true);

  return (
    <div style={{ cursor: 'pointer' }}>
      <button
        className="btn btn-success m-2"
        onClick={() => setState(!state)}
        style={{ position: 'absolute' }}
      >
        Cambiar a {state ? 'Baile' : 'Cubo'}
      </button>
      {state ? <Scene /> : <Dancing />}
    </div>
  );
}

export default App;
