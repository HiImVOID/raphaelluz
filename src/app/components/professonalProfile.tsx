
export default function ProfessionalProfile() {

    const icon = (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			width='32'
			height='32'
			fill='#000000'
			viewBox='0 0 256 256'>
			<path d='M243.28,68.24l-24-23.56a16,16,0,0,0-22.59,0L104,136.23l-36.69-35.6a16,16,0,0,0-22.58.05l-24,24a16,16,0,0,0,0,22.61l71.62,72a16,16,0,0,0,22.63,0L243.33,90.91A16,16,0,0,0,243.28,68.24ZM103.62,208,32,136l24-24a.6.6,0,0,1,.08.08l42.35,41.09a8,8,0,0,0,11.19,0L208.06,56,232,79.6Z'></path>
		</svg>
	)
    return (
		<div className='flex flex-col md:flex-row gap-y-4 justify-around w-full'>
			<div className='flex flex-col gap-y-4 justify-start items-start w-max'>
				<h6 className='flex text-2xl font-semibold'>
					Perfil Profissional
				</h6>
				<ul>
					<div className='flex  gap-x-4 justify-start items-center w-max'>
						{icon}
						<li>Proatividade</li>
					</div>
					<div className='flex  gap-x-4 justify-start items-center w-max'>
						{icon}
						<li>Comunicação objetiva</li>
					</div>
					<div className='flex  gap-x-4 justify-start items-center w-max'>
						{icon}
						<li>Trabalho em equipe</li>
					</div>
					<div className='flex  gap-x-4 justify-start items-center w-max'>
						{icon}
						<li>Responsável</li>
					</div>
					<div className='flex  gap-x-4 justify-start items-center w-max'>
						{icon}
						<li>Pensamento analítico</li>
					</div>
					<div className='flex  gap-x-4 justify-start items-center w-max'>
						{icon}
						<li>Atenção aos detalhes</li>
					</div>
					<div className='flex  gap-x-4 justify-start items-center w-max'>
						{icon}
						<li>Adaptabilidade</li>
					</div>
					<div className='flex  gap-x-4 justify-start items-center w-max'>
						{icon}
						<li>Resolvedor de problemas</li>
					</div>
					<div className='flex  gap-x-4 justify-start items-center w-max'>
						{icon}
						<li>Organizador</li>
					</div>
					<div className='flex  gap-x-4 justify-start items-center w-max'>
						{icon}
						<li>Criativo</li>
					</div>
					<div className='flex  gap-x-4 justify-start items-center w-max'>
						{icon}
						<li>Aprendizado Rápido</li>
					</div>
				</ul>
			</div>
			<div className='flex flex-col gap-y-4 justify-start items-start w-max'>
				<h6 className='flex text-2xl font-semibold'>
					Metodologias e Práticas
				</h6>
				<ul>
					<div className='flex  gap-x-4 justify-start items-center w-max'>
						{icon}
						<li>Agile</li>
					</div>
					<div className='flex  gap-x-4 justify-start items-center w-max'>
						{icon}
						<li>Scrum</li>
					</div>
					<div className='flex  gap-x-4 justify-start items-center w-max'>
						{icon}
						<li>Kanban</li>
					</div>
					<div className='flex  gap-x-4 justify-start items-center w-max'>
						{icon}
						<li>Test-Driven Development (TDD)</li>
					</div>
					<div className='flex  gap-x-4 justify-start items-center w-max'>
						{icon}
						<li>Domain-Driven Design(DDD)</li>
					</div>
					<div className='flex  gap-x-4 justify-start items-center w-max'>
						{icon}
						<li>Continuous Integration (CI)</li>
					</div>
					<div className='flex  gap-x-4 justify-start items-center w-max'>
						{icon}
						<li>Continuous Deployment (CD)</li>
					</div>
					<div className='flex  gap-x-4 justify-start items-center w-max'>
						{icon}
						<li>Pair Programming</li>
					</div>
				</ul>
			</div>
			<div className='flex flex-col gap-y-4 justify-start items-start w-max'>
				<h6 className='flex text-2xl font-semibold'>Outros</h6>
				<ul>
					<div className='flex  gap-x-4 justify-start items-center w-max'>
						{icon}
						<li>Ingles</li>
					</div>
					<div className='flex  gap-x-4 justify-start items-center w-max'>
						{icon}
						<li>Responsive Design</li>
					</div>
					<div className='flex  gap-x-4 justify-start items-center w-max'>
						{icon}
						<li>UI/UX Design</li>
					</div>
					<div className='flex  gap-x-4 justify-start items-center w-max'>
						{icon}
						<li>Version Control</li>
					</div>
					<div className='flex  gap-x-4 justify-start items-center w-max'>
						{icon}
						<li>Mobile-First</li>
					</div>
					<div className='flex  gap-x-4 justify-start items-center w-max'>
						{icon}
						<li>ORM</li>
					</div>
				</ul>
			</div>
		</div>
	)
}
