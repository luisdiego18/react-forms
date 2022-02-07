import React, { Component } from "react";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

class NewCountry extends Component {
	state = {
		open: false,
		country: "",
	};

	handleChange = e => this.setState({ [e.target.name]: e.target.value });

	// saveCountry = () => {
	// 	this.props.onAddCountry(this.state.country);
	// };

	handleClickOpen = () => {
		this.setState({ open: true });
	};

	handleClose = () => {
		this.setState({ open: false });
	};

	saveCountry = () => {
		const country = prompt('Enter country name');
		  this.props.onAddCountry(country);
	  }

	render() {
		const { open, country } = this.state;

		return (
			<div className="new-country">
				<div className="newCountryButton">
				<Fab color="primary" aria-label="add" onClick={this.saveCountry}>
					<AddIcon />
				</Fab>
				</div>

				{/* <Fab color="primary" aria-label="add" onClick={this.handleClickOpen}>
					<AddIcon />
				</Fab>
				<Dialog open={open} onClose={this.handleClose}>
						<DialogTitle>Add Country</DialogTitle>
						<DialogContent>
							<DialogContentText>
								To add a new country, enter the name
							</DialogContentText>
							<TextField
								autoFocus
								type="text"
								id="country"
								name="country"
								v-model={country}
								label="Country Name"
								margin="dense"
								fullWidth
								variant="standard"
							/>
						</DialogContent>
						<DialogActions>
							<Button onClick={this.handleClose}>Cancel</Button>
							<Button
								// disabled={country.trim().length === 0}
								onClick={this.saveCountry}
							>
								Save
							</Button>
						</DialogActions>
				</Dialog> */}
			</div>
		);
	}
}

export default NewCountry;
