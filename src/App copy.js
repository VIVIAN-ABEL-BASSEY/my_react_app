import logo from './logo.svg';
import './App.css';

function App() {

  let firstName = "Vivian"
  let lastName = "Bassey"

  let styleObject = {
    textTransform:"upperCase",
    color:"red",
    fontSize:"50px"
  }

  let Products = [
    {id: 1, name: 'Apple Watch', price: 10}, 
    {id: 2, name: 'Nike Sneaker', price: 25},
    {id: 3, name: 'Samsung TV', price: 210}
  ]
// first way of creating a form
  let nameInput  = (<input type = 'text' placeholder='Your name here...'/>);
  let emailInput = (<input type = 'text' placeholder='Your email here...'/>);
  let button = (<button>Submit</button>);

  let form = (
    <form>
      {nameInput}
      {emailInput}
      {button}
    </form>
  )
  // second way of creating a form
  function createForm() {
    {}
    let nameInput  = (<input type = 'text' placeholder='Your name here...'/>);
    let emailInput = (<input type = 'text' placeholder='Your email here...'/>);
    let button = (<button>Submit</button>);
    let form = (
      <form>
        <h1 style={{color:"black"}}>Welcome, please filll in your details</h1>
        {nameInput}
        {emailInput}
        {button}
      </form>
    );
    return form
  //another method
  // return (
    //   <form>
    //     {nameInput}
    //     {emailInput}
    //     {button}
    //   </form>
    // );
  }
  return (
    <div>
         <h1 style={{color:"black"}}>Products list</h1>
        {
          Products && Products.map((p,i)=>{
            return(
              <div key={i}>
                <span>{p.name}</span><span>{p.price}</span>
               {/* {createForm()}*/}
              </div>
            )
          })
        } 
        {/* conditional rendering, &&=>print left if it's falsey else print value of the right,,, ||=>print the value on the left if truthy else return value on the right */}
        <h1>welcome {firstName || "ananymous"} </h1>
        <h1>Hello{!firstName && createForm()}</h1>
        {/* <h1>{firstName ? `Welcome ${firstName}`: createForm()}</h1>  */}
        <h1 style={{color:"blue"}}>Welcome to the {lastName}'s family {firstName} </h1>
        {/* <img src='/logo512.png' alt=''></img> stactic located inside the public folder */}
        {/* <img src={logo}></img>dynamic located inside the src folder */}
        {/* <img src={require("../src/logo.svg").default} className="App-logo" />stactic located inside the src folder */}
        <h1 style={styleObject}>Hi my name is {firstName + " " + lastName} </h1>
        {/* <h1> {`hi welcome Mr ${lastName}`}</h1>
        <h1 className="App">working</h1>
        {form}
        {form}
        {form} */}
        {/* {createForm()} */}
        {/*createForm()}
        {createForm()} */}
    </div>
  );
}

export default App;
