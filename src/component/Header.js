import PropTypes from 'prop-types'
import { useLocation } from 'react-router';
import React from 'react'
import Button from './Button.js';
const Header = ({ title, onAdd, showAddTask }) => {
    const Location=useLocation()
    return (
        <header className="header">
            <h2>{title}</h2>
            {Location.pathname==='/' && (<Button
                color={showAddTask ? 'red' : 'green'}
                title={showAddTask ? 'Close' : 'Add'}
                onClick={onAdd} />)}
        </header>

    )
}
Header.defaultProps = {
    title: "Task Tracker"
};
Header.propTypes = {
    title: PropTypes.string.isRequired,
}
export default Header
