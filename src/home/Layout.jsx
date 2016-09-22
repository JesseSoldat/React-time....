import React, { Component } from 'react';
import { Link, IndexLink } from 'react-router';
import firebase from 'firebase';

class Layout extends Component {

	logout(){
		firebase.auth().signOut().then(function(){

		}, function(err){

		});

	}

	render(){
		return(
		<div>
			<nav className="navbar navbar-default">
				<div className="container fluid">
					<div className="navbar-header">
						<a className="navbar-brand" href="#">JLab</a>
					</div>

					<div className="collapse navbar-collapse">
						<ul className="nav navbar-nav">
							<li>
								<IndexLink to="/">Home</IndexLink>
							</li>
							<li>
								<Link to="/login">Login</Link>
							</li>
							<li onClick={this.logout}>
								<Link>Logout</Link>
							</li>
						</ul>
					</div>


				</div>

			</nav>
			{this.props.children}
		</div>

		)
	}
}
export default Layout;