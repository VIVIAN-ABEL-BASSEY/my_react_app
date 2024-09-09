import { useNavigate,useLocation } from "react-router-dom"
import { useState,useEffect } from "react"
function Home(){
    let navigate = useNavigate();
    let location = useLocation()
    console.log("location",location)
    const [counter, setCounter] = useState(5)
    useEffect(()=>{
        setInterval(()=>{
            setCounter(c => --c)
        },1000)
    },[])
    useEffect(()=>{
        if(counter<=0){
            navigate("/about")
        }
    },[counter])
    return(
        <div>
            <h1>This is my home page</h1>
            <h2>counter:{counter}</h2>
            <button onClick={()=>{navigate("/product")}}>View Products</button>
        </div>
    )
}
export default Home