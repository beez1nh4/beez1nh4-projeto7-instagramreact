import React from "react"
import post1 from "./img/gato-telefone.svg"
import post2 from "./img/dog.svg"
import meowed from "./img/meowed.svg"
import barked from "./img/barked.svg"
import respondeai from "./img/respondeai.svg"
import adorable from "./img/adorable_animals.svg"

function Post(props){
  
  const savePadrao = "display-initial"
  const savePadrao1 = "display-none"
  const likePadrao = "display-initial"
  const likePadrao1 = "display-none"
  const [save, setSave] = React.useState(savePadrao)
  const [save1, setSave1] = React.useState(savePadrao1)
  const [like, setLike] = React.useState(likePadrao)
  const [like1, setLike1] = React.useState(likePadrao1)
  const [likesNumber, setLikesNumber] = React.useState(props.likes)
  
  function changeSave(){
    if (save === "display-initial"){
      setSave("display-none");
      setSave1("display-initial");
    } else {
      setSave1("display-none");
      setSave("display-initial");
    }
    
  }
  

  function changeLike(){
    if (like === "display-initial"){
      setLike("display-none");
      setLike1("display-initial like");
      setLikesNumber(likesNumber+1)
    } if (like === "display-none") {
      setLike1("display-none like");
      setLike("display-initial");
      setLikesNumber(likesNumber-1)
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
                    <ion-icon onClick={changeLike} name="heart-outline" class={like} ></ion-icon>
                    <ion-icon onClick={changeLike} name="heart" class={like1} ></ion-icon>
                    <ion-icon name="chatbubble-outline"></ion-icon>
                    <ion-icon name="paper-plane-outline"></ion-icon> 
                  </div>
                  <div>
                     <ion-icon name="bookmark-outline" onClick={changeSave} class={save}></ion-icon> 
                     <ion-icon name="bookmark" onClick={changeSave} class={save1}></ion-icon> 
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