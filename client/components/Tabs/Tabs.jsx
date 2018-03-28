// Lybrary's
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import classNames from 'classnames';

// Components
import Tab from './Tab.jsx';

// Styles
import './Tabs.scss';



export default class Tabs extends React.Component {

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
            'b-tabs'
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
                        return <li className="b-tabs__item" key={i} >
                                    <Tab
                                        id={item.id}
                                        className={item.className}
                                        label={item.label}
                                        url={item.url}
                                        replace={replace}
                                    />
                                </li>
                    })
                }
            </ul>
        );
    }
}