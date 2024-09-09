
const Form = (props) => {
    return(
        <div>
            <h3>{props.title}</h3>
            <form>
                {props.children}
            </form>
        </div>
    )
}
export default Form;