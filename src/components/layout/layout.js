import React, {Component} from 'react';
import './layout.css';

class Layout extends Component {
    render() {
        return (
            <div className="layout">
                <div className="layout__aside">{this.props.nav}</div>
                <div className="layout__main">{this.props.main}</div>
                <div className="layout__aside">{this.props.aside}</div>
            </div>
        )
    }
}

export default Layout;
