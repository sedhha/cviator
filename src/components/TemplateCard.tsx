import React from 'react';
import Image from 'next/image';
import classes from './TemplateCard.module.css';

const TemplateCard = ({ src, alt }: { src: string; alt: string }) => (
	<div className={classes.card}>
		<Image
			src='/sample.png'
			width={500}
			height={500}
			alt='Picture of the author'
		/>
	</div>
);

export default TemplateCard;
