'use client';
import { Provider } from '@/hooks/useEditorContext';
export default function SubLayout({ children }) {
	return <Provider>{children}</Provider>;
}
