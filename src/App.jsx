import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
 let vetfrase=[]

const Titulo = () =>
{
  return(
    <div>
      <h1>Frases Aleatória - React</h1>
    </div>
  );
}


const Objeto = () => {


  const enviarfrase = () =>
  {
    let listaFrase = ''
  
    listaFrase = document.getElementById("frase").value
    vetfrase.push(listaFrase)

   console.log(vetfrase)
   alert("Frase enviada!")
   listaFrase = document.getElementById("frase").value = ""
  } 

  const gerarfrase = () =>
  {
    const aleatorionumber = Math.floor(Math.random() * vetfrase.length);
    document.getElementById("frasealeatoria").innerHTML=vetfrase[aleatorionumber]
  }
  
  return (
    <div>
        <form action="">
          <input type="text" id="frase" placeholder="Digite sua frase"></input>
        </form>
        <button id="botaoen" onClick={enviarfrase}>Enviar</button><br/>
        <button onClick={gerarfrase}>Gerar Aleatorio</button><br/>
        <h1 id="frasealeatoria"></h1>
    </div>
  );
}

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      
    <Titulo></Titulo>
    <Objeto></Objeto>

    </div>
  );
}

export default App
