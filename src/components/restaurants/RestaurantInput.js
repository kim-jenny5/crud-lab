import React, { Component } from "react";

class RestaurantInput extends Component {
	state = {
		text: ""
	};

	handleChange = (e) => {
		this.setState({ text: e.target.value });
	};

	handleSubmit = (e) => {
		e.preventDefault();
		this.props.createRestaurant(this.state.text);
		this.setState({ text: "" });
	};

	render() {
		return (
			<div>
				Restaurants
				<form onSubmit={this.handleSubmit}>
					<input
						type="text"
						onChange={this.handleChange}
						value={this.state.text}
					></input>
					<input type="submit"></input>
				</form>
			</div>
		);
	}
}

export default RestaurantInput;
