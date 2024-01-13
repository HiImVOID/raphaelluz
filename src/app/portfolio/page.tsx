import PortifolioGrid from '@/components/pages/portfolio/portifolioGrid'
import Portifólio from '@/components/pages/portfolio/portifolio'

export default function PortfolioPage() {
	return (
		<>
			<div className='flex flex-col items-center'>
				<h1 className='font-semibold text-2xl mx-4 my-6'>
					Meu Portifólio:
				</h1>
				<PortifolioGrid />
			</div>
		</>
	)
}
