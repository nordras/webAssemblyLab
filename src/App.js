import React from 'react';
// import logo from './assets/logo.svg';
import Canvas from './components/canvas.jsx'
import './assets/app.scss';

// <header className="App-header"></header>
const App = () => {
  return (
    <section className="app">
      <h1>Teste</h1>
      <Canvas height={500} width={500} />
    </section>
  );
}

export default App;
