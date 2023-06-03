import useGetEditContext from '@/hooks/useEditorContext';
import classes from '../styles.module.css';
const AddressDetails = () => {
    const {address, number} = useGetEditContext();
	return (
		<section className={classes.AddressCredentials}>
			<div>
				<h2 className={classes.Address}>{address}</h2>
			</div>
			<div>
				<h2 className={classes.phoneNumber}>{number}</h2>
			</div>
		</section>
	);
};
export default AddressDetails;
