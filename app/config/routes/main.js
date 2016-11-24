import React, {Component, PropTypes} from 'react';


class Main extends Component {
    render() {
        console.log('app',this.props);
        return (
            <div>
                <div>{this.props.children}</div>
            </div>
        );
    }
}


export default Main;