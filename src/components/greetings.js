import React from "react";

class Greeting extends React.Component {
    state = {
        first_name:"Vivian",
        last_name:"Bassey"
    }

    changeName = ()=>{
        this.setState({
            first_name:"confidence",
            last_name:"abel"
        })
        
    }
    render() {
        return(
            <>
                <h1>Hi, I'm a class component!</h1>
                <h2>Welcome {this.state.first_name} {this.state.last_name}</h2>
                <button onClick={()=>{this.changeName()}}>change name</button>
            </>
        )
    }
}

export default Greeting;