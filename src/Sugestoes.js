import badvibes from "./img/badvibesmemes.svg"
import chibird from "./img/chibirdart.svg"
import razoes from "./img/razoesparaacreditar.svg"
import adorable from "./img/adorable_animals.svg"
import small from "./img/smallcutecats.svg"

function Sugestao(props){
  return (
    <div class="sugestao">
              <div class="usuario">
                <img src={props.imagem} alt=""/>
                <div class="texto">
                  <div class="nome">{props.nome}</div>
                  <div class="razao">{props.razao}</div>
                </div>
              </div>
  
              <div class="seguir">Seguir</div>
            </div>
  )
}

export default function Sugestoes(){
    const sugestoes = [
      {nome: "bad.vibes.memes", imagem: badvibes, razao: "Segue você"},
      {nome: "chibirdart", imagem: chibird, razao: "Segue você"},
      {nome: "razoesparaacreditar", imagem: razoes, razao: "Novo no Instagram"},
      {nome: "adorable_animals", imagem: adorable, razao: "Segue você"},
      {nome: "smallcutecats", imagem: small, razao: "Segue você"}
    ]
    return (
        <div class="sugestoes">
            <div class="titulo">
              Sugestões para você
              <div>Ver tudo</div>
            </div>
            {sugestoes.map((s) => <Sugestao nome={s.nome} imagem={s.imagem} razao={s.razao}/>)}
          </div>
    )
}