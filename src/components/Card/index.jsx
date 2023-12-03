import "./styles.scss"

export function Card({ img, title }) {
  return(
    <div className="card-div">

      <div className="image">
        <img src={img} alt="" />
      </div>

      <h2>{title}</h2>
    </div>
  )
}