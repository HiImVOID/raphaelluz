// Certificados / Notas dos cursos

import OquePsicologiaECienciasDaComputacaoTemEmComum from '@/app/formacao-academica/components/oquePsicologiaECienciasDaComputacaoTemEmComum'
import PorquePsicologiaECiencias from '@/app/formacao-academica/components/porquePsicoeCiencias'
import { Paragraph } from '@/components/globals/utils/paragraph/paragraph.index'
import Cap from '@/../public/icons/klipartz.com.png'
import Link from 'next/link'
import Image from 'next/image'

export default function FormacaoAcademicaPage() {
	return (
		<div className='flex flex-col gap-y-5 '>
			<Paragraph.Root>
				<Paragraph.Title>Formação Acadêmica</Paragraph.Title>
				<Paragraph.Subtitle>Bacharelandos</Paragraph.Subtitle>
				<div className='flex flex-col md:flex-row justify-center  w-full gap-12 items-center '>
					<div className='p-4 bg-blue-200 rounded-lg'>
						<Paragraph.Subtitle className='flex justify-between'>
							Psicologia
							<Image
								src={Cap}
								width={30}
								height={30}
								alt='Cap'
							/>
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
							<Image
								src={Cap}
								width={30}
								height={30}
								alt='Cap'
							/>
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
