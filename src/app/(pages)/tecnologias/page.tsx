import TechIcons from "@/components/MainLayout/TechIcons"

const Tecnologias = () => {
	return (
		<>
			<TechIcons />
			<h3>Confira Aqui minhas Habilidades em cada tecnologia</h3>
			<main className='flex bg-red-400 w-[80%] justify-center p-3'>
				<section>
					<nav className='flex gap-x-3'>
						<h4>Fundamentais</h4>
						<ul>
							<li>HTML5</li>
							<li>CSS</li>
							<li>JavaScript ES6</li>
							<li>TypeScript</li>
							<li>Git</li>
							<li>Python</li>
							<li></li>
						</ul>
						<h4>Especificas</h4>
						<ul>
							<li>NextJs13</li>
							<li>TailwindCSS</li>
							<li>Styled Components</li>
							<li>ReactHooks</li>
							<li>Jest</li>
						</ul>
					</nav>
				</section>
				<aside className='flex flex-col p-3 justify-center'>
					<h2>Raphael Luz</h2>
					<h3>FullStack Developer</h3>
					<h3>Linguas: Portugues - Ingles - Epanhol </h3>
					<h3>Soft Skills</h3>
					<ul>
						<li>Comunicação Assertiva</li>
					</ul>
				</aside>
			</main>
		</>
	)
}

export default Tecnologias
