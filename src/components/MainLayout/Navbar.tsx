import Image from 'next/image'
import BsSearch from 'react-icons/bs'
import Link from 'next/link'
import { Lightbulb, LightbulbOff } from 'lucide'

export default function Navbar() {
	return (
		<div>
			<header className='flex justify-between items-center p-3 gap-x-10 w-full rounded-b-xl backdrop-blur-sm bg-slate-700/40'>
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
					<h6 className='flex whitespace-nowrap'>Raphael Luz</h6>
				</div>

				{/* Menu */}
				<nav className='rounded-r-full rounded-l-full backdrop-blur-xl bg-white/50'>
					<ul className=' flex   '>
						<Link href={'/'}>
							<li className='py-2 px-3 rounded-l-full hover:bg-slate-800 hover:text-gray-300'>
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
							<li className='py-2 px-3 hover:bg-slate-800 rounded-r-full hover:text-gray-300'>
								Contato
							</li>
						</Link>
					</ul>
				</nav>
			</header>
		</div>
	)
}
