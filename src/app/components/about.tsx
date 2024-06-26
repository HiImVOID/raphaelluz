'use client'

import Image from 'next/image'
import Perfil from '@/../public/Profile.jpg'
import Link from 'next/link'

export default function About() {
	return (
		<div className='flex flex-col lg:flex-row gap-8 items-center w-full'>
			<main className='flex-col px-8 w-full justify-between items-center'>
				<h2 className='font-bold text-4xl justify-center flex'>
					Quem sou?
				</h2>
				<br />
				<br />
				<div className=' flex flex-col items-center justify-center gap-y-8 text-black text-lg'>
					<p className=' w-[90%] md:w-[60%] '>
						Sou um desenvolvedor{' '}
						<span className='font-bold'>Front End</span>,
						bacharelando em{' '}
						<span className='font-bold'>
							Ciências da Computação{' '}
						</span>
						& <span className='font-bold  '>Psicologia</span>,
						trabalho como{' '}
						<span className='font-bold'>freelancer</span>, buscando
						uma oportunidade de{' '}
						<span className='font-bold'>
							trabalhar em projetos maiores
						</span>
						, vivo atualmente em São Paulo - SP.
					</p>
					<div className='flex flex-col h-full gap-6 md:flex-row'>
						<Link
							href='https://github.com/HiImVOID/'
							className='mt-4'>
							<button className='flex justify-center items-center gap-x-2 bg-slate-900 px-6 py-4 rounded-lg text-white'>
								Ver Github
								<svg
									xmlns='http://www.w3.org/2000/svg'
									width='16'
									height='16'
									viewBox='0 0 24 24'
									fill='none'
									stroke='currentColor'
									strokeWidth='2'
									strokeLinecap='round'
									strokeLinejoin='round'
									className='lucide lucide-github'>
									<path d='M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4' />
									<path d='M9 18c-4.51 2-5-2-7-2' />
								</svg>
							</button>
						</Link>
						<Link
							href='https://github.com/HiImVOID/'
							className='mt-4'>
							<button className='flex justify-center items-center gap-x-2 bg-blue-500 px-6 py-4 rounded-lg text-white'>
								Ver Linkedin
								<svg
									xmlns='http://www.w3.org/2000/svg'
									width='16'
									height='16'
									viewBox='0 0 24 24'
									fill='none'
									stroke='currentColor'
									strokeWidth='2'
									strokeLinecap='round'
									strokeLinejoin='round'
									className='lucide lucide-github'>
									<path d='M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4' />
									<path d='M9 18c-4.51 2-5-2-7-2' />
								</svg>
							</button>
						</Link>
						{/* <a
							href='https://cdn.discordapp.com/attachments/1192937826426298379/1195751718454050907/raphaelluz.pdf?ex=65b52191&is=65a2ac91&hm=5c76879d521794c0175bc7a2a82ce29b5def3661ed5f684fa3dc6897a3609764&'
							className='mt-4'>
							<button className='flex justify-center items-center gap-x-2 bg-green-500 px-6 py-4 rounded-lg text-white'>
								Baixar CV.
								<svg
									xmlns='http://www.w3.org/2000/svg'
									width='16'
									height='16'
									viewBox='0 0 24 24'
									fill='none'
									stroke='currentColor'
									strokeWidth='2'
									strokeLinecap='round'
									strokeLinejoin='round'
									className='lucide lucide-github'>
									<path d='M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4' />
									<path d='M9 18c-4.51 2-5-2-7-2' />
								</svg>
							</button>
						</a> */}
					</div>
				</div>
			</main>
			<aside>
				<Image
					src={Perfil}
					width={400}
					height={400}
					alt={'Perfil'}
					className='rounded-full border-dashed border-4 border-white '
				/>
			</aside>
		</div>
	)
}
