import About from '@/components/pages/home/about'
import Stacks from '@/components/pages/home/stacks'
import TechIcons from '@/components/pages/home/techIcons'
import PortifolioGrid from '@/components/pages/portfolio/portifolioGrid'

export default function HomePage() {
	return (
		<>
			<div className='flex flex-col  lg:flex-row gap-3  justify-center items-center w-full h-[68vh]  rounded-3xl overflow-hidden'>
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
			<Stacks />
			<br />
			<h6 className='font-bold text-2xl mb-4'>Projetos:</h6>
			<PortifolioGrid />
		</>
	)
}
