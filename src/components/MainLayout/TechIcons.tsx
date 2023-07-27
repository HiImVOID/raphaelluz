import Image from 'next/image'
import Git_icon from '@/../public/tecnologias/Git_icon.png'
import CSS_icon from '@/../public/tecnologias/css-3.svg'
import JS_icon from '@/../public/tecnologias/JavaScript-logo.png'
import TS_icon from '@/../public/tecnologias/TS_icon.png'
import React_icon from '@/../public/tecnologias/React_icon.png'
import Next_icon from '@/../public/tecnologias/Next_icon.png'
import Tailwind_icon from '@/../public/tecnologias/Tailwind_icon.png'
import Node_icon from '@/../public/tecnologias/Node_icon.png'
import BootsTrap_icon from '@/../public/tecnologias/BootsTrap_icon.png'
import Python_icon from '@/../public/tecnologias/Python_icon.png'
import SQL_icon from '@/../public/tecnologias/SQL_icon.png'
import Mongo_icon from '@/../public/tecnologias/Mongo_icon.png'
import API_icon from '@/../public/tecnologias/API_icon.png'
import HTML_icon from '@/../public/tecnologias/HTML_icon.png'

const TechIcons = () => {
	return (
		<section className='flex  flex-col items-center w-full gap-y-20 py-3'>
			<h6 className='font-bold text-2xl mb-4'>Tecnologias:</h6>

			<div className='flex flex-wrap justify-around w-full gap-x-3 gap-y-8 px-2 '>
				<div className='flex flex-col items-center '>
					<Image
						src={Git_icon}
						width={200}
						height={200}
						alt='Git'
						className='w-10 h-10  '
					/>
					<span className='font-semibold'>Git</span>
				</div>
				<div className='flex flex-col items-center'>
					<Image
						src={HTML_icon}
						width={200}
						height={200}
						alt='HTML'
						className='w-10 h-10 '
					/>
					<span className='font-semibold'>HTML</span>
				</div>
				<div className='flex flex-col items-center'>
					<Image
						src={CSS_icon}
						width={200}
						height={200}
						alt='CSS'
						className='w-10 h-10 '
					/>
					<span className='font-semibold'>CSS</span>
				</div>
				<div className='flex flex-col items-center'>
					<Image
						src={JS_icon}
						width={200}
						height={200}
						alt='JavaScript'
						className='w-10 h-10 '
					/>
					<span className='font-semibold'>JavaScript</span>
				</div>
				<div className='flex flex-col items-center'>
					<Image
						src={TS_icon}
						width={200}
						height={200}
						alt='TypeScript'
						className='w-10 h-10 '
					/>
					<span className='font-semibold'>TypeScript</span>
				</div>
				<div className='flex flex-col items-center'>
					<Image
						src={React_icon}
						width={200}
						height={200}
						alt='React'
						className='w-10 h-10 '
					/>
					<span className='font-semibold'>React</span>
				</div>
				<div className='flex flex-col items-center'>
					<Image
						src={Next_icon}
						width={200}
						height={200}
						alt='NextJs'
						className='w-10 h-10 '
					/>
					<span className='font-semibold'>NextJs</span>
				</div>
				<div className='flex flex-col items-center'>
					<Image
						src={Tailwind_icon}
						width={200}
						height={200}
						alt='Git'
						className='w-10 h-10 '
					/>
					<span className='font-semibold'>Tailwind CSS</span>
				</div>
				<div className='flex flex-col items-center'>
					<Image
						src={BootsTrap_icon}
						width={200}
						height={200}
						alt='Bootstrap'
						className='w-10 h-10 '
					/>
					<span className='font-semibold'>Bootstrap</span>
				</div>
				<div className='flex flex-col items-center'>
					<Image
						src={API_icon}
						width={200}
						height={200}
						alt='API Rest'
						className='w-10 h-10 '
					/>
					<span className='font-semibold'>API Rest</span>
				</div>
				<div className='flex flex-col items-center'>
					<Image
						src={Node_icon}
						width={200}
						height={200}
						alt='Node'
						className='w-10 h-10 '
					/>
					<span className='font-semibold'>Node</span>
				</div>
				<div className='flex flex-col items-center'>
					<Image
						src={Python_icon}
						width={200}
						height={200}
						alt='Python'
						className='w-10 h-10 '
					/>
					<span className='font-semibold'>Python</span>
				</div>
				<div className='flex flex-col items-center'>
					<Image
						src={SQL_icon}
						width={200}
						height={200}
						alt='SQL'
						className='w-10 h-10 '
					/>
					<span className='font-semibold'>SQL</span>
				</div>
				<div className='flex flex-col items-center'>
					<Image
						src={Mongo_icon}
						width={200}
						height={200}
						alt='MongoDB'
						className='w-10 h-10 '
					/>
					<span className='font-semibold'>MongoDB</span>
				</div>
			</div>
		</section>
	)
}

export default TechIcons
