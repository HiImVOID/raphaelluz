import { ProjectProps } from '@/types/project.type'

import BibliotecaOcultista from '@/../public/portifolio/Screenshot_1.jpg'
import Soma from '@/../public/portifolio/Screenshot_2.jpg'
import Lux from '@/../public/portifolio/Screenshot_3.jpg'
import EloHype from '@/../public/portifolio/Hype.jpg'

const projects: ProjectProps[] = [
	{
		id: 1,
		name: 'EloHype ',
		title: 'Serviços Eletronicos',
		description: 'Empreendimento que inicei sozinho.',
		photo: 'https://cdn.discordapp.com/attachments/1192937826426298379/1194523066353586186/Hype.jpg?ex=65b0a94c&is=659e344c&hm=7bc3c4e2c5119ecc7bf6af6a67dbd1df68d286cee0b1d3f76c38629750b0cf0a&',
		linkLive: '#',
		linkGit: '#',
	},
	{
		id: 2,
		name: 'Biblioteca Ocultista  ',
		title: 'Blog / Ecommerce',
		description:
			'Biblioteca Ocultista é uma vitrine de artigos e produtos do universo mistico e esóterico.',
		photo: 'https://media.discordapp.net/attachments/1192937826426298379/1192937864992932011/Screenshot_1.jpg?ex=65aae4f6&is=65986ff6&hm=f6cad00d0117bf30764fcda3ca8cbaa2374601a39c2c766b6e9cfd4ece5414f9&=&format=webp&width=1009&height=473',
		linkLive: 'https://www.bibliotecaocultista.com/',
		linkGit: 'https://github.com/HiImVOID/biblioteca-ocultista',
	},
	{
		id: 3,
		name: 'Soma Projetos Comerciais',
		title: 'Catalogo de Produtos',
		description:
			'Soma atua com projetos e instalações de mobilias comeriais. ',
		photo: 'https://media.discordapp.net/attachments/1192937826426298379/1192937865227796612/Screenshot_2.jpg?ex=65aae4f6&is=65986ff6&hm=90c42b43f0c3dc97157045b96f4daec4546875132706eb88a69911864d092c02&=&format=webp&width=1016&height=473',
		linkLive: 'https://somaprojetos.ind.br/',
		linkGit: 'https://github.com/HiImVOID/somaProjetosComerciais',
	},
	{
		id: 4,
		name: 'Lux ',
		title: 'Rede Social',
		description:
			'Projeto Pessoal que venho desenvolvendo a fim de evoluir minhas habilidades como desenvolvedor.',
		photo: 'https://media.discordapp.net/attachments/1192937826426298379/1192937864737071114/Screenshot_3.jpg?ex=65aae4f6&is=65986ff6&hm=c4fe44c5f3ffaa63672d856ce1e7cc0fa9da7827f1a60e73546ed37327931653&=&format=webp&width=1020&height=473',
		linkLive: '#',
		linkGit: '#',
	},
]

export default projects
