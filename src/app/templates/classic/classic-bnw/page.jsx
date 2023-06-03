import React from 'react';
import classes from './styles.module.css';
import AddressDetails from './components/AddressDetails';
import MetaDetails from './components/MetaDetails';
import ProfessionalExperience from './components/ProfessionalExperience';

const ClassicBnW = () => {
	return (
		<div className={classes.container}>
			<h1 className={`${classes.nameTitle}`}>
				Shivam <strong>Sahil</strong>
			</h1>
			<AddressDetails />
			<MetaDetails />
			<ProfessionalExperience />
		</div>
	);
};

export default ClassicBnW;