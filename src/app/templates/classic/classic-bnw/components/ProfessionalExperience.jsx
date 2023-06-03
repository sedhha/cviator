import classes from '../styles.module.css';

const professionalExperiences = [
	{
		title: 'Software Engineer',
		org: 'Optum Inc, UnitedHealth Group',
		startDate: 1635705000000,
		endDate: -1,
		bullets: [
			{
				pointer:
					'Built recursion based nested JSON Editor UI to edit nested JSONs to any possible depth (React with TypeScript)',
				highlights: ['recursion', 'nested JSON Editor UI', 'JSONs'],
			},
			{
				pointer:
					'Migration of CMS from Contentful to Adobe Experience Manager (Scala Play Integration with GraphQL, HTTP Assets & Query Builder API)',
				highlights: ['CMS', 'Adobe Experience Manager'],
			},
			{
				pointer:
					'Datadog real time alert monitors for capturing and alerting on CI/CD of production apps.',
				highlights: ['Datadog'],
			},
			{
				pointer:
					'Integration of standalone React Native Module to bundle up with existing iOS App',
				highlights: ['React Native', 'iOS App'],
			},
			{
				pointer:
					'Migrated Context API based state management to Redux toolkit along with unmounting clean-up optimizations and reducing repetitive API calls',
				highlights: ['Context API', 'Redux toolkit'],
			},
			{
				pointer:
					'Deployed and created CI/CD pipelines for frontend and backend apps involving mocking calls, linting, unit testing, integration testing and e2e testing.',
				highlights: [
					'CI/CD pipelines',
					'mocking calls',
					'linting',
					'unit testing',
					'integration testing',
					'e2e testing',
				],
			},
		],
	},
	{
		title: 'Software Engineer',
		org: 'Yoptima Media Pvt Ltd',
		startDate: 1578853800000,
		endDate: 1635705000000,
		bullets: [
			{
				pointer:
					'End to End Analytics based Campaign Performance App (React + Express + Fast API & secured using google oAuth)',
				highlights: [],
			},
			{
				pointer:
					'End to End User-manager & Alert Monitor Web App (React + (Express and Flask) & secured with JWT Authentication)',
				highlights: [
					'User-manager & Alert Monitor Web App',
					'JWT Authentication',
				],
			},
			{
				pointer:
					'RESTful APIs to generate automated emails and alerts and developed tools to make data driven decisions.',
				highlights: [],
			},
			{
				pointer:
					'End-to-end reporting Automation using Apache Superset, Google Big Query, Google Appscript and Google Data Studio.',
				highlights: [
					'Apache Superset',
					'Google Big Query',
					'Google Appscript',
					'Google Data Studio',
				],
			},
		],
	},
	{
		title: 'Robotics & Programming Mentor',
		org: 'eckovation pvt. ltd.',
		startDate: 1562956200000,
		endDate: 1594578600000,
		bullets: [
			{
				pointer:
					'Joined as a Matlab Programming mentor and later promoted to Robotics, IoT, Solidworks, Ansys, C, C++, etc. mentor.',
				highlights: [],
			},
			{
				pointer:
					'Defined and articulated learning outcomes, including measurements, performance metrics and changes to improve student learning.',
				highlights: [],
			},
			{
				pointer:
					'Took Doubt Sessions on Robotics, IoT, Matlab, SolidWorks, Ansys, etc. to classes of around 100+ students.',
				highlights: [],
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
const ProfessionalExperience = () => (
	<section data-testid='professional-experience-section-classic-bnw'>
		<h1 className={classes.sideNameTitle}>Professional Experience</h1>
		<div className={classes.ExperienceContainer}>
			{professionalExperiences.map(
				({ title, org, startDate, endDate, bullets }) => {
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
									{(bullets ?? []).map((item) => (
										<li key={item.pointer}>{generateStrongText(item)}</li>
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
export default ProfessionalExperience;
