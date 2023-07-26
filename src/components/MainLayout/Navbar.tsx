'use client'

import Image from 'next/image'
import BsSearch from 'react-icons/bs'
import Link from 'next/link'
import { AlignJustify, Lightbulb, LightbulbOff } from 'lucide'
import { useEffect, useState } from 'react'

export default function Navbar() {
	const [isOpen, setisOpen] = useState(false)

	const toggleisOpen = () => {
		return isOpen == true ? setisOpen(false) : setisOpen(true)
	}

	useEffect(() => {
		{
			isOpen === true
				? document.body.classList.add('overflow-hidden')
				: document.body.classList.remove('overflow-hidden')
		}
	})

	return (
		<>
			{isOpen === true ? (
				<div className='sticky top-0 z-20'>
					<div
						className=' fixed h-full inset-0  bg-slate-600/50 backdrop-blur-sm flex w-screen '
						onClick={toggleisOpen}>
						<div className='w-full' />

						<div className='w-60% bg-indigo-400 text-white p-x-5 relative '>
							{/* <button
								onClick={toggleisOpen}
								className=' w-full text-gray-200 sticky top-2 left-4'>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									width='24'
									height='24'
									viewBox='0 0 24 24'
									fill='none'
									stroke='currentColor'
									stroke-width='2'
									stroke-linecap='round'
									stroke-linejoin='round'
									className='lucide lucide-align-justify right-9  text-white absolute'>
									<line
										x1='3'
										x2='21'
										y1='6'
										y2='6'
									/>
									<line
										x1='3'
										x2='21'
										y1='12'
										y2='12'
									/>
									<line
										x1='3'
										x2='21'
										y1='18'
										y2='18'
									/>
								</svg>
							</button> */}
							<ul className='flex flex-col sticky top-10 whitespace-nowrap p-3 mt-5 gap-y-2 divide-y-2 divide-white'>
								<li className=' py-5 pl-3 backdrop-blur-lg bg-gray-400/30 rounded-xl'>
									Inicio
								</li>
								<li className='py-5 pl-3 backdrop-blur-lg bg-gray-400/30 rounded-xl'>
									Portifólio
								</li>
								<li className='py-5 pl-3 backdrop-blur-lg bg-gray-400/30 rounded-xl'>
									Tecnologias
								</li>
								<li className='py-5 pl-3 backdrop-blur-lg bg-gray-400/30 rounded-xl'>
									Formação Academica
								</li>
								<li className='py-5 pl-3 backdrop-blur-lg bg-gray-400/30 rounded-xl'>
									Contato
								</li>
							</ul>
						</div>
					</div>
				</div>
			) : (
				<div className='hidden' />
			)}

			<div className='sticky top-0 z-20 w-full flex '>
				<div className='container w-full  mx-auto '>
					<header className='flex  justify-between items-center p-3 gap-x-10 w-full rounded-b-xl '>
						{/* Logo */}
						<div className='flex gap-x-3'>
							{/* <Image
						src={'/Logo.png'}
						width={50}
						height={50}
						alt=''
					/> */}
							<svg
								xmlns='http://www.w3.org/2000/svg'
								width='24'
								height='24'
								viewBox='0 0 24 24'
								fill='none'
								stroke='currentColor'
								stroke-width='2'
								stroke-linecap='round'
								stroke-linejoin='round'
								className='lucide lucide-lightbulb'>
								<path d='M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5' />
								<path d='M9 18h6' />
								<path d='M10 22h4' />
							</svg>
							<h6 className='flex whitespace-nowrap'>
								Raphael Luz
							</h6>
						</div>

						{/* Menu */}
						<nav className=' hidden rounded-r-lg rounded-l-lg backdrop-blur-xl bg-white/50 md:flex'>
							<ul className=' flex   '>
								<Link href={'/'}>
									<li className='py-2 px-3 pl-5 rounded-l-lg hover:bg-slate-800 hover:text-gray-300'>
										Inicio
									</li>
								</Link>
								<Link href={'/portifolio'}>
									<li className='py-2 px-3 hover:bg-slate-800 hover:text-gray-300'>
										Portifólio
									</li>
								</Link>
								<Link href={'/tecnologias'}>
									<li className='py-2 px-3 hover:bg-slate-800 hover:text-gray-300'>
										Tecnologias
									</li>
								</Link>
								<Link href={'/formacao-academica'}>
									<li className='py-2 px-3 hover:bg-slate-800  hover:text-gray-300'>
										Formação Acadêmica
									</li>
								</Link>
								<Link href={'/contato'}>
									<li className='py-2 px-3 pr-5 hover:bg-slate-800 rounded-r-lg hover:text-gray-300'>
										Contato
									</li>
								</Link>
							</ul>
						</nav>
						<nav className='flex md:hidden'>
							<button onClick={() => toggleisOpen()}>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									width='24'
									height='24'
									viewBox='0 0 24 24'
									fill='none'
									stroke='currentColor'
									stroke-width='2'
									stroke-linecap='round'
									stroke-linejoin='round'
									className='lucide lucide-align-justify '>
									<line
										x1='3'
										x2='21'
										y1='6'
										y2='6'
									/>
									<line
										x1='3'
										x2='21'
										y1='12'
										y2='12'
									/>
									<line
										x1='3'
										x2='21'
										y1='18'
										y2='18'
									/>
								</svg>
							</button>
						</nav>
					</header>
				</div>
			</div>
		</>
	)
}
