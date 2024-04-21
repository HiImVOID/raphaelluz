import PortifolioCard from './portifolioCard'
import projects from '@/data/project.data'
import { ProjectProps } from '@/types/project.type'

const PortifolioGrid = () => {
	return (
		<>
			<div className='flex flex-col gap-4 items-center '>
				<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center gap-5 '>
					{projects.map((item: ProjectProps) => (
						<PortifolioCard
							item={item}
							key={item.id}
						/>
					))}
				</div>
			</div>
		</>
	)
}

export default PortifolioGrid
