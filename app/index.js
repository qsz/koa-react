import React, {Component, PropTypes} from 'react';
import ReactDOM, {render} from 'react-dom';
import {Provider} from 'react-redux';
import routeConfig from './config/route'; //路由配置
import store from './config/store';

import '../public/stylesheets/reset.css';


ReactDOM.render(
    <Provider store={store}>
        {routeConfig}
    </Provider>,
    document.getElementById('app')
)
