import { Router, Route, hashHistory,browserHistory,IndexRoute, Link, IndexLink ,IndexRedirect,Redirect } from 'react-router';
import React, {Component, PropTypes} from 'react';

//路由文件
import Home from './routes/home';
import Asd from './routes/home/asd'
import NotFound from './routes/404'

class App extends Component {
    render() {
        return (
            <div>
                <div>{this.props.default}</div>
            </div>
        );
    }
}

const RouteConfig = (
    <Router history={browserHistory}>
        <Route path="/"  component={App}>
            <IndexRoute getComponent={Home} />
            <Route path="folk" getComponent={Asd} />
            <Route path="movie" getComponent={Asd} />
            <Route path="*" getComponent={NotFound} />
        </Route>


    </Router>
);


export default RouteConfig;