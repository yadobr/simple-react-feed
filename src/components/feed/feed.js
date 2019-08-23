import React, {Component} from 'react';
import { connect } from 'react-redux';
import './feed.css';
import Tweet from '../tweet';
import Overlay from '../overlay';
import Editor from '../editor';

class Feed extends Component {
    render() {
        return (
            <div className="feed">
                <div className="feed__head">
                    <div className="feed__tweet">
                        <div className="feed__input" onClick={ e => this.props.dispatch({type: 'TOGGLEOVERLAY'}) }>Что происходит?</div>
                        <Overlay>
                            <Editor/>
                        </Overlay>
                    </div>
                </div>
                <div className="feed__body">
                    {this.props.tweets.sort( (a, b) => b.date - a.date ).map( tweet =>
                        <Tweet
                            key   ={tweet.id}
                            date  ={tweet.date}
                            text  ={tweet.text}
                            login ={tweet.login}
                            author={tweet.author}
                        />
                    )}
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        tweets: state.tweets,
        isOverlayOpened: state.isOverlayOpened
    };
}
export default connect(mapStateToProps, null)(Feed);
