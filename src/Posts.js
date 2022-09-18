import post1 from "./img/gato-telefone.svg"
import post2 from "./img/dog.svg"
import meowed from "./img/meowed.svg"
import barked from "./img/barked.svg"
import respondeai from "./img/respondeai.svg"
import adorable from "./img/adorable_animals.svg"


function Post(props){
  return (
    <div class="post">
              <div class="topo">
                <div class="usuario">
                  <img src={props.imagem} alt=""/>
                  {props.usuario}
                </div>
                <div class="acoes">
{/*                   <ion-icon name="ellipsis-horizontal"></ion-icon>
 */}                </div>
              </div>
  
              <div class="conteudo">
                <img src={props.post} alt=""/>
              </div>
  
              <div class="fundo">
                <div class="acoes">
                  <div>
                    {/* <ion-icon name="heart-outline"></ion-icon>
                    <ion-icon name="chatbubble-outline"></ion-icon>
                    <ion-icon name="paper-plane-outline"></ion-icon> */}
                  </div>
                  <div>
                    {/* <ion-icon name="bookmark-outline"></ion-icon> */}
                  </div>
                </div>
  
                <div class="curtidas">
                  <img src={props.imagem2} alt=""/>
                  <div class="texto">
                    Curtido por <strong>{props.curtido}</strong> e <strong>{props.likes}</strong>
                  </div>
                </div>
              </div>
            </div>
  )
}

export default function Posts(){
    const posts = [
      {usuario: "meowed", imagem: meowed, imagem2: respondeai, post: post1, curtido: "respondeai", likes: "outras 101.523 pessoas"},
      {usuario: "barked", imagem: barked, imagem2: adorable, post: post2,curtido: "adorable_animals", likes: "outras 99.159 pessoas"}
    ]
    return (
        <div class="posts">
          {posts.map((p) => <Post usuario={p.usuario} imagem={p.imagem} imagem2={p.imagem2} post={p.post} curtido={p.curtido} likes={p.likes}/>)}
          </div>
    )
}