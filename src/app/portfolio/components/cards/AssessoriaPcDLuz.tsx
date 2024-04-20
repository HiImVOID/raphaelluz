import Link from 'next/link'
import Image from 'next/image'
import SomaProjetosComerciaisPhoto from '@/../public/portifolio/Screenshot_4.jpg'
import Git from '@/../../public/tecnologias/Git_icon.png'
import HTML_icon from '@/../public/tecnologias/HTML_icon.png'
import CSS_icon from '@/../public/tecnologias/css-3.svg'
import JS_icon from '@/../public/tecnologias/JavaScript-logo.png'
import TS_icon from '@/../public/tecnologias/TS_icon.png'
import React_icon from '@/../public/tecnologias/React_icon.png'
import Nest_icon from '@/../public/tecnologias/Next_icon.png'
import Tailwind_icon from '@/../public/tecnologias/Tailwind_icon.png'

const AssessoriaPcDLuzCard = () => {
	return (
		<article className='flex  flex-col justify-between w-full h-full backdrop-blur-lg bg-gray-800/90 text-slate-100 rounded-3xl overflow-hidden '>
			<div className=''>
				<div className=''>
					<Image
						width={700}
						height={700}
						alt={'Assessoria PcD Luz'}
						src={SomaProjetosComerciaisPhoto}
						className='self-center w-full h-full'
					/>
				</div>
				<div className='flex flex-col gap-y-5 p-5  h- justify-between'>
					<div>
						<h3 className='font-bold text-xl '>
							Assessoria PcD Luz
						</h3>
						<h3 className='font-semibold pl-3 '>
							Site Instirucional
						</h3>
					</div>
					<h4>
						Assessoria PcD Luz auxilia PcDs e taxistas a conseguirem
						isenções fiscais para seus veículos
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
						href={'https://www.acessoriapcdluz.com'}
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
					<Link
						href={
							'https://github.com/HiImVOID/acessoria-pcd-luz-client'
						}
						target='_blank'
						className=' w-max'>
						<button className=' flex items-center gap-x-2 bg-blue-500 px-3 py-1 w-max rounded-md hover:bg-blue-600 transition text-white'>
							Ver Código Fonte
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
				</span>
			</div>
		</article>
	)
}

export default AssessoriaPcDLuzCard
