// Lybrary's
import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import classNames from 'classnames';

// Styles
import './NavbarButton.scss';



export default class NavbarButton extends React.Component {

    onCLick = () => {
        this.setState(({
            isOpend: !this.state.isOpend
        }))
    }

    render() {

        return (
            <div className="icon" onClick={this.onCLick}>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </div>
        );
    }
}