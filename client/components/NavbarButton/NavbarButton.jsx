// Lybrary's
import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import classNames from 'classnames';

// Styles
import './NavbarButton.scss';



export default class NavbarButton extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            isOpend: false
        }
    }

    handlerOnCLick = () => {
        this.setState({
            isOpend: !this.state.isOpend
        })
    }

    getComponentClassNames() {
        const {isOpend} = this.state;

        return classNames(
            isOpend ? 'navbar-button--clicked' : null,
            'navbar-button'
        )
    }

    render() {

        return (
            <div className={this.getComponentClassNames()} onClick={this.handlerOnCLick}>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </div>
        );
    }
}