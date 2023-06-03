import useGetEditContext from '@/hooks/useEditorContext';
import classes from '../styles.module.css';

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
const Education = () => {
	const { education } = useGetEditContext();
	const parsed = JSON.parse(education);
	return (
		<section data-testid='professional-experience-section-classic-bnw'>
			<h1 className={classes.sideNameTitle}>Education</h1>
			<div className={classes.ExperienceContainer}>
				{parsed.map(
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
											<li
												key={item.pointer}
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
					}
				)}
			</div>
		</section>
	);
};
export default Education;
