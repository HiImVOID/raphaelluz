import { Paragraph } from '@/components/globals/utils/paragraph/paragraph.index'
import About from '@/app/components/about'

import AssessoriaPcDLuzCard from '@/app/portfolio/components/cards/AssessoriaPcDLuz'
import BibliotecaOcultistaCard from '@/app/portfolio/components/cards/BibliotecaOcultista'
import EloHypeCard from '@/app/portfolio/components/cards/EloHype'
import LuxCard from '@/app/portfolio/components/cards/Lux'
import SomaProjetosComerciaisCard from '@/app/portfolio/components/cards/SomaProjetosComerciais'
import TechIcons from './components/techIcons'
import Stacks from './components/stacks'

export default function HomePage() {
	return (
		<>
			<div className='flex flex-col  lg:flex-row gap-3  justify-center items-center w-full h-[60vh]  rounded-3xl overflow-hidden'>
				<h1 className='font-black text-5xl md:text-7xl'>Raphael Luz</h1>
				<h2 className='p-3 text-lg'>
					Designs Responsivos e orientados a Mobile-First.
					<br />
					Mais que um front-end, uma LUZ.
				</h2>
			</div>
			<About />
			<TechIcons />
			<Stacks />
			{/* <ComputerScienceAndPsicology /> */}
			<div className='flex flex-col gap-y-4 justify-start items-start w-full'>
				<Paragraph.Root>
					<Paragraph.Title>Conheça meu portifólio</Paragraph.Title>
					<Paragraph.Content>
						Com mais de 3 anos de experiência, já tive a
						oportunidade de realizar projetos de diversas áreas.
					</Paragraph.Content>
				</Paragraph.Root>
			</div>
			{/* <PortifolioGrid /> */}
			<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center gap-5 '>
				<EloHypeCard />
				<LuxCard />
				<BibliotecaOcultistaCard />
				<SomaProjetosComerciaisCard />
				<AssessoriaPcDLuzCard />
			</div>
		</>
	)
}
