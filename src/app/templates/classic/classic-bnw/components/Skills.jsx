import classes from '../styles.module.css';

const skills = [
	{
		pointer:
			'Programming Languages: TypesScript | JavaScript | Python | Scala | Matlab | C++',
		highlights: [
			'TypesScript',
			'JavaScript',
			'Python',
			'Scala',
			'Matlab',
			'C++',
		],
	},
	{
		pointer:
			'Tools: CI/CD | AEM | Datadog | Contentful | Firebase | GitHub Actions | Unit Testing | E2E and Integration Testing | Serverless',
		highlights: [
			'CI/CD',
			'AEM',
			'Datadog',
			'Contentful',
			'Firebase',
			'Unit Testing',
			'E2E and Integration Testing',
			'Serverless',
		],
	},
	{
		pointer:
			'Frameworks: NEXT JS | React JS | React Native | Scala-Play | Node JS | Appscript | Flask | Fast API | Redux Toolkit | Sass | Tailwind | Jest',
		highlights: [
			'NEXT JS',
			'React JS',
			'React Native',
			'Scala-Play',
			'Node JS',
			'Appscript',
			'Flask',
			'Fast API',
			'Redux Toolkit',
			'Sass',
			'Tailwind',
			'Jest',
		],
	},
	{
		pointer:
			'Technologies: Google Cloud | Authentication Protocols | JWT | Intuit QuickBooks | Datadog | Web Sockets | GraphQL | RESTful Protocols | SQL | Google Big Query | Cloud Functions | Docker Containerization',
		highlights: [
			'Google Cloud',
			'Authentication Protocols',
			'JWT',
			'Intuit QuickBooks',
			'Datadog',
			'Web Sockets',
			'GraphQL',
			'RESTful Protocols',
			'SQL',
			'Google Big Query',
			'Cloud Functions',
			'Docker Containerization',
		],
	},
	{
		pointer:
			'Hardware: Microcontroller Raspberry Pi | (Arduino + Nodemcu) | Intel Galileo | Basler TOF Cam',
		highlights: [
			'Microcontroller Raspberry Pi',
			'Arduino',
			'Nodemcu',
			'Intel Galileo',
			'Basler TOF Cam',
		],
	},
];

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
const Skills = () => (
	<section data-testid='skills-section-classic-bnw'>
		<h1 className={classes.sideNameTitle}>Skills</h1>
		<div className={classes.ExperienceContainer}>
			<ul className={classes.UnOrderedList}>
				{skills.map((item) => {
					return <li key={item.pointer} className={classes.bulletPoints}>{generateStrongText(item)}</li>;
				})}
			</ul>
		</div>
	</section>
);
export default Skills;
