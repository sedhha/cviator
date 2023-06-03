import classes from '../styles.module.css';

const achievements = [
	{
		pointer:
			'Second Runner Up at HackForGood: Grab Hackathon 2022 (June, 2022)',
		highlights: [],
	},
	{
		pointer:
			'Most Unique Submission at HackForGood: Grab Hackathon 2022 (June, 2022)',
		highlights: [],
	},
	{
		pointer: 'Community Mentoring App Award at Principal Hack (May, 2022)',
		highlights: [],
	},
	{
		pointer: 'GNEC Award at Mega Hack 2022 [Global NGO Prize] (Apr, 2022)',
		highlights: [],
	},
	{
		pointer: 'UiPath Innovation RPA Hackathon 2021 Top 7 Finalist (Dec, 2021)',
		highlights: [],
	},
	{
		pointer:
			'Honourable Mention [Live Peer API] at Spark Blockchain University Hack (Aug, 2020)',
		highlights: [],
	},
	{
		pointer:
			'Category Winner at FlutterThon-2020 [Have you tried Flutter?] (May, 2020)',
		highlights: [],
	},
	{
		pointer: 'Winner at UW Blockchain Hacks 2020 [Best Pitch] (May, 2020)',
		highlights: [],
	},
	{
		pointer:
			'Top 30 Team Qualifier Award at PennApps (University of Pennsylvania) (Sep, 2019)',
		highlights: [],
	},
	{
		pointer: ' Winner at Autodesk Designathon (Mar, 2019)',
		highlights: [],
	},
	{
		pointer:
			'Category award under best USE of HERE.COM API (HackHarvard-2018) (Oct, 2018)',
		highlights: [],
	},
	{
		pointer: 'Best AT&T technology innovation award (Jul, 2018)',
		highlights: [],
	},
	{
		pointer: 'Winner at summer Bio-fest (Apr, 2017)',
		highlights: [],
	},
	{
		pointer: 'Winner at reverse Engineering contest ASME (Jan, 2017)',
		highlights: [],
	},
	{
		pointer: '1st Runner up at Formula Balloon ASME contest (Sep, 2016)',
		highlights: [],
	},
	{
		pointer: 'Winner at Mechanical conference (ASME) (Sep, 2016)',
		highlights: [],
	},
	{
		pointer: 'Bronze medallist at Science Olympiad foundation (Oct, 2015)',
		highlights: [],
	},
	{
		pointer: 'All India Rank 28 in Junior mathematics Olympiad (Mar, 2015)',
		highlights: [],
	},
	{
		pointer: 'Silver medallist at Science Olympiad foundation (Nov, 2013)',
		highlights: [],
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
const Achievements = () => (
	<section data-testid='technical-achievements-section-classic-bnw'>
		<h1 className={classes.sideNameTitle}>Technical Achievements</h1>
		<div className={classes.ExperienceContainer}>
			<ul className={classes.UnOrderedListAch}>
				{achievements.map((item) => {
					return <li key={item.pointer} className={classes.bulletPoints}>{generateStrongText(item)}</li>;
				})}
			</ul>
		</div>
	</section>
);
export default Achievements;
