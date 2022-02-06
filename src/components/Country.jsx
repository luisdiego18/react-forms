import React, { Component } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Medals from "./Medals";

class Country extends Component {
	
	totalMedalsPerCountry = (medals, country) => {
		return medals.reduce(
			(acc, cur) => acc + country[cur.name],
			0
		);
	};

	render() {
		const {
			country,
			medals,
			onIncrement,
			onDecrement,
		} = this.props;
		return (
			<React.Fragment>
				<Card variant="outlined">
					<CardContent>
						<Typography gutterBottom variant="h4" color="error" align="center">
							{country.name}: {this.totalMedalsPerCountry(medals, country)}
						</Typography>
						{medals.map(medal => (
							<Medals
								country={country}
								key={medal.id}
								medal={medal}
								onIncrement={onIncrement}
								onDecrement={onDecrement}
							></Medals>
						))}
					</CardContent>
				</Card>
			</React.Fragment>
		);
	}
}

export default Country;
