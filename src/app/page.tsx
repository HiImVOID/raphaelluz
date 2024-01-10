import { Paragraph } from '@/components/globals/utils/paragraph/paragraph.index'
import About from '@/components/pages/home/about'
import Stacks from '@/components/pages/home/stacks'
import TechIcons from '@/components/pages/home/techIcons'
import ComputerScienceAndPsicology from '@/components/pages/home/computerScienceAndPsicology'
import PortifolioGrid from '@/components/pages/portfolio/portifolioGrid'

export default function HomePage() {
	return (
		<>
			<div className='flex flex-col  lg:flex-row gap-3  justify-center items-center w-full h-[60vh]  rounded-3xl overflow-hidden'>
				<h1 className='font-black text-5xl md:text-7xl'>Raphael Luz</h1>
				<h2 className='p-3'>
					Designs Responsivos e orientados a Mobile-First.
					<br />
					Mais que um front-end, uma LUZ.
				</h2>
			</div>
			<About />
			<TechIcons />
			<Stacks />
			<ComputerScienceAndPsicology />
			<div className='flex flex-col gap-y-4 justify-start items-start w-full'>
				<Paragraph.Root>
					<Paragraph.Title>Conheça meu portfólio</Paragraph.Title>
					<Paragraph.Content>
						Com mais de 3 anos de experiência, já tive a
						oportunidade de realizar projetos de diversas áreas.
					</Paragraph.Content>
				</Paragraph.Root>
			</div>
			<PortifolioGrid />
		</>
	)
}
