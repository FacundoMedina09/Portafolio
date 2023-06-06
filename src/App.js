import React from 'react';
import ReactDOM from 'react-dom/client';
import './stylesheet/reset-copia.css'
import Header from './componentes/header';
import Main from './componentes/main';
import Footer from './componentes/footer';
import './App.css';
function App() {
  return (
    <div className="App">
      <Header/>
      <Main/>
      <Footer/>
    </div>
  );
}

export default App;

