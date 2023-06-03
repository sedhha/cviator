import useGetEditContext from '@/hooks/useEditorContext';
import classes from '../styles.module.css';

const MetaDetails = () => {
	const { metaDetails } = useGetEditContext();
	const parsed = JSON.parse(metaDetails);
	return (
		<section className={classes.metaDetails}>
			{parsed.map((details) => (
				<div key={details.title}>
					<h2 className={classes.Address}>
						{details.title}:
						<span>
							{' '}
							{details.hyperLinked ? (
								<a
									className={classes.hoverEffect}
									href={details.hyperlinkedUrl}
								>
									{details.value}
								</a>
							) : (
								details.value
							)}
						</span>
					</h2>
				</div>
			))}
		</section>
	);
};

export default MetaDetails;
