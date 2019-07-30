import React from "react";
// import logo from './assets/logo.svg';
// import Canvas from './components/canvas.jsx'
import "./assets/app.scss";

// <header className="App-header"></header>
var importObject = { imports: { imported_func: arg => console.log(arg) } };
WebAssembly.instantiateStreaming(fetch("../bin/simple.wasm"), importObject).then(obj =>
  obj.instance.exports.exported_func()
);

const App = () => {
  return (
    <section className="app">
      <h1>Teste</h1>
      {/* <Canvas height={500} width={500} /> */}
    </section>
  );
};

export default App;
