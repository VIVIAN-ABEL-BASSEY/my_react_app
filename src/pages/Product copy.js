import { useState, useEffect } from "react"
import { data } from "../data/Product-data"
import {useCurrentTime} from "../Hooks/index"

// let LIMIT = 2
const Product = ()=>{
    let _limit = 2
    const getCurrentDateTime = ()=>{
        return new Date()
    }
    let currentDateTime = useCurrentTime(3000,getCurrentDateTime)
   
    console.log(data)
    const [offSet, setOffset] = useState(0)
    const [products, setProducts] = useState(data)

    const fetchData = ()=>{
        let d = data.slice(offSet, (offSet + _limit))
        setProducts(d)
        // setOffset(1)
        console.log(d)
    }
    
    useEffect(()=>{
        fetchData()
    },[offSet])


    return(
        <div>
            <ul>
                <h1>products</h1>
                <h2>current time:{currentDateTime.toLocaleString("en-NG")}</h2>
                {products && products.map((p,i) =>{
                    return(
                        <div key={i}>
                            <h1>{p.title}</h1>
                            <h2>{p.description}</h2>
                            <strong>{p.price}</strong>
                            <hr/>
                        </div>
                    )
                })}
            </ul>
            <div>
                <button onClick={()=>setOffset(i => --i)}> &#8592;previous</button>
                <button onClick={()=>setOffset(i => ++i)}>next &#8594;</button>
            </div>
        </div>
    )
}
export default Product