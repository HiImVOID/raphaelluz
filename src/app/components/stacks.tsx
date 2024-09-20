import Image from 'next/image'
import CodeLogo from '@/../public/icons/pngwing.com.png'
import { Paragraph } from '@/components/globals/utils/paragraph/paragraph.index'
import HTML_icon from '@/../public/tecnologias/HTML_icon.png'
import CSS_icon from '@/../public/tecnologias/css-3.svg'
import Tailwind_icon from '@/../public/tecnologias/Tailwind_icon.png'
import BootsTrap_icon from '@/../public/tecnologias/BootsTrap_icon.png'
import JS_icon from '@/../public/tecnologias/JavaScript-logo.png'
import TS_icon from '@/../public/tecnologias/TS_icon.png'
import React_icon from '@/../public/tecnologias/React_icon.png'
import Next_icon from '@/../public/tecnologias/Next_icon.png'

import Node_icon from '@/../public/tecnologias/Node_icon.png'

import Python_icon from '@/../public/tecnologias/Python_icon.png'
import SQL_icon from '@/../public/tecnologias/SQL_icon.png'
import Mongo_icon from '@/../public/tecnologias/Mongo_icon.png'
import API_icon from '@/../public/tecnologias/API_icon.png'

import Front_End from '@/../public/images/website-design.png'
import Back_End from '@/../public/images/backend.png'
import DataBase from '@/../public/images/database.png'
import ORM from '@/../public/tecnologias/ORM.png'

export default function Stacks() {
	return (
		<section className='flex flex-col  gap-4  items-start justify-between w-full'>
			<div className='flex flex-col md:flex-row justify-between items-center gap-5'>
				<div className='flex flex-col gap-y-5'>
					<h1 className='text-2xl font-medium my-4'>Front End</h1>
					<div className='flex flex-wrap w-full justify-start items-center gap-5 '>
						<Image
							src={HTML_icon}
							width={200}
							height={200}
							alt='Git'
							className='w-10 h-10  '
						/>
						<Image
							src={CSS_icon}
							width={200}
							height={200}
							alt='Git'
							className='w-10 h-10  '
						/>
						<Image
							src={Tailwind_icon}
							width={200}
							height={200}
							alt='Git'
							className='w-10 h-10  '
						/>
						<Image
							src={BootsTrap_icon}
							width={200}
							height={200}
							alt='Git'
							className='w-10 h-10  '
						/>
						<Image
							src={JS_icon}
							width={200}
							height={200}
							alt='Git'
							className='w-10 h-10  '
						/>
						<Image
							src={TS_icon}
							width={200}
							height={200}
							alt='Git'
							className='w-10 h-10  '
						/>
						<Image
							src={React_icon}
							width={200}
							height={200}
							alt='Git'
							className='w-10 h-10  '
						/>
						<Image
							src={Next_icon}
							width={200}
							height={200}
							alt='Git'
							className='w-10 h-10  '
						/>
					</div>
					<p className='text-lg'>
						Para resolver desafios de interfaces, estou acostumado a
						trabalhar com React / Next.js como principais frameworks
						de desenvolvimento, dando preferencia a utilizar o
						TypeScript para garantir uma melhor modelagem dos dados.
					</p>
					<p className='text-lg'>
						No que se trata de estilização, trabalho com CSS,
						StyledComponents, Bootstrap, mas tenho um carinho
						especial pelo Tailwind CSS.
					</p>
				</div>
				<Image
					src={Front_End}
					alt='React'
					width={150}
					height={150}
				/>
			</div>
			<div className='flex flex-col-reverse md:flex-row justify-between items-center gap-5 self-end'>
				<Image
					src={Back_End}
					alt='React'
					width={150}
					height={150}
				/>
				<div className='flex flex-col gap-y-5'>
					<h1 className='text-2xl font-medium my-4'>Back End</h1>
					<div className='flex w-max justify-center items-center gap-5'>
						<Image
							src={API_icon}
							width={200}
							height={200}
							alt='Git'
							className='w-10 h-10  '
						/>
						<Image
							src={Node_icon}
							width={200}
							height={200}
							alt='Git'
							className='w-10 h-10  '
						/>
						<Image
							src={Python_icon}
							width={200}
							height={200}
							alt='Git'
							className='w-10 h-10  '
						/>
					</div>
					<p className='text-lg'>
						Para dar vida a aplicações web, estou acostumado a
						utlizar o Node.js, Express, TypeScript e MongoDB.
					</p>
					<p className='text-lg'>
						Sempre visando construir aplicações escaláveis, com uma
						arquitetura limpa e simples.
					</p>
				</div>
			</div>
			<div className='flex flex-col md:flex-row justify-between items-center gap-5'>
				<div className='flex flex-col gap-y-5'>
					<h1 className='text-2xl font-medium my-4'>Data Base</h1>
					<div className='flex w-max justify-center items-center gap-5'>
						<Image
							src={SQL_icon}
							width={200}
							height={200}
							alt='Git'
							className='w-10 h-10  '
						/>
						<Image
							src={Mongo_icon}
							width={200}
							height={200}
							alt='Git'
							className='w-10 h-10  '
						/>
						<Image
							src={ORM}
							width={200}
							height={200}
							alt='Git'
							className='w-10 h-10  '
						/>
					</div>
					<p className='text-lg'>
						Para armazenar dados, estou acostumado a utilizar o
						MongoDB, com o Mongoose para modelar os dados. Sei
						traballhar tanto com bancos relacionais, quanto não
						relacionais. Sempre atento a modelagem dos dados e
						relacionamentos das entidades.
					</p>
					<p className='text-lg'>
						Sempre busco entender melhor as necessidades do negócio
						e desenvolver soluções que atendam as necessidades dos
						usuários.
					</p>
				</div>
				<Image
					src={DataBase}
					alt='React'
					width={150}
					height={150}
				/>
			</div>
		</section>
	)
}
