import React, {Component} from 'react';
import './tweet.css';

class Tweet extends Component {

    parseTimeshtamp(timestamp) {
        let time = Math.round( Date.now() / 1000 ) - timestamp;

        if( time < 3600 * 24 )
            time = Math.round( time / 3600 ) > 1 ? Math.round( time / 3600 ) + ' ч' : Math.round( time / 60 ) + 'м';

        else
            time = '1 января 1970 года';

        // time = Math.round( time  / ( 3600 * 24 ) ) + ' дн. назад';

        return time;
    }

    render() {
        return (
            <div className="tweet" key={this.props.id}>
                <div className="tweet__head">
                    <div className="tweet__avatar" style={ {backgroundImage: 'url(https://i.pravatar.cc/100?u='+this.props.login+')'} }></div>
                </div>
                <div className="tweet__body">
                    <div className="tweet__meta">
                        <div className="tweet__author">{this.props.author}</div>
                        <div className="tweet__login">{this.props.login}</div>
                        <div className="tweet__date">{this.parseTimeshtamp(this.props.date)}</div>
                    </div>
                    <div className="tweet__text">{this.props.text}</div>
                </div>
            </div>
        )
    }
}

export default Tweet;
