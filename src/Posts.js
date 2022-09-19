import React from "react"
import post1 from "./img/gato-telefone.svg"
import post2 from "./img/dog.svg"
import meowed from "./img/meowed.svg"
import barked from "./img/barked.svg"
import respondeai from "./img/respondeai.svg"
import adorable from "./img/adorable_animals.svg"

let notSaved = true;
let notLiked = true;


function Post(props){
  
  const savePadrao = "bookmark-outline"
  const likePadrao = "heart-outline"
  const [save, setSave] = React.useState(savePadrao)
  const [like, setLike] = React.useState(likePadrao)
  const [likeColor, setLikeColor] = React.useState("")
  const [likesNumber, setLikesNumber] = React.useState(props.likes)
  
  function changeSave(){
    setSave(notSaved ? "bookmark" : "bookmark-outline")
    if (notSaved){
      notSaved = false;
    } else{
      notSaved = true;
    }
  }
  function changeLike(){
    if (notLiked){
      setLike("heart")
      changeColor()
      setLikesNumber(likesNumber+1)
    }else{
      setLike("heart-outline")
      changeColor()
      setLikesNumber(likesNumber-1)
    }
    
  }
  function changeColor(){
    if (notLiked){
      setLikeColor("like")
      notLiked = false;
    } else{
      setLikeColor("iconcolor")
      notLiked = true;
    }   
  }
  return (
    <div class="post">
              <div class="topo">
                <div class="usuario">
                  <img src={props.imagem} alt=""/>
                  {props.usuario}
                </div>
                <div class="acoes">
                  <ion-icon name="ellipsis-horizontal"></ion-icon>
               </div>
              </div>
  
              <div class="conteudo">
                <img src={props.post} alt=""/>
              </div>
  
              <div class="fundo">
                <div class="acoes">
                  <div>
                    <ion-icon onClick={changeLike} name={like} class={likeColor} ></ion-icon>
                    <ion-icon name="chatbubble-outline"></ion-icon>
                    <ion-icon name="paper-plane-outline"></ion-icon> 
                  </div>
                  <div>
                     <ion-icon name={save} onClick={changeSave}></ion-icon> 
                  </div>
                </div>
  
                <div class="curtidas">
                  <img src={props.imagem2} alt=""/>
                  <div class="texto">
                    Curtido por <strong>{props.curtido}</strong> e <strong>outras {likesNumber} pessoas</strong>
                  </div>
                </div>
              </div>
            </div>
  )
}

export default function Posts(){
  const posts = [
    {usuario: "meowed", imagem: meowed, imagem2: respondeai, post: post1, curtido: "respondeai", likes: 101523},
    {usuario: "barked", imagem: barked, imagem2: adorable, post: post2,curtido: "adorable_animals", likes: 99159}
  ]
    return (
        <div class="posts">
          {posts.map((p) => <Post usuario={p.usuario} imagem={p.imagem} imagem2={p.imagem2} post={p.post} curtido={p.curtido} likes={p.likes}/>)}
          </div>
    )
}