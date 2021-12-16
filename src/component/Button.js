import PropTypes from 'prop-types'
import React from 'react'
const Button = ({ color, title,onClick}) => {

    return (
        <header className="header">
            <button
                onClick={onClick}
                style={{ backgroundColor: color }}
                className='btn'
            >{title}
            </button>
        </header>

    )
}
Button.defaultProps = {
    color: 'Steelblue',
    title: "ADD"


};
Button.propTypes = {
    title: PropTypes.string,
    color: PropTypes.string,
}
export default Button