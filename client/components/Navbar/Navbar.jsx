// Lybrary's
import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import classNames from 'classnames';

// Styles
import './Navbar.scss';



export default class Navbar extends React.Component {

    static propTypes = {
        className:  PropTypes.string,
        items:      PropTypes.array.isRequired,
        replace:    PropTypes.bool
    }

    static defaultProps = {
        items:      [],
        replace:    false
    };    

    getComponentClassNames() {
        const {className} = this.props;

        return classNames(
            className ? className : '',
            'b-navbar'
        )
    }
    render() {
        const {
            items,
            replace
        } = this.props;

        return (
            <ul className={this.getComponentClassNames()}>
                {
                    items.map((item, i) => {
                        return <li className="b-navbar__item" key={i} >
                                    <NavLink
                                        id={item.id}
                                        className="b-navbar__link"
                                        to={item.url}
                                        replace={replace}
                                        activeClassName="b-navbar__link--active"
                                        exact
                                    >
                                            { item.label }
                                    </NavLink>
                                </li>
                    })
                }
            </ul>
        );
    }
}