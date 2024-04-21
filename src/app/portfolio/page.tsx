import AssessoriaPcDLuzCard from '@/app/portfolio/components/cards/AssessoriaPcDLuz'
import BibliotecaOcultistaCard from '@/app/portfolio/components/cards/BibliotecaOcultista'
import EloHypeCard from '@/app/portfolio/components/cards/EloHype'
import LuxCard from '@/app/portfolio/components/cards/Lux'
import SomaProjetosComerciaisCard from '@/app/portfolio/components/cards/SomaProjetosComerciais'

export default function PortfolioPage() {
	return (
			<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center gap-5 '>
				<EloHypeCard />
				<LuxCard />
				<BibliotecaOcultistaCard />
				<SomaProjetosComerciaisCard />
				<AssessoriaPcDLuzCard />
			</div>
	)
}
