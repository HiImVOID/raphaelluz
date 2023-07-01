import Portifólioalt from '@/components/MainLayout/portifolioalt'
import Image from 'next/image'
import Link from 'next/link'
import Portifólio from '@/components/MainLayout/portifolio'

const PortifólioScreen = () => {
	return (<>
		<main>
			<div className='my-10'>
				<h1 className='flex justify-center text-3xl'>Meu Portifólio</h1>
			</div>

			<Portifólio />
			<section className='p-5 backdrop-blur-lg bg-gray-400/30 rounded-3xl'>
				<div className='flex flex-col lg:flex-row gap-3 gap-y-5 justify-between'>
					<div className='flex flex-col gap-y-5 w-full pl-5'>
						<h2 className='text-2xl'>Soma Projetos Comerciais</h2>
						<p>
							Soma Projetos Comerciais atua com mobilias comerciais, responsavel
							desde criar o projeto até a instalação dos equipamentos.
						</p>
						<p>
							Este foi um projeto para um cliente, fiquei responsavel por todas
							as etapas de desenvolvimento, desde o UX até a responsividade e
							deploy.
						</p>
						<p>
							A ideia do site é somente para ser um catálogo de visualização de
							produtos e formas de entrar em contato com os responsaveis pelo
							atendimento via whatsapp ou e-mail.
						</p>
						<div className='flex flex-col'>
							<Link href={'https://www.bibliotecaocultista.com/'}>
								Ir para o site
							</Link>
							<Link href={'https://www.bibliotecaocultista.com/'}>
								Ir para o repositorio no GitHub
							</Link>
						</div>
						<div className='flex justify-between gap-x-5'>
							<dl className='flex flex-col w-[30%] gap-y-2'>
								<dt>Tecnologias Utilizadas:</dt>
								<dd className='w-full p-2 text-center rounded-r-full rounded-l-full bg-slate-700 bg-opacity-40 text-white hover:bg-opacity-100 hover:bg-slate-900'>
									Git
								</dd>
								<dd className='w-full p-2 text-center rounded-r-full rounded-l-full bg-slate-700 bg-opacity-40 text-white hover:bg-opacity-100 hover:bg-slate-900'>
									JSX
								</dd>
								<dd className='w-full p-2 text-center rounded-r-full rounded-l-full bg-slate-700 bg-opacity-40 text-white hover:bg-opacity-100 hover:bg-slate-900'>
									React
								</dd>
								<dd className='w-full p-2 text-center rounded-r-full rounded-l-full bg-slate-700 bg-opacity-40 text-white hover:bg-opacity-100 hover:bg-slate-900'>
									NextJS
								</dd>
								<dd className='w-full p-2 text-center rounded-r-full rounded-l-full bg-slate-700 bg-opacity-40 text-white hover:bg-opacity-100 hover:bg-slate-900'>
									TypeScript
								</dd>
								<dd className='w-full p-2 text-center rounded-r-full rounded-l-full bg-slate-700 bg-opacity-40 text-white hover:bg-opacity-100 hover:bg-slate-900'>
									ReactHooks
								</dd>
								<dd className='w-full p-2 text-center rounded-r-full rounded-l-full bg-slate-700 bg-opacity-40 text-white hover:bg-opacity-100 hover:bg-slate-900'>
									TailwindCSS
								</dd>
								<dt>Features:</dt>
								<dd className='w-full p-2 text-center rounded-r-full rounded-l-full bg-slate-700 bg-opacity-40 text-white hover:bg-opacity-100 hover:bg-slate-900'>
									Carrinho de Compras
								</dd>
							</dl>
							<div className='w-full p-8 rounded-xl backdrop-blur-lg bg-white/50'>
								guafsdgfuasd udash fsdhfdosf odifh ashfasdi hfdasiohfasdfhasdf
								hasdfhasd hfasd ofhadsof hasdf hasdof fdh asdiofhasd ofhsdof
								hasdf hiosdfhasd hfa
							</div>
						</div>
					</div>
					<div className='flex justify-center'>
						<Image
							src={'/portifolio/BibliotecaOcultista.jpg'}
							width={343}
							height={343}
							alt='Biblioteca Ocultista'
							className='rounded-xl'
						/>
					</div>
				</div>
			</section>
			<section>
				<h2>Soma Projetos Comerciais</h2>
				<p>
					Soma Projetos Comerciais atua com mobilias comerciais, responsavel
					desde criar o projeto até a instalação dos equipamentos.
				</p>
				<p>
					Este foi um projeto para um cliente, fiquei responsavel por todas as
					etapas de desenvolvimento, desde o UX até a responsividade e deploy.
				</p>
				<p>
					A ideia do site é somente para ser um catálogo de visualização de
					produtos e formas de entrar em contato com os responsaveis pelo
					atendimento via whatsapp ou e-mail.
				</p>
				<dl>
					<dt>Tecnologias Utilizadas:</dt>
					<dd>NextJS 13</dd>
					<dd>TailwindCSS</dd>
					<dd>TypeScript</dd>
					<dd>ReactHooks</dd>
					<dd>Git</dd>
				</dl>
			</section>
			<section>Lux - Rede Social</section>
			
		</main>
		<Portifólioalt />
	</>)
}

export default PortifólioScreen
