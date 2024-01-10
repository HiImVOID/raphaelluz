// Preciso falar que eu cursei X tempo em cada instituição Ok
// Falar porque eu tranquei OK
// Preciso falar porque eu escolhi OK
// Certificados / Notas dos cursos

import OquePsicologiaECienciasDaComputacaoTemEmComum from '@/components/articles/oquePsicologiaECienciasDaComputacaoTemEmComum'
import PorquePsicologiaECiencias from '@/components/articles/porquePsicoeCiencias'
import { Paragraph } from '@/components/globals/utils/paragraph/paragraph.index'

import Link from 'next/link'
import Cap from '@/../public/icons/graduation-cap.svg'
import Image from 'next/image'

export default function FormacaoAcademicaPage() {
	return (
		<div className='flex flex-col gap-y-5'>
			<Paragraph.Root>
				<Paragraph.Title>Formação Acadêmica</Paragraph.Title>
				<Paragraph.Subtitle>Bacharelandos</Paragraph.Subtitle>
				<div className='flex flex-col md:flex-row justify-center  w-full gap-12 items-center '>
					<div className='p-4 bg-blue-200 rounded-lg'>
						<Paragraph.Subtitle className='flex justify-between'>
							Psicologia
							<svg
								xmlns='http://www.w3.org/2000/svg'
								viewBox='0 0 256 256'>
								<rect
									width='256'
									height='256'
									fill='none'
								/>
								<polygon
									points='8 96 128 32 248 96 128 160 8 96'
									fill='none'
									stroke='currentColor'
									strokeLinecap='round'
									strokeLinejoin='round'
									strokeWidth='16'
								/>
								<polyline
									points='128 96 184 125.87 184 240'
									fill='none'
									stroke='currentColor'
									strokeLinecap='round'
									strokeLinejoin='round'
									strokeWidth='16'
								/>
								<path
									d='M216,113.07v53.22a8,8,0,0,1-2,5.31c-11.3,12.59-38.9,36.4-86,36.4s-74.68-23.81-86-36.4a8,8,0,0,1-2-5.31V113.07'
									fill='none'
									stroke='currentColor'
									stroke-linecap='round'
									stroke-linejoin='round'
									stroke-width='16'
								/>
							</svg>
						</Paragraph.Subtitle>
						<Paragraph.Content>
							Instituição: Claretiano / São Judas
						</Paragraph.Content>
						<Paragraph.Content>
							Ano: 2020 - Trancado
						</Paragraph.Content>
					</div>
					<div className='p-4 bg-blue-200 rounded-lg'>
						<Paragraph.Subtitle className='flex justify-between'>
							Ciências da Computação
							<svg
								xmlns='http://www.w3.org/2000/svg'
								viewBox='0 0 256 256'>
								<rect
									width='256'
									height='256'
									fill='none'
								/>
								<polygon
									points='8 96 128 32 248 96 128 160 8 96'
									fill='none'
									stroke='currentColor'
									stroke-linecap='round'
									stroke-linejoin='round'
									stroke-width='16'
								/>
								<polyline
									points='128 96 184 125.87 184 240'
									fill='none'
									stroke='currentColor'
									stroke-linecap='round'
									stroke-linejoin='round'
									stroke-width='16'
								/>
								<path
									d='M216,113.07v53.22a8,8,0,0,1-2,5.31c-11.3,12.59-38.9,36.4-86,36.4s-74.68-23.81-86-36.4a8,8,0,0,1-2-5.31V113.07'
									fill='none'
									stroke='currentColor'
									stroke-linecap='round'
									stroke-linejoin='round'
									stroke-width='16'
								/>
							</svg>
						</Paragraph.Subtitle>
						<Paragraph.Content>
							Instituição: UniAmericas Descomplica
						</Paragraph.Content>
						<Paragraph.Content>
							Ano: 2021 - Trancado
						</Paragraph.Content>
					</div>
				</div>
				<br />
				<Paragraph.Subtitle>
					Porque tranquei os cursos?
				</Paragraph.Subtitle>

				<Paragraph.Content className='flex gap-x-2'>
					<div>Resposta rápida:</div>
					<Link
						href='https://youtu.be/kwxIGe1oOJQ?t=29'
						className='text-blue-600'
						target='blank'>
						clique aqui.
					</Link>
				</Paragraph.Content>
				<div className='flex items-center'>
					<Paragraph.Content className='flex items-center gap-x-3'>
						Resposta Estruturada:
						<div className='flex  bg-slate-900 px-3 py-2 gap-3 font-medium text-base rounded-lg '>
							<div className='text-purple-600'>const</div>
							<div className='text-yellow-700'>
								respostaEstruturada
							</div>
							<div className='text-white'>=</div>
							<div className='text-blue-500'>respostaRapida</div>
						</div>
					</Paragraph.Content>
				</div>
			</Paragraph.Root>
			<PorquePsicologiaECiencias />
			<OquePsicologiaECienciasDaComputacaoTemEmComum />
		</div>
	)
}
