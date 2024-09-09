import { useEffect, useState } from "react"

function Apis(){
    const [users, setUsers]= useState([])
    useEffect(() =>{
        fetch("https://jsonplaceholder.typicode.com/users")
        .then((rawData) =>{
            return rawData.json();
        }).then((formatedData)=>{
            console.log(formatedData)
            setUsers(formatedData)
        }).catch((err)=>{
            console.error("error",err)
        })
    }, [])

    const sendData = ()=>{
        const data = {
            id: new Date().now,
            name:"Viavia",
            email:"via@gmail.com",
            phone:"+234",
            address:{
                Street:"all streets",
                city:"city of angels"
            }
        }
        fetch("https://jsonplaceholder.typicode.com/users",
            {
                method:"Post",
                body:JSON.stringify(data),
                headers:{
                    Accept:"application/json",
                    "content-type":"application/json",
                },
            })
            .then(res => res.json())
            .then(json =>{
                let newData = users
                newData = [json,...newData]
                setUsers(newData)
                console.log(newData)
            })
            .catch(err => console.log(err))
    }

    return(
        <div>
            <button onClick={sendData}>Send Data with fetch</button>
            {users && users.map((u,i)=>{
                return (
                    <ul key = {i}>
                        <li>
                            <span><b>Name:</b></span>
                            <span>{u.name}</span>
                        </li>
                        <li>
                            <span><b>Email:</b></span>
                            <span>{u.email}</span>
                        </li>
                        <li>
                            <span><b>Phone:</b></span>
                            <span>{u.phone}</span>
                        </li>
                        <li>
                            <span><b>Address:</b></span>
                            <span>{u.address.Street},{u.address.city}</span>
                            <br/><hr/>
                        </li>
                    </ul>
                )
            })}
        </div>
    )
}
export default Apis