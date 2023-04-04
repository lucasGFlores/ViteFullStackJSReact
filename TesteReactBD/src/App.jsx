import React,{ useState,useEffect } from 'react'
import {Link} from 'react-router-dom'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'



function App() {

  const [potatoResposta,setPotatoResposta] = useState("");
  const handleInput = (e) =>{
    setPotatoResposta(e.target.value)
  }
  
  const [count, setCount] = useState(0)

  return (
    <div className="App">
     
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1></h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Clique nos icones para saber mais de cada tecnologia
        </p>
      </div>
      <div>
      <p className="read-the-docs">
        insira algo sobre uma noticia
      </p>
      <div>
      <input type="text" onChange={handleInput} value={potatoResposta}/>
      </div>
      <Link to={potatoResposta !== "" ?
        `/noticias/${potatoResposta}`
      :
      "/noticias/tudo"}><button className='botaoNoticia' > Procurar noticia</button></Link>
      
      </div>
      <div>
        <Link to={"/listaDeAfazeres"}><button> botão para  a lista de afazeres</button></Link>
      </div>
    </div>
  )
}

export default App
