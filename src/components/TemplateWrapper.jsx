'use client';
import { Provider } from '@/hooks/useEditorContext';

const Wrapper = ({ children }) => {
	return <Provider>{children}</Provider>;
};

export default Wrapper;
