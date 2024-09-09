import React from "react";

class Greeting2 extends React.Component {
   constructor(props){
    super(props)
    console.log(props.message)
    this.state = {
        first_name:"Vivian",
        last_name:"Bassey"
    }}

    static getDerivedStateFromProps(props,state){
        // const {message} = props
        return{time:props.time, message: props.message}
    }

    componentDidMount(){}

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
                <h2>Messagge: {this.state.message} {this.state.time}</h2>
                <h2>Welcome {this.state.first_name} {this.state.last_name}</h2>
                <button onClick={()=>{this.changeName()}}>change name</button>
            </>
        )
    }
}

export default Greeting2;