import Loader from "../components/Loader";
import { useState } from "react";

const About = (props)=>{
    const [message, sendMessage] = useState();
    const handlemsg = (text)=>{
        sendMessage(text)
    }
    return(
        <div>
            <h1>This is the about page</h1>
            {props.children}
            <h2>message:{message}</h2>
            <button onClick={()=>{sendMessage("We are the best!")}}>Send Messagge</button>
            <button onClick={()=>{handlemsg("An update from the best's best!")}}>Set Messagge</button>
        </div>
    )
}
export default About;