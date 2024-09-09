import Homepage from "./pages/Homepage";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Greeting from "./components/greetings";
import Greeting2 from "./components/greeting2";
import { useState } from "react";
import TestForm from "./components/TestForm";
import pagination from "./pages/pagination";
import Product from "./pages/Product"
import Pagination from "./pages/pagination";
import Apis from "./components/Apis";
import Axios from "./components/Axios";


function App() {

  const contactSubmit = () => {console.log('form submitted successfully.')}
  const [message, setMessage] = useState("message set by default")
  const [time, setTime] = useState("at 00:00")
  return (
    <div>
      {/* <Greeting2 message = {message} time ={time}/> */}
      {/* <button onClick={(e)=>{setMessage("this is a message sent from admin,treat with respect at");setTime("06:00")}}>Change Messagge</button> */}
      {/* <Homepage name= "Misheal" age= {33}/> */}
      {/* <Contact handleForm={contactSubmit}/> */}
      {/* <About/> */}
        {/* <h1>this is a subheading</h1> */}
        {/* <Greeting></Greeting> */}
      {/* </About> */}
      {/* <Homepage/> */}
      {/* <TestForm/> */}
      <Product/>
      {/* <Pagination/> */}
      {/* <Apis/> */}
      {/* <Axios/> */}
    </div>
  );
}

export default App;