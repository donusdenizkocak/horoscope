

 const Card = ({title,date,desc,image}) => {
  return (
    <div className="cards">
        <div className="title">
            <h1>{title}</h1>
        </div>
        <div className="date">
            {date}
        </div>
        <img src={image} alt={title} />
        <div className="card-over">
            <p>
                {desc}
            </p>
        </div>
    </div>
  )
}
export default Card