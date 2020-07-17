import React from 'react';

class Main extends React.Component {

	state = {
		username: ''
	}

	handleChange = (e) => {
		e.preventDefault()
		const {name, value} = e.target;
		this.setState({
			[name]: value
		})
	}

	handleClick = () => {
		this.props.changeUsername(this.state.username);
		this.setState({username: ''})
	}


	render() {
		return (
			<div>
				<div className="row" >
					<div className="col-xs-12" >
						<h1>The Main Page</h1>
					</div>
				</div>

				<div className="row" >
					<div className="col-xs-12" >
						<input name="username" value={this.state.username} onChange={this.handleChange} type="text" className="form-control mb-2 input-lg form-control-sm" placeholder="enter name..." />
						<button className='btn btn-primary' onClick={this.handleClick} >
							Change the Username
						</button>
					</div>
				</div>

			</div>
		)
	}
}

export default Main;