import classes from '../styles.module.css';

const educations = [
	{
		title: 'B-Tech in Mechanical Engineering',
		org: 'Vellore Institute of Technology',
		gradeTotal: 10,
		gradeScored: 8.87,
		startDate: 1471026600000,
		endDate: 1597257000000,
		bullets: [
			{
				pointer:
					'Programming Coursework: Computational Fluid Dynamics | Computer Vision | DSA and OOP | Numerical Simulation',
				highlights: ['Programming Coursework:'],
			},
			{
				pointer:
					'ME Coursework: CAD | CAM | 3D Simulation | Additive Manufacturing | Lathe Tools | Rapid Prototyping | Product Design',
				highlights: ['ME Coursework:'],
			},
			{
				pointer:
					'Co-Curricular: Radio Hosting and Production | Space Exploration Robotics Club | Technical Event Organizer & Volunteer',
				highlights: ['Co-Curricular:'],
			},
		],
	},
	{
		title: 'senior secondary education [12th grade]',
		org: 'kendriya vidyalaya ina, new delhi',
		startDate: 1434133800000,
		endDate: 1465756200000,
		bullets: [
			{
				pointer:
					'CBSE Board | 93.2% Marks | Science Stream [PCM + Computer Science] | Junior Mathematical Olympiad (AIR 28)',
				highlights: ['Junior Mathematical Olympiad (AIR 28)'],
			},
		],
	},
	{
		title: 'senior secondary education [10th grade]',
		org: 'kendriya vidyalaya ina, new delhi.',
		startDate: 1371061800000,
		endDate: 1402597800000,
		bullets: [
			{
				pointer:
					'CBSE Board | 9.6 CGPA | General Studies | SOF – Science Olympiad (Silver & Bronze Medallist)',
				highlights: ['(Silver & Bronze Medallist)'],
			},
		],
	},
];

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
				nodes.push(<> {remainingText.substring(0, startIndex)} </>);
			}
			nodes.push(<strong>{highlight}</strong>);
			remainingText = remainingText.substring(endIndex);
		}
	}

	if (remainingText.length > 0) {
		nodes.push(<> {remainingText} </>);
	}

	return nodes;
}
const Education = () => (
	<section data-testid='professional-experience-section-classic-bnw'>
		<h1 className={classes.sideNameTitle}>Education</h1>
		<div className={classes.ExperienceContainer}>
			{educations.map(
				({
					title,
					org,
					startDate,
					endDate,
					bullets,
					gradeScored,
					gradeTotal,
				}) => {
					const startDateMonth = getMonthAndYear(startDate);
					const endDateMonth =
						endDate === -1 ? 'Present' : getMonthAndYear(endDate);
					return (
						<div
							key={title + org}
							className={classes.experienceContainer}
						>
							<div className={classes.experienceContainer_topSection}>
								<div className={classes.ExpandibleRow}>
									<div className={classes.Row}>
										<h3 className={classes.educationContainer_title}>
											{title},
										</h3>
										<h3 className={classes.educationContainer_org}>
											{' ' + org}
										</h3>
										{(gradeScored && gradeTotal) != undefined && (
											<h3
												className={classes.educationContainer_org}
											>{` [${gradeScored}/${gradeTotal}]`}</h3>
										)}
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
									{(bullets ?? []).map((item) => (
										<li key={item.pointer} className={classes.bulletPoints}>{generateStrongText(item)}</li>
									))}
								</ul>
							</div>
						</div>
					);
				}
			)}
		</div>
	</section>
);
export default Education;
