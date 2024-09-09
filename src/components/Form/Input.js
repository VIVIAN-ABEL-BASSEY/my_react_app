import PropTypes from 'prop-types';

const style = {
    display:"block",
    color:"red",
    padding:"5px",
    textAlign:"center"
}
const Input = ({label,placeholder})=>{
    return(
        <div style={style}>
            <label>{label}</label>
            <input type="text" placeholder={placeholder}/>
        </div>
    )
}

Input.propTypes = {
    label: PropTypes.string.isRequired,
    isDisabled: PropTypes.oneOf([true, false]),
    data: PropTypes.oneOfType([
        PropTypes.bool,
        PropTypes.number,
        PropTypes.string,
    ])
};
export default Input