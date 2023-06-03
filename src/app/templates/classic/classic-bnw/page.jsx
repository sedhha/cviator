'use client';
import React from 'react';
import classes from './styles.module.css';
import AddressDetails from './components/AddressDetails';
import MetaDetails from './components/MetaDetails';
import ProfessionalExperience from './components/ProfessionalExperience';
import Education from './components/Education';
import Skills from './components/Skills';
import Achievements from './components/TechnicalAchievements';
import Dialog from './components/Dialog';
import useGetEditContext from '@/hooks/useEditorContext';

const ClassicBnW = () => {
	const { firstName, lastName } = useGetEditContext();
	return (
		<div
			className={`${classes.container} ${
				false ? classes.container_printArea : ''
			}`}
		>
			<Dialog />
			<h1 className={`${classes.nameTitle}`}>
				{firstName} <strong>{lastName}</strong>
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
