import './globals.css'
import { Inter } from 'next/font/google'
import Navbar from '@/components/MainLayout/Navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
	title: 'Raphael Luz',
	description: 'FullStack Developer',
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang='pt_BR'>
			<body className='grid grid-rows-[1fr,1fr] gap-3 max-h-screen bg-no-repeat backdrop-blur-lg bg-fixed bg-center bg-gradient-to-br  from-pink-200 from-10% via-indigo-300 via-50% to-teal-200 to-100%'>
				<Navbar />
				<div className='flex flex-col  items-center px-4'>{children}</div>
			</body>
		</html>
	)
}
