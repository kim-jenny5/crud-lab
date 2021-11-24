import React, { Component } from "react";

export default class ReviewEditInput extends Component {
	render() {
		console.log(this.props);
		return (
			<form>
				<input type="text"></input>
				<input type="submit" value="✅"></input>
			</form>
		);
	}
}
