import React, {Component} from 'react';
import { connect } from 'react-redux';
import './overlay.css';

class Overlay extends Component {
    render() {
        return (
            <div className={!this.props.isOverlayOpened ? 'overlay' : 'overlay overlay_active'}>{this.props.children}</div>
        )
    }
}

const mapStateToProps = (state) => {
    return { isOverlayOpened: state.isOverlayOpened }
}

export default connect(mapStateToProps, null)(Overlay);
