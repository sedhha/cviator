import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
	title: 'CViator',
	description:
		'Supercharge your CV creation process with 1000s of reusable templates to choose from.',
};

export default function RootLayout({ children }) {
  return (
		<html lang='en'>
			<body className={inter.className}>{children}</body>
		</html>
	);
}
