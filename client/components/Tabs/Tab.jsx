// Lybrary's
import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import classNames from 'classnames';

// Styles
import './Tab.scss';



export default class Tab extends React.Component {
    
    static propTypes = {
        id: PropTypes.string,
        className: PropTypes.string,
        label: PropTypes.string.isRequired,
        url: PropTypes.string.isRequired
    }

    static defaultProps = {
        label: '',
        url: '/app'
    }

    getComponentClassNames(){
        const {
            className,
            type
        } = this.props;

        return { 
            component: classNames(
                className ? className : '',
                'b-tab'
            )
        } 
    }
    render(){
        const classes = this.getComponentClassNames();

        const {
            id,
            label,
            url,
            replace,
            className
        } = this.props;

        return(
            <NavLink
                id={id}
                exact
                to={ url }
                className={ classes.component }
                activeClassName="b-tab--active"
                replace={replace}
            >
                <span className={`b-tab__label ${className}`}>
                    { label }
                </span>
                <div className="b-tab__slide"></div>
            </NavLink>
        );
    }
}