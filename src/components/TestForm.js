import { useRef , useState} from "react";

const TestForm = ()=>{

    const [email, setEmail] = useState();
    const [password, setPassword] = useState()
    // const useStatehandleFormSubmit = ()=>{
    //     console.log("email: " ,email,", password: ",password)
    // }

    const emailRef = useRef();
    const passwordRef = useRef()
    const useRefhandleFormSubmit = ()=>{
        let email = emailRef.current.value;
        let password = passwordRef.current.value
        if (email.trim.length ===0){
            alert("enter your email")
        }
        if (password.trim.length < 5){
            alert("password too short")
        }
        console.log("email: " ,email,", password: ",password)
    }
    return(
        <div>
            <form>
                <div>
                    <label>Email Address:</label>
                    <input type="email" placeholder="Your email here" ref={emailRef}/>
                </div>
                <div>
                    <label>Password:</label>
                    <input type="password" placeholder="Your password here" ref={passwordRef}/>
                </div>
                <div>
                    <button type="button" onClick={useRefhandleFormSubmit}>useRefLogin</button>
                </div>
            </form>

            {/* <form>
                <div>
                    <label>Email Address:</label>
                    <input type="email" placeholder="Your email here" onChange={(e) => setEmail(e.target.value)}/>
                </div>
                <div>
                    <label>Password:</label>
                    <input type="password" placeholder="Your password here" onChange={(e) => setPassword(e.target.value)}/>
                </div>
                <div>
                    <button type="button" onClick={useStatehandleFormSubmit}>useStateLogin</button>
                </div>
            </form> */}
        </div>
    )
}
export default TestForm;