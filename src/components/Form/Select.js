import PropTypes from 'prop-types';


const Select = (props)=>{
    const {options,label} = props
    return(
        <div>
            <label>{label}</label>
            <select>
                {options && options.map((o,i) => {
                    return(
                        <option value={o.value} key={i}>
                        {o.text}
                    </option>
                    )
                })}
            </select>
        </div>
    )
}

Select.propTypes = {
    label: PropTypes.string.isRequired,
    data:PropTypes.arrayOf(PropTypes.object).isRequired,
};
export default Select