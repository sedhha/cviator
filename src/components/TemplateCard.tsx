import React from 'react';
import Image from 'next/image';
import classes from './TemplateCard.module.css';
import Link from 'next/link';

const TemplateCard = ({ src, alt }: { src: string; alt: string }) => (
	<div className={classes.card}>
		<Link href={'/templates/classic/classic-bnw'}>
			<Image
				src='/sample.png'
				width={500}
				height={500}
				alt='Picture of the author'
			/>
		</Link>
	</div>
);

export default TemplateCard;
