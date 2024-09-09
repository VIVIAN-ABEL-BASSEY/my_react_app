import { useMatch, useParams } from "react-router-dom"
function Profile(){
    const match = useMatch("/profile/:id/:username")
    // const {id,username} = useParams()
    const params = useParams()
    console.log("parameters are",params)
    console.log(match)
    return(
        <div>
            <h1>This is the profile page</h1>
            <h1>ID:{params.id}</h1>
            <h1>username:{params.username}</h1>
        </div>
    )
}
export default Profile