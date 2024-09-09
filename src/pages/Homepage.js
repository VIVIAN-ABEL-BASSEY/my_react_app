import Form from "../components/Form"
import Input from "../components/Form/Input"
import Button from "../components/Form/Button"
import Select from "../components/Form/Select"
import Loader from "../components/Loader";
import { genderOptions,courseOptions } from "../data/options"; {/*this is named import*/}

//inline destructuring or Component level destructuring
const Homepage = ({name, age}) => {

    //internal destructuring
// const Homepage = (props) => {
   
    return (
        <>
        <h1>This is my home page</h1>
        <h2>Welcome {name}</h2>
        <h2>I'm {age}</h2>
        {/* <h2>Welcome {props.name}</h2> */}
        {/* <h3>And you are {props.age} years old</h3> */}
        <Form title="Registration form components created by me">
            <Input label ={"first name"} placeholder={"your first name here"}/>
            <Input label ={"last name"} placeholder={"your last name here"}/>
            <Input label ={"email address"} placeholder={"example@gmail.com"}/>
            <Input label ={"phone number"} placeholder={"+23490348165"}/>
            <Select label ={"gender"} options = {genderOptions}/>
            <Select label ={"Select your course"} options = {courseOptions} />
            <Button handleSubmit={() => {console.log("form submitted")}} text ={"Register"} />
        </Form>
    </>
    )
}

export default Loader(Homepage)