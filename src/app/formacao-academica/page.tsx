// Preciso falar que eu cursei X tempo em cada instituição Ok
// Falar porque eu tranquei OK
// Preciso falar porque eu escolhi OK
// Certificados / Notas dos cursos

import { Paragraph } from '@/components/globals/utils/paragraph/paragraph.index'
import Link from 'next/link'

export default function FormacaoAcademicaPage() {
	return (
		<div className='flex flex-col gap-y-5'>
			<Paragraph.Root>
				<Paragraph.Title>Formação Acadêmica</Paragraph.Title>
				<Paragraph.Subtitle>Bacharelandos</Paragraph.Subtitle>
				<div className='flex flex-col md:flex-row justify-center  w-full gap-12 items-center '>
					<div>
						<Paragraph.Subtitle>Psicologia</Paragraph.Subtitle>
						<Paragraph.Content>
							Instituição: Claretiano / São Judas
						</Paragraph.Content>
						<Paragraph.Content>
							Ano: 2020 - Trancado
						</Paragraph.Content>
					</div>
					<div>
						<Paragraph.Subtitle>
							Ciências da Computação
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
				<Paragraph.Subtitle>
					Porque exatamente Psicologia E Ciências da Computação?
				</Paragraph.Subtitle>
				<Paragraph.Content>
					Resposta Rapida: Gosto de conceitos complexos.
				</Paragraph.Content>
				<Paragraph.Content>Resposta Estruturada:</Paragraph.Content>
				<Paragraph.Content>
					Você certamente conhece aquela historia do &quot; Trabalhe
					com oque você gosta, e você não terá que trabalhar um dia na
					vida&quot; ? Embora eu gostaria muito, nunca consegui
					acreditar nesse arco-iris cor-de-rosa. Trabalho é trabalho,
					todos eles terão prós e contras, você gostar do que faz é só
					mais um ponto positivo.
				</Paragraph.Content>
				<Paragraph.Content>
					Dinheiro tambem nunca foi um fator de peso na decisão
					<div className='line-through pl-2'>psicologia né kkkk</div>
				</Paragraph.Content>
				<Paragraph.Content>
					Nunca fui materialista e meu maior sonho de consumo é uma
					casa modesta em uma alguma cidade gelada de interior.
				</Paragraph.Content>
				<Paragraph.Content>
					Se não por amor, nem pelo dinhero, por qual razão mais se
					escolhe um curso superior?
				</Paragraph.Content>
				<Paragraph.Content>
					Meu unico criterio ao escolher um era: Qual deles vai me dar
					mais perspectivas diferentes de encarar o mundo? Apenas o
					conhecimento do curso, sem considerar diploma, network e
					todo o universo que um curso em especifico traria. Apenas o
					Conhecimento pelo conheimento
				</Paragraph.Content>
				<Paragraph.Content>
					E dada a minha avaliação eu sabia que precisava
					indiscutivelmente de algo na area de tecnologia. Mas no fim
					do dia, o que faz o mundo girar, o que está por trás de toda
					instituição, de todo serviço prestado é outro ser humano.
				</Paragraph.Content>
				<Paragraph.Content>
					Nem vou entrar no merito de como a entidade &quot;Ser
					Humano&quot; é uma obra de uma complexidade encantadora, por
					que eu sei que você, meu(a) caro(a) amigo(a) recrutador, tem
					mais 42 portfólios para avaliar.
					<div className='line-through '>
						(E porque você deve ter conhecimento em psicologia
						tambem.)
					</div>
				</Paragraph.Content>
				<Paragraph.Subtitle>
					O que Psicologia e Ciências da Computação tem em comum?
				</Paragraph.Subtitle>
				<Paragraph.Content>
					É dificil fazer uma analogia simples sem que se tenha
					conhecimento base de ambas aréas, me colocarei o mais
					claramente possivel.
				</Paragraph.Content>
				<Paragraph.Content>
					Dentre as diversas maneiras que podemos definir a entidade
					&quot;Ser Humano &quot;, uma que cabe muito bem é como um
					sistema.
				</Paragraph.Content>
				<Paragraph.Content>
					Sistema: Conjunto de elementos, concretos ou abstratos,
					intelectualmente organizados.
				</Paragraph.Content>
				<Paragraph.Content>
					Dito isso, podemos colocar os nossos 3 atores principais na
					mesma caixinha:: hardwares, softwares e pessoas, ambos são
					sistemas
				</Paragraph.Content>
				<Paragraph.Content>qwer</Paragraph.Content>
				<Paragraph.Content>qwer</Paragraph.Content>
				<Paragraph.Subtitle>Outros Cursos</Paragraph.Subtitle>
				<Paragraph.Subtitle>Certificados</Paragraph.Subtitle>
			</Paragraph.Root>
		</div>
	)
}
