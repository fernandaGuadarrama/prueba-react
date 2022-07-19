import logo from './logo.svg';
import Fer from "./fer.jpg";
import Saludar from "./components/Saludar.js";
import './App.css';

function App() {
  const  nombre = "Fernanda"
  let apellido = "Guadarrama"
  var edad= 29
  const dirección = {
    calle: "Ant. carretera Méx-Cuautla",
    país: "México"
  }

  function holaMundo(){
    alert("Hola, mundo")
  }


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <img src={Fer} className="App-logo" alt="yo" onClick={holaMundo}/>
        <p>
          Aprendiendo react 
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Me llamo {nombre} {apellido}
          <br></br>
          Tengo {edad} y vivo en {dirección.calle} en {dirección.país}

        </a>
        <br />
        <Saludar nombre="Yani" residencia="San Antonio" estilo="rojo"></Saludar>
              <Saludar nombre="Moy" residencia="Cdmx" estilo="orange"></Saludar>
        </header>
    </div>
  );
}

export default App;
