import React from 'react';

import Sidebar from '../Sidebar';

import './Section.scss';


class Section extends React.Component {
    render() {
        return (
            <div> 
                <section class="slider">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-3">
                                <img src="" alt=""/>
                            </div>
                        </div>
                    </div>
                </section>
                <section>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-3">
                                <Sidebar />
                            </div>
                            <div className="col-md-9">
                                {/* <SectionRouter /> */}
                            </div>
                        </div>
                    </div>
                </section>
                
            </div>
        )
    }
}

export default Section;