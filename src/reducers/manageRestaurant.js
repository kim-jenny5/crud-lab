import cuid from "cuid";
export const cuidFn = cuid;

export default function manageRestaurants(
	state = { restaurants: [], reviews: [] },
	action
) {
	let review;

	switch (action.type) {
		case "ADD_RESTAURANT":
			const restaurant = { id: cuid(), text: action.text };
			return { ...state, restaurants: state.restaurants.concat(restaurant) };

		case "DELETE_RESTAURANT":
			const restaurants = state.restaurants.filter(
				(restaurant) => restaurant.id !== action.id
			);
			return { ...state, restaurants };

		case "ADD_REVIEW":
			review = {
				id: cuid(),
				text: action.review.text,
				restaurantId: action.review.restaurantId
			};
			return { ...state, reviews: state.reviews.concat(review) };

		case "DELETE_REVIEW":
			const reviews = state.reviews.filter((review) => review.id !== action.id);
			return { ...state, reviews };

		case "EDIT_REVIEW":
			const foundReview = state.reviews.filter(
				(review) => review.id === action.id
			);
			review = { ...foundReview, text: action.review.text };
			return { ...state, review };

		default:
			return state;
	}
}
