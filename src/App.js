import React, { Component } from "react";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Country from "./components/Country";
import NewCountry from "./components/NewCountry";
import Typography from "@mui/material/Typography";
import "./App.css";

class App extends Component {
	state = {
		countries: [
			{
				id: 1,
				name: "United States",
				gold: 3,
				silver: 2,
				bronze: 0,
			},
			{
				id: 2,
				name: "China",
				gold: 1,
				silver: 0,
				bronze: 1,
			},
			{
				id: 3,
				name: "Germany",
				gold: 0,
				silver: 2,
				bronze: 3,
			},
		],
		medals: [
			{ id: 1, name: "gold" },
			{ id: 2, name: "silver" },
			{ id: 3, name: "bronze" },
		],
	};

	//methods
	//handle gold medal increment
	handleIncrement = (countryId, medalName) => {
		console.log("clicked increment", countryId, medalName);

		const countriesMutable = [...this.state.countries];
		const index = countriesMutable.findIndex(c => c.id === countryId);
		countriesMutable[index][medalName] += 1;

		this.setState({ countries: countriesMutable });
	};

	handleDecrement = (countryId, medalName) => {
		console.log("clicked decrement", countryId, medalName);

		const countriesMutable = [...this.state.countries];
		const index = countriesMutable.findIndex(c => c.id === countryId);
		countriesMutable[index][medalName] -= 1;

		this.setState({ countries: countriesMutable });
	};

	handleMedalCount = () => {
		const gold = this.state.countries.reduce((acc, cur) => acc + cur.gold, 0);
		const silver = this.state.countries.reduce(
			(acc, cur) => acc + cur.silver,
			0
		);
		const bronze = this.state.countries.reduce(
			(acc, cur) => acc + cur.bronze,
			0
		);
		const totalMedals = gold + silver + bronze;
		return totalMedals;
	};

	handleAddCountry = (name) => {
		const { countries } = this.state;
		const id = countries.length === 0 ? 1 : Math.max(...countries.map(country => country.id)) + 1;
		const mutableCountries = [...countries].concat({ id: id, name: name, gold: 0, silver: 0, bronze: 0 });
		this.setState({ countries: mutableCountries });
	  }

	render() {
		const { medals } = this.state;
		return (
			<div className="App">
				<Container>
					<Typography gutterBottom variant="h2" color="primary" align="center">
						{`Olympic Medals: `}
						{this.handleMedalCount()}
					</Typography>
					<Grid container spacing={3} sx={{ my: 2 }}>
						{this.state.countries.map(country => (
							<Grid item xs={12} md={6} lg={4} key={country.id}>
								<Country
									medals={medals}
									country={country}
									onIncrement={this.handleIncrement}
									onDecrement={this.handleDecrement}
								/>
							</Grid>
						))}
					</Grid>
					<NewCountry onAddCountry={this.handleAddCountry}/>
				</Container>
			</div>
		);
	}
}

export default App;
