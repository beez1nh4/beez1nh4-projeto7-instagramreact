import React from "react"
import mel from "./img/melmiho.jpg"

function Info(props){
    const [apelido, setApelido] = React.useState(props.apelido)
    const [foto, setFoto] = React.useState(props.foto)
    function changeNames(){
        setApelido(prompt("Novo nome:"))
    }
    return (
        <div class="usuario">
            <img src={foto} onClick={() => setFoto(prompt("Novo link de foto de perfil:"))} alt=""/>
            <div class="texto" >
              <strong >{props.usuario}</strong>
              <span>
                {apelido}
             <ion-icon onClick={changeNames} name="pencil"></ion-icon>
             </span>
            </div>
          </div>
    )
}

export default function Usuario(){
    const info = {usuario: "mel_miho", foto: mel, apelido: "Mel🐉"}
    return (
            <Info usuario={info.usuario} foto={info.foto} apelido={info.apelido}/>

    )
}