import React, {useState, useEffect} from "react";

//HOC (Higher Order Component)
const Loader = (WrappedComponent) => {

    const UpdatedComponent = (props) => {
        let _timer = null;

        const [isLoading, SetisLoading] = useState(true)

        useEffect(() => {
            _timer = setTimeout(() => {
                SetisLoading(false)
            }, 3000)

            return () => {
                clearTimeout(_timer)
            }
        }, []);

        return isLoading ? "please wait..." : <WrappedComponent {...props}/>
    }
    return UpdatedComponent;
}
export default Loader;