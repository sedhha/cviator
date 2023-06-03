'use client';
import React from 'react';
import classes from './styles.module.css';
import AddressDetails from './components/AddressDetails';
import MetaDetails from './components/MetaDetails';
import ProfessionalExperience from './components/ProfessionalExperience';
import Education from './components/Education';
import Skills from './components/Skills';
import Achievements from './components/TechnicalAchievements';
import { useState } from 'react';

const ClassicBnW = () => {
	const [inPrintMode, setInPrintMode] = useState(false);
	return (
		<div
			className={`${classes.container} ${
				inPrintMode ? classes.container_printArea : ''
			}`}
		>
			<h1 className={`${classes.nameTitle}`}>
				Shivam <strong>Sahil</strong>
			</h1>
			<AddressDetails />
			<MetaDetails />
			<ProfessionalExperience />
			<Education />
			<Skills />
			<Achievements />
			<h2 className={classes.References}>References available on request </h2>
		</div>
	);
};

export default ClassicBnW;
