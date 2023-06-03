import classes from '../styles.module.css';
const metaDetails = [
	{
		title: 'Email',
		value: 'activity.schoolsh2@gmail.com',
		hyperLinked: true,
		hyperlinkedUrl: 'mailto:activity.schoolsh2@gmail.com',
	},
	{
		title: 'LinkedIn',
		value: 'shivamsahil',
		hyperLinked: true,
		hyperlinkedUrl: 'https://www.linkedin.com/in/shivam-sahil/',
	},
	{
		title: 'Github',
		value: 'sedhha',
		hyperLinked: true,
		hyperlinkedUrl: 'https://github.com/sedhha',
	},
	{
		title: 'Website',
		value: 'Shivam Sahil',
		hyperLinked: true,
		hyperlinkedUrl: 'https://shivam-sahil.vercel.app',
	},
	{
		title: 'Stack Overflow',
		value: 'Shivam Sahil',
		hyperLinked: true,
		hyperLinkedUrl: 'https://stackoverflow.com/users/8176451/shivam-sahil',
	},
];
const MetaDetails = () => (
	<section className={classes.metaDetails}>
		{metaDetails.map((details) => (
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

export default MetaDetails;
