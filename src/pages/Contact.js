import { useEffect, useState } from "react";

const Contact = (props) => {
    
    let _timer = null;
    const [isLoading, setIsloading] = useState();
    const [name, setName] = useState("Bright")

    useEffect(()=>{
        setIsloading(true)
        _timer = setTimeout(()=>{
            setIsloading(false)
        },3000)

        return()=>{
            clearTimeout(_timer)
        }

    },[name])

    const updateName = (value)=>{
        setName(value)
    }

    return(
        <>
            {isLoading ?
            (<h1>Hi there,please wait...</h1>):
            (<div>
                <h1>This is the contact page</h1>
                <h2>Full name:{name}</h2>
        {/* <form> */}
                <input type="text" placeholder="Your full name"/>
                <button onClick={() => {updateName("covenant anthony")}}>update Name</button>
                <button onClick={() => props.handleForm()}>Submit</button>
        {/* </form>onClick={()=>{handlemsg("An update from the best's best!")}} */}
            </div>)}
        
        </>
    )
}

export default Contact