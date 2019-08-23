import React, {Component} from 'react';
import { connect } from 'react-redux';
import './editor.css';

class Editor extends Component {

    addTweet(e) {
        if(this.textarea.value != '') {
            let payload = {
                id: Date.now(),
                text: this.textarea.value,
                author: this.props.author,
                login: this.props.login,
                date: Date.now() / 1000
            };

            this.props.dispatch({type: 'ADDTWEET', payload: payload })

            this.props.dispatch({type: 'TOGGLEOVERLAY'})
        }
    }

    render() {
        return (
            <div className="editor">
                <div className="editor__head">
                    <div className="editor__close"  onClick={ e => this.props.dispatch({type: 'TOGGLEOVERLAY'}) }>✖</div>
                    <div className="editor__submit" onClick={ this.addTweet.bind(this) }>Твитнуть</div>
                </div>
                <div className="editor__body">
                    <textarea className="editor__textarea" ref={el => this.textarea = el} placeholder="Что происходит?" maxLength="150"></textarea>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        author: state.author,
        login: state.login
    };
}

export default connect(mapStateToProps, null)(Editor);
