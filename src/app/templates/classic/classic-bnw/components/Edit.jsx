'use client';
import useGetEditContext from '@/hooks/useEditorContext';
import React, { useEffect, useState } from 'react';
import { FaRegEdit } from 'react-icons/fa';

const EditIcon = () => {
	const { editMode, setEditMode } = useGetEditContext();
	const [isPrinting, setIsPrinting] = useState(false);

	const onEdit = () => {
		setEditMode(true);
	};

	useEffect(() => {
		const handleBeforePrint = () => {
			setIsPrinting(true);
		};

		const handleAfterPrint = () => {
			setIsPrinting(false);
		};

		window.addEventListener('beforeprint', handleBeforePrint);
		window.addEventListener('afterprint', handleAfterPrint);

		return () => {
			window.removeEventListener('beforeprint', handleBeforePrint);
			window.removeEventListener('afterprint', handleAfterPrint);
		};
	}, []);

	return (
		(!isPrinting || editMode) && (
			<FaRegEdit
				className='edit-icon'
				onClick={onEdit}
			></FaRegEdit>
		)
	);
};

export default EditIcon;
