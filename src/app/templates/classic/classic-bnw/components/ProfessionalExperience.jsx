import { Fragment } from 'react';
import classes from '../styles.module.css';
import useGetEditContext from '@/hooks/useEditorContext';

function getMonthAndYear(timestamp) {
	const date = new Date(timestamp);
	const month = date.getMonth();
	const year = date.getFullYear();
	const months = [
		'Jan',
		'Feb',
		'Mar',
		'Apr',
		'May',
		'Jun',
		'Jul',
		'Aug',
		'Sep',
		'Oct',
		'Nov',
		'Dec',
	];
	return `${months[month]} ${year}`;
}

function generateStrongText(input) {
	const { pointer, highlights } = input;
	if (!highlights.length) return [<>{pointer}</>];
	const nodes = [];
	let remainingText = pointer;

	for (let highlight of highlights) {
		const startIndex = remainingText.indexOf(highlight);
		const endIndex = startIndex + highlight.length;

		if (startIndex >= 0) {
			if (startIndex > 0) {
				nodes.push(
					<Fragment> {remainingText.substring(0, startIndex)} </Fragment>
				);
			}
			nodes.push(<strong>{highlight}</strong>);
			remainingText = remainingText.substring(endIndex);
		}
	}

	if (remainingText.length > 0) {
		nodes.push(<Fragment> {remainingText} </Fragment>);
	}

	return nodes;
}
const ProfessionalExperience = () => {
	const { professionalExperience } = useGetEditContext();
	const parsed = JSON.parse(professionalExperience);
	return (
		<section data-testid='professional-experience-section-classic-bnw'>
			<h1 className={classes.sideNameTitle}>Professional Experience</h1>
			<div className={classes.ExperienceContainer}>
				{parsed.map(({ title, org, startDate, endDate, bullets }, ii) => {
					const startDateMonth = getMonthAndYear(startDate);
					const endDateMonth =
						endDate === -1 ? 'Present' : getMonthAndYear(endDate);
					return (
						<div
							key={title + org + ii}
							className={classes.experienceContainer}
						>
							<div className={classes.experienceContainer_topSection}>
								<div className={classes.ExpandibleRow}>
									<div className={classes.Row}>
										<h3 className={classes.experienceContainer_title}>
											{title},
										</h3>
										<h3 className={classes.experienceContainer_org}>
											{' ' + org}
										</h3>
									</div>
									<div className={classes.Row}>
										<h4 className={classes.DateElement}>{startDateMonth}</h4>
										<h5 className={classes.DateElement}>-</h5>
										<h4
											className={classes.DateElement}
											data-aria-details={`${endDate === -1}`}
										>
											{endDateMonth}
										</h4>
									</div>
								</div>
								<ul className={classes.UnOrderedList}>
									{(bullets ?? []).map((item, index) => (
										<li
											key={item.pointer + index}
											className={classes.bulletPoints}
										>
											{(generateStrongText(item) ?? []).map((Element, id) => (
												<Element.type
													{...Element.props}
													key={id}
												></Element.type>
											))}
										</li>
									))}
								</ul>
							</div>
						</div>
					);
				})}
			</div>
		</section>
	);
};
export default ProfessionalExperience;
