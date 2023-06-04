import classes from '../styles.module.css';
import useGetEditContext from '@/hooks/useEditorContext';
const Dialog = () => {
	const {
		editMode,
		firstName,
		lastName,
		address,
		number,
		metaDetails,
		professionalExperience,
		skills,
		setSkills,
		education,
		achievements,
		setAchievements,
		setEducation,
		setFirstName,
		setLastName,
		setAddress,
		setNumber,
		setEditMode,
		setMetaDetails,
		setProfessionalExperience,
	} = useGetEditContext();

	const formatContent = (input, setterFunction) => {
		try {
			const parsed = JSON.parse(input);
			const formatted = JSON.stringify(parsed, null, 4);
			setterFunction(formatted);
		} catch (e) {
			return;
		}
	};
	const closeEditMode = () => {
		setEditMode(false);
	};
	return (
		<dialog
			open={editMode}
			className={classes.EditorDialog}
		>
			<h2 className={classes.dialogTitle}>
				Update JSON to modify your resume.
			</h2>
			<div className={classes.EditDialogContent}>
				<div className={classes.DialogInputField}>
					<div>
						<label className={classes.Label}>Name: </label>
						<input
							value={firstName}
							className={classes.DialogInputFieldInput}
							onChange={(e) => setFirstName(e.target.value)}
						/>
					</div>
					<div>
						<label className={classes.Label}>Last Name: </label>
						<input
							value={lastName}
							className={classes.DialogInputFieldInput}
							onChange={(e) => setLastName(e.target.value)}
						/>
					</div>
				</div>
				<div className={classes.DialogInputField}>
					<div>
						<label className={classes.Label}>Number: </label>
						<input
							value={number}
							className={classes.DialogInputFieldInput}
							onChange={(e) => setNumber(e.target.value)}
						/>
					</div>
					<div>
						<label className={classes.Label}>Address: </label>
						<input
							value={address}
							className={classes.DialogInputFieldInput}
							onChange={(e) => setAddress(e.target.value)}
						/>
					</div>
				</div>
				<div className={classes.DialogInputFieldItem}>
					<div className={classes.LabelAndButton}>
						<label className={classes.Label}>MetaDetails: </label>
						<button
							className='buttonClass'
							onClick={() => formatContent(metaDetails, setMetaDetails)}
						>
							Format JSON
						</button>
					</div>
					<textarea
						rows={10}
						value={metaDetails}
						className={classes.DialogInputFieldInput}
						onChange={(e) => {
							try {
								JSON.parse(e.target.value);
								setMetaDetails(e.target.value);
							} catch (e) {}
						}}
					/>
				</div>
				<div className={classes.DialogInputFieldItem}>
					<div className={classes.LabelAndButton}>
						<label className={classes.Label}>Professional Details: </label>
						<button
							className='buttonClass'
							onClick={() =>
								formatContent(professionalExperience, setProfessionalExperience)
							}
						>
							Format JSON
						</button>
					</div>
					<textarea
						rows={10}
						value={professionalExperience}
						className={classes.DialogInputFieldInput}
						onChange={(e) => {
							try {
								JSON.parse(e.target.value);
								setProfessionalExperience(e.target.value);
							} catch (e) {}
						}}
					/>
				</div>
				<div className={classes.DialogInputFieldItem}>
					<div className={classes.LabelAndButton}>
						<label className={classes.Label}>Education Details: </label>
						<button
							className='buttonClass'
							onClick={() => formatContent(education, setEducation)}
						>
							Format JSON
						</button>
					</div>
					<textarea
						rows={10}
						value={education}
						className={classes.DialogInputFieldInput}
						onChange={(e) => {
							try {
								JSON.parse(e.target.value);
								setEducation(e.target.value);
							} catch (e) {}
						}}
					/>
				</div>
				<div className={classes.DialogInputFieldItem}>
					<div className={classes.LabelAndButton}>
						<label className={classes.Label}>Skills: </label>
						<button
							className='buttonClass'
							onClick={() => formatContent(skills, setSkills)}
						>
							Format JSON
						</button>
					</div>
					<textarea
						rows={10}
						value={skills}
						className={classes.DialogInputFieldInput}
						onChange={(e) => {
							try {
								JSON.parse(e.target.value);
								setSkills(e.target.value);
							} catch (e) {}
						}}
					/>
				</div>
				<div className={classes.DialogInputFieldItem}>
					<div className={classes.LabelAndButton}>
						<label className={classes.Label}>Achievement Details: </label>
						<button
							className='buttonClass'
							onClick={() => formatContent(achievements, setAchievements)}
						>
							Format JSON
						</button>
					</div>
					<textarea
						rows={10}
						value={achievements}
						className={classes.DialogInputFieldInput}
						onChange={(e) => {
							try {
								JSON.parse(e.target.value);
								setAchievements(e.target.value);
							} catch (e) {}
						}}
					/>
				</div>
			</div>
			<br />
			<button
				className='btn'
				onClick={closeEditMode}
			>
				Save Changes
			</button>
		</dialog>
	);
};

export default Dialog;
