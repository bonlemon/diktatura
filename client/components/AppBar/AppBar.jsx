// Lybrary's
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

// Styles
import './AppBar.scss';


export default class AppBar extends React.Component {
    
    static propTypes = {
        className: PropTypes.string
    }

    getComponentClassNames(){
        const {
            className,
            collapsed
        } = this.props;

        return { 
            component: classNames(
                className ? className : '',
                'b-appbar'
            )
        } 
    }
    
    render(){
        const classes = this.getComponentClassNames();

        const { children } = this.props;

        return(
            <div className={ classes.component }>
                { children }
            </div>
        );
    }
}