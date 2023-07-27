import PortifolioCard from './pportifolioCard'
import dataPortifolio from './services/dataPortifolio'

const PortifolioGrid = () => {
	return (
		<>
			<div className='flex flex-col gap-y-4 items-center '>
				<h6 className='font-bold text-2xl mb-4'>Projetos:</h6>
				<div className='grid grid-cols-1   md:grid-cols-2 lg:grid-cols-3 justify-center gap-5 '>
					{dataPortifolio.map((item) => (
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
