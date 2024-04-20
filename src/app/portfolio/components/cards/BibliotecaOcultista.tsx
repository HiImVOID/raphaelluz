import Link from 'next/link'
import Image from 'next/image'
import BibliotecaOcultistaPhoto from '@/../public/portifolio/Screenshot_1.jpg'
import Git from '@/../../public/tecnologias/Git_icon.png'
import HTML_icon from '@/../public/tecnologias/HTML_icon.png'
import CSS_icon from '@/../public/tecnologias/css-3.svg'
import JS_icon from '@/../public/tecnologias/JavaScript-logo.png'
import TS_icon from '@/../public/tecnologias/TS_icon.png'
import React_icon from '@/../public/tecnologias/React_icon.png'
import Nest_icon from '@/../public/tecnologias/Next_icon.png'
import Tailwind_icon from '@/../public/tecnologias/Tailwind_icon.png'

const BibliotecaOcultistaCard = () => {
	return (
		<article className='flex  flex-col justify-between w-full h-full backdrop-blur-lg bg-gray-800/90 text-slate-100 rounded-3xl overflow-hidden '>
			<div className=''>
				<div className=''>
					<Image
						width={700}
						height={700}
						alt={'Biblioteca Ocultista'}
						src={BibliotecaOcultistaPhoto}
						className='self-center w-full h-full'
					/>
				</div>
				<div className='flex flex-col gap-y-5 p-5  h- justify-between'>
					<div>
						<h3 className='font-bold text-xl '>
							Biblioteca Ocultista
						</h3>
						<h3 className='font-semibold pl-3 '>
							Blog / Ecommerce
						</h3>
					</div>
					<h4>
						Biblioteca Ocultista é uma vitrine de artigos e produtos
						do universo mistico e esóterico.
					</h4>
				</div>
			</div>
			<div className='gap-y-3 flex flex-col p-5 '>
				<span>Tecnologias Usadas:</span>
				<span className='flex gap-2 flex-wrap w-full justify-between px-2 '>
					<Image
						src={Git}
						alt={'Git'}
						width={25}
						height={25}
					/>
					<Image
						src={HTML_icon}
						alt={'Git'}
						width={25}
						height={25}
					/>
					<Image
						src={CSS_icon}
						alt={'Git'}
						width={25}
						height={25}
					/>
					<Image
						src={Tailwind_icon}
						alt={'Git'}
						width={25}
						height={25}
					/>
					<Image
						src={JS_icon}
						alt={'Git'}
						width={25}
						height={25}
					/>
					<Image
						src={TS_icon}
						alt={'Git'}
						width={25}
						height={25}
					/>
					<Image
						src={React_icon}
						alt={'Git'}
						width={25}
						height={25}
					/>
					<Image
						src={Nest_icon}
						alt={'Git'}
						width={25}
						height={25}
					/>
				</span>
				<span className='flex flex-col md:flex-row flex-wrap justify-center gap-3 items-center'>
					<Link
						href={'https://www.bibliotecaocultista.com/'}
						target='_blank'
						className=' w-max'>
						<button className=' flex items-center gap-x-2 bg-blue-500 px-3 py-1 w-max rounded-md hover:bg-blue-600 transition text-white'>
							Ver Live
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
								className='lucide lucide-link w-4 h-4'>
								<path d='M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71' />
								<path d='M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71' />
							</svg>
						</button>
					</Link>
				</span>
			</div>
		</article>
	)
}

export default BibliotecaOcultistaCard
