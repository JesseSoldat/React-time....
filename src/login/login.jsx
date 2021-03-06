import React, { Component } from 'react';

import firebase from 'firebase';

class Login extends Component {


	constructor(props){
		super(props)

		this.state = {
			email: '',
			pass: ''
		}

		this.onChangeEmail = this.onChangeEmail.bind(this);

		this.onChangePass = this.onChangePass.bind(this);

		this.handleSubmit = this.handleSubmit.bind(this);

	}

	componentWillMount(){

		firebase.auth().onAuthStateChanged(function(user){
			if(user){
				console.log(user);

			} else {
				console.log('no user');

			}
		
		});


	}
	onChangeEmail(e){
		this.setState({email: e.target.value});
		

	}

	onChangePass(e){
		this.setState({pass: e.target.value});
		
	}

	handleSubmit(e){
		e.preventDefault();
		let email = this.state.email;
		let pass = this.state.pass;

		firebase.auth().signInWithEmailAndPassword(email, pass).catch(function(err){
		});
	}

	render() {
		return (
		<div>
			<h3>Login</h3>
			<form onSubmit={this.handleSubmit}>
				<input type="text" placeholder="Email"
					value={this.state.email}
					onChange={this.onChangeEmail}
					required />
				<input type="text" placeholder="Password"
					value={this.state.pass}
					onChange={this.onChangePass}
					required />
				<button>Login</button>
			</form>
		</div>
		);
	}
}
export default Login;
