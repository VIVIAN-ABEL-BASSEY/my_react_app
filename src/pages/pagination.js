import { useState, useEffect } from "react"
import { data } from "../data/Product-data"

// let LIMIT = 2
const Pagination = ()=>{
    let _limit = 3
   
    console.log(data)
    const [offSet, setOffset] = useState(0)
    const [products, setProducts] = useState(data)

   const fetchData = () => {
        let d = data.slice((offset - 1) * _limit, offset * _limit);
        setProducts(d)
        console.log(d)
    }
    useEffect(()=>{
        fetchData()
    },[offSet])

    return(
        <div>
            <ul>
                <h1>pagination code</h1>
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
                <button onClick={()=>setOffset(i => ++i)}> &#8594;next</button>
            </div>
        </div>
    )
}
export default Pagination