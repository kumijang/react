import about from "../images/about.svg"
export default function Abount(){
    return(
        <div className="container">
        <h2 className="title">About</h2>
        <img src={about} alt="about" />
      </div>
    )
}