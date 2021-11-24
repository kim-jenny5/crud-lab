import React, { Component } from "react";
import ReviewEditInput from "./ReviewEditInput";

class Review extends Component {
	handleClick = () => {
		this.props.deleteReview(this.props.review.id);
	};

	// handleEditInput = () => (
	// 	<ReviewEditInput
	// 		editReview={this.props.editReview}
	// 		handleEditInput={this.handleEditInput}
	// 	></ReviewEditInput>
	// );

	// // handleEdit = (e) => {
	// // 	this.setState({ text: e.target.value });
	// // };

	render() {
		const { review } = this.props;

		return (
			<div>
				<li>{review.text}</li>
				<button onClick={this.handleClick}> X </button>
				{/* <button onClick={this.handleEditInput}>Edit</button> */}
			</div>
		);
	}
}

export default Review;
