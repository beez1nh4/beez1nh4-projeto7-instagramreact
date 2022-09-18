import catana from "./img/catanacomics.svg"

export default function Usuario(){
    return (
        <div class="usuario">
            <img src={catana} alt=""/>
            <div class="texto">
              <strong>catanacomics</strong>
              <span>
                Catana
{/*                 <ion-icon name="pencil"></ion-icon>
 */}              </span>
            </div>
          </div>
    )
}