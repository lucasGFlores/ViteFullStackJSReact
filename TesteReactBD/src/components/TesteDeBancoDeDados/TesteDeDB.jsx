import React,{useEffect, useState } from 'react'
import { useParams, Link } from "react-router-dom";
import api from '../../api'

const TesteDeBD = () => {
const params = useParams();
const [noticias, setNoticias] = useState([])
const [potatoResposta,setPotatoResposta] = useState("");
const handleInput = (e) =>{
  setPotatoResposta(e.target.value)
}
    
useEffect(() =>{
api.get('noticias').then(res => {
     setNoticias(res.data)
    console.log(res.data)
}).catch(err =>{
    console.log(err)
})
},[])

const filteredNoticiasList = noticias.filter(noticia => potatoResposta === ""? noticia.titulo.includes(params.rogerio) : noticia.titulo.includes(potatoResposta))


    return ( 
        <>
        <input onChange={handleInput} value={potatoResposta}></input>
        <h1 >ioir</h1>

        <p style={{width: "auto"}}>{filteredNoticiasList.length > 0 ? 
        <ul> 
            {filteredNoticiasList.map(noticias => {
                return(
                    <li key={noticias.titulo}> {noticias.titulo}</li>
                )
            })}
        </ul> : (
           <ul> 
           {noticias.map(noticias => {
               return(
                   <li key={noticias.titulo}> {noticias.titulo}</li>
               )
           })}
       </ul>
        )}</p>
        <Link to={"/"}><button>Voltar para a home</button></Link>
        </>
     );
    }
export default TesteDeBD;