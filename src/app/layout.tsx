import './globals.css'
import { Inter } from 'next/font/google'
import Navbar from '@/components/mainLayout/navbar'

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
			<body className=' min-h-screen w-full bg-no-repeat backdrop-blur-lg bg-fixed bg-center bg-gradient-to-br  from-pink-200 from-10% via-indigo-300 via-50% to-teal-200 to-100%'>
				<Navbar />
				<div className=' container flex flex-col gap-y-3 mx-auto items-center p-2 pb-10'>
					{children}
				</div>
			</body>
		</html>
	)
}
