import milad from "../assets/milad-.jpg"
const Card = (props) => {
  return (
    <div>
        <div className="card">
                <img src={milad} alt="" srcset="" />
                <h1>{props.userName}</h1>
                <p>{props.profession}</p>
                <button>View profile</button>
        </div>
    </div>
  )
}

export default Card