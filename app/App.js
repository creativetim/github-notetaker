import React from 'react';
import ReactDOM from 'react-dom';
import Router from 'react-router';
import routes from './config/routes';

Router.run(routes, (Root, state) => {
	ReactDOM.render(<Root {...state} />, document.getElementById('app'));
});