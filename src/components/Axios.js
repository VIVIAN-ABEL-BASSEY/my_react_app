import axios from "axios";
import { useEffect, useState } from "react"

function Axios(){
    const [users, setUsers]= useState([])
    const requestOne = axios.get("https://api.storyblok.com/v1/cdn/stories/health?version=published&token=wANpEQEsMYGOwLxwXQ76Ggtt");
    const requestTwo = axios.get("https://api.storyblok.com/v1/cdn/datasources/?token=wANpEQEsMYGOwLxwXQ76Ggtt");
    const requestThree = axios.get("https://api.storyblok.com/v1/cdn/stories/vue?version=published&token=wANpEQEsMYGOwLxwXQ76Ggtt");
    // useEffect(() =>{
    //     axios.get("https://jsonplaceholder.typicode.com/users")
    //     .then((response)=>{
    //         // console.log(response.data)
    //         setUsers(response.data)
    //     }).catch((err)=>{
    //         console.error("error",err)
    //     })
    // }, [])
    const sendData = ()=>{
        const data = {
            id: new Date().now,
            name:"Vian",
            email:"vian@gmail.com",
            phone:"+234",
            address:{
                Street:"all streets",
                city:"city of angels"
            }
        }
        const headers ={
            Accept:"application/json",
            "content-type":"application/json",
        }
        axios.post("https://jsonplaceholder.typicode.com/users",data,headers)
            .then(response =>{
                let newData = users
                newData = [response.data,...newData]
                setUsers(newData)
                console.log(newData)
            })
            .catch(err => console.log(err))
        }
    //     // making multiple request with axios
        let responseArray = [requestOne,requestTwo,requestThree]
        useEffect(()=>{
            axios.all(responseArray)
            .then(axios.spread((res1,res2,res3)=>{
                console.log("response1",res1)
                console.log("response2",res2)
                console.log("response3",res3)
            }))
            .catch(errors => console.error(errors))
        },[])

    return(
        <div>
            <button onClick={sendData}>Send Data with Axios</button>
            {users && users.map((user,i)=>{
                return (
                    <ul key = {i}>
                        <h1>Behold {user.name} from {user.address.city}</h1>
                        <li>
                            <span><b>Name:</b></span>
                            <span>{user.name}</span>
                        </li>
                        <li>
                            <span><b>Email:</b></span>
                            <span>{user.email}</span>
                        </li>
                        <li>
                            <span><b>Phone:</b></span>
                            <span>{user.phone}</span>
                        </li>
                        <li>
                            <span><b>Address:</b></span>
                            <span>{user.address.Street},{user.address.city}</span>
                            <br/><hr/>
                        </li>
                    </ul>
                )
            })}
        </div>
    )
}
export default Axios