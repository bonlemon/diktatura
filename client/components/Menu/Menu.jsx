// Lybrary's
import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import classNames from 'classnames';

// Styles
import './Menu.scss';



export default class Menu extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            isOpend:false
        }
    }

    static propTypes = {
        className:  PropTypes.string,
        items:      PropTypes.array.isRequired,
        replace:    PropTypes.bool
    }

    static defaultProps = {
        items:      [],
        replace:    false
    };    
    onCLick = () => {
        this.setState(({
            isOpend: !this.state.isOpend
        }))
    }

    getComponentClassNames() {
        const {isOpend} = this.state;

        return classNames(
            isOpend ? 'b-menu--open' : 'b-menu'
        )
    }
    render() {
        const {
            items,
            replace
        } = this.props;

        // <ul className={this.getComponentClassNames()}>
        //     {
        //         items.map((item, i) => {
        //             return <li className="b-menu__item" key={i} >
        //                         <NavLink
        //                             id={item.id}
        //                             className="b-menu__link"
        //                             to={item.url}
        //                             replace={replace}
        //                             activeClassName="b-menu__link--active"
        //                             exact
        //                         >
        //                                 { item.label }
        //                         </NavLink>
        //                     </li>
        //         })
        //     }
        // </ul>
        return (


            <div className={this.getComponentClassNames()}>
                <div className="icon" onClick={this.onCLick}>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <div className="items">
                    <div className="b-menu__item">Home</div>
                    <div className="b-menu__item">Contact</div>
                    <div className="b-menu__item">About</div>
                </div>
            </div>
        );
    }
}