import { useState, useEffect } from "react"
import { data } from "../data/Product-data"
import {useCurrentTime} from "../Hooks/index"
import { useParams } from "react-router-dom"

// let LIMIT = 2
const Product = ()=>{
    let _limit = 2
    // const getCurrentDateTime = ()=>{
    //     return new Date()
    // }
    // let currentDateTime = useCurrentTime(3000,getCurrentDateTime)
    // console.log(data)

    const params = useParams()//
    console.log("params",params)
    const [offSet, setOffset] = useState(0)
    const [products, setProducts] = useState(data)

    // const fetchData = ()=>{
    //     let d = data.slice(offSet, (offSet + _limit))
    //     setProducts(d)
    //     // setOffset(1)
    //     console.log(d)
    // }
    // useEffect(()=>{
    //     fetchData()
    // },[offSet])
    useEffect(()=>{
        findProduct(params.id)
    },[])
    const findProduct = (id)=>{
        let product = products.filter((p)=> p.id ==id)
        setProducts(product)
    }

    return(
        <div>
            <ul>
                <h1>products page</h1>
                {/* <h2>current time:{currentDateTime.toLocaleString("en-NG")}</h2> */}
                {products && products.map((product,i) =>{
                    return(
                        <div key={i}>
                            <h1>{product.title}</h1>
                            <h2>{product.description}</h2>
                            <strong>{product.price}</strong>
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