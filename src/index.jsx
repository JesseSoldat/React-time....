import React, { Component } from 'react';
import { render } from 'react-dom';
import { Router, Route, browserHistory, 
	IndexRoute } from 'react-router';

import firebase from 'firebase';
import fireConfig from './firebaseConfig.js';

firebase.initializeApp(fireConfig);

import Layout from './home/Layout.jsx';
import Home from './home/Home.jsx';
import Login from './login/Login.jsx';


render(
	<Router history={browserHistory}>
		<Route path="/" component={Layout}>
			<IndexRoute component={Home}/>
			<Route path="/login" component={Login} />
		</Route>
	</Router>,
	document.getElementById('container')


	);