import React, { Component } from 'react';

class Login extends Component {
	render() {
		return (
		<div>
			<form>
				<input type="text" placeholder="Email" />
				<input type="text" placeholder="Password" />
				<button>Login</button>
			</form>
		</div>
		);
	}
}
export default Login;