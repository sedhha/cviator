import useGetEditContext from '@/hooks/useEditorContext';
import classes from '../styles.module.css';

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
const Achievements = () => {
	const { achievements } = useGetEditContext();
	const parsed = JSON.parse(achievements);
	return (
		<section data-testid='technical-achievements-section-classic-bnw'>
			<h1 className={classes.sideNameTitle}>Technical Achievements</h1>
			<div className={classes.ExperienceContainer}>
				<ul className={classes.UnOrderedListAch}>
					{parsed.map((item) => {
						return (
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
						);
					})}
				</ul>
			</div>
		</section>
	);
};
export default Achievements;
