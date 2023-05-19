import { useParams } from "react-router-dom"
import { useEffect,useState} from "react"
import blogs from "../data/blogs"
import "./Details.css"
export default function Details(){
    const {id} = useParams()
    const [title,setTitle] = useState("");
    const [image,setImge] = useState("");
    const [content,setContent] = useState("");
    const [author,setAuthor] = useState("");
    useEffect(()=>{
        //ดืงข้อมูนบดความ
       const result = blogs.find((item)=>item.id === parseInt(id))
        setTitle(result.title)
        setImge(result.image_url)
        setContent(result.content)
        setAuthor(result.author)
        // eslint-disable-next-line
    },[])
    return(
        <div className="container">
        <h2 className="title" > บทความ : {title}</h2>
        <img src={image} alt={title} className="img-details"/>
        <div className="blog-detail">
            <strong>author : {author}</strong>
            <p>{content}</p>
        </div>
        </div>
    )
}