import "./Button.css"
import PropTypes from 'prop-types';

function Button(props){
    return(
        <button onClick={(e) =>{e.preventDefault();
            props.handleSubmit()
        }}>{props.text}</button>
    )
}
Button.defaultProps ={
    text:"submit",
    label:"this is a label"
}
Button.propTypes ={
    text: PropTypes.string,
    handleSubmit: PropTypes.func.isRequired
}
export default Button;