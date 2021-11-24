import React, { Component } from "react";
import RestaurantInput from "../components/restaurants/RestaurantInput";
import Restaurants from "../components/restaurants/Restaurants";
import { connect } from "react-redux";

class RestaurantsContainer extends Component {
	render() {
		return (
			<div>
				<RestaurantInput createRestaurant={this.props.createRestaurant} />
				<Restaurants
					restaurants={this.props.restaurants}
					deleteRestaurant={this.props.deleteRestaurant}
				/>
			</div>
		);
	}
}

const mapStateToProps = (state) => ({ restaurants: state.restaurants });

const mapDispatchToProps = (dispatch) => ({
	createRestaurant: (text) => dispatch({ type: "ADD_RESTAURANT", text }),
	deleteRestaurant: (id) => dispatch({ type: "DELETE_RESTAURANT", id })
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(RestaurantsContainer);
