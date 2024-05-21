/* eslint-disable react/prop-types */
function Alert(props) {
    const { children } = props;

    return (
        <div>
            <span>{children}</span>
        </div>
    );
}

export default Alert;