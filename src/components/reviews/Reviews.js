import React, { Component } from "react";
import Review from "./Review";

class Reviews extends Component {
	render() {
		const filteredReviews = this.props.reviews.filter(
			(review) => review.restaurantId === this.props.restaurantId
		);

		return (
			<ul>
				{filteredReviews.map((review) => (
					<Review
						key={review.id}
						review={review}
						deleteReview={this.props.deleteReview}
						editReview={this.props.editReview}
					></Review>
				))}
			</ul>
		);
	}
}

export default Reviews;
