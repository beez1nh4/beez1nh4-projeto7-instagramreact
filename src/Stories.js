import meowed from "./img/meowed.svg"
import barked from "./img/barked.svg"
import respondeai from "./img/respondeai.svg"
import ninegag from "./img/9gag.svg"
import nathan from "./img/nathanwpylestrangeplanet.svg"
import wawawi from "./img/wawawicomics.svg"
import filomoderna from "./img/filomoderna.svg"
import memeria from "./img/memeriagourmet.svg"

function Story(props){
  return(
    <div class="story">
              <div class="imagem">
                <img src={props.imagem} alt=""/>
              </div>
              <div class="usuario">
                {props.usuario}
              </div>
            </div>
  )
}


export default function Stories(){
  const stories = [
    {imagem: ninegag, usuario: "9gag"},
    {imagem: meowed, usuario: "meowed"},
    {imagem: barked, usuario: "barked"},
    {imagem: nathan, usuario: "nathanwpylestrangeplanet"},
    {imagem: wawawi, usuario: "wawawicomics"},
    {imagem: respondeai, usuario: "respondeai"},
    {imagem: filomoderna, usuario: "filomoderna"},
    {imagem: memeria, usuario: "memeriagourmet"}
  ]
    return (
        <div class="stories">
            {stories.map((s) => <Story usuario={s.usuario} imagem={s.imagem}/>)}
  
            <div class="setinha">
              <ion-icon name="chevron-forward-circle"></ion-icon>
            </div>
          </div>
    )
}