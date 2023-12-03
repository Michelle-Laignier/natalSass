import "./styles.scss"

import { Card } from "../../components/Card"

import dinner from "../../../src/assets/dinner.jpg"
import peru from "../../../src/assets/peru.jpg"
import tender from "../../../src/assets/tender.jpg"
import chester from "../../../src/assets/chester.png"
import wine from "../../../src/assets/wine.jpg"
import pudim from "../../../src/assets/pudim.jpg"
import panettone from "../../../src/assets/panettone.png"
import pave from "../../../src/assets/pave.jpeg"
import aperitivos from "../../../src/assets/aperitivos.jpg"

export function Home() {
  return(
    <div>
      <div className="intro">
        <h1>Receitas de Natal</h1>
        <p>Pratos salgados, doces e bebidas</p>
        <img src={dinner} alt="" />
      </div>

      <div className="section">
        <h2>Pratos salgados</h2>

        <div className="cards">
          <a href="#">
            <Card img={peru} title="Peru"/>
          </a>

          <a href="#">
            <Card img={tender} title="Tender"/>
          </a>

          <a href="#">
            <Card img={chester} title="Chester"/>
          </a>
        </div>

        <a href="#" className="link">Ver mais</a>
      </div>

      <div className="wines">
        <h2>Bebidas</h2>
        <p>Quais bebidas combinam melhor com cada prato</p>
        <a href="#">Ver mais</a>
        <img src={wine} alt="" />
      </div>

      <div className="section">
        <h2>Sobremesas</h2>

        <div className="cards">
          <a href="#">
            <Card img={pudim} title="Pudim"/>
          </a>
          
          <a href="#">
            <Card img={panettone} title="Panettone"/>
          </a>
          
          <a href="#">
            <Card img={pave} title="Pavê"/>
          </a>
        </div>

        <a href="#" className="link">Ver mais</a>
      </div>

      <div className="aperitivos">
        <h2>Aperitivos</h2>
        <p>Tira gostos, biscoitos e frutas</p>
        <a href="#">Ver mais</a>
        <img src={aperitivos} alt="" />
      </div>

      <footer>
        <ul>
          <li>
            <a href="#">Sobre nós</a>
          </li>

          <li>
            <a href="#">Contatos</a>
          </li>

          <li>
            <a href="#">Termos</a>
          </li>
        </ul>
      </footer>
    </div>
  )
}