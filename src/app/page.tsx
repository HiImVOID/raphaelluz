import About from '@/components/MainLayout/About'
import TechIcons from '@/components/MainLayout/TechIcons'
import PortifolioGrid from '@/components/portifolio/PortifolioGrid'

export default function Home() {
	return (
		<>
			<div className='flex flex-col lg:flex-row gap-3  justify-center items-center w-full h-[68vh]  rounded-3xl overflow-hidden'>
				<h1 className='font-black text-5xl md:text-7xl'>Raphael Luz</h1>
				<h2 className='p-3'>
					Designs Responsivos e orientados a Mobile-First.
					<br />
					Mais que um front-end, uma LUZ.
				</h2>
			</div>
			<About />
			<TechIcons />
			<br />
			<br />
			<br />
			<PortifolioGrid />
		</>
	)
}
