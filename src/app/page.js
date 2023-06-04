import TemplateCard from '@/components/TemplateCard';
import styles from './page.module.css';

export default function Home() {
	return (
		<main className='body'>
			<h1 className='heading'>Welcome to CViator</h1>
			<h2 className='h2'>
				Build your CV with JSON browsing through 1000s of re-usable templates!
			</h2>
			<br />
			<div className={styles.Grid}>
				<TemplateCard src={'/sample.png'} />
				<TemplateCard src={'/sample.png'} />
				<TemplateCard src={'/sample.png'} />
				<TemplateCard src={'/sample.png'} />
				<TemplateCard src={'/sample.png'} />
				<TemplateCard src={'/sample.png'} />
				<TemplateCard src={'/sample.png'} />
				<TemplateCard src={'/sample.png'} />
			</div>
		</main>
	);
}
