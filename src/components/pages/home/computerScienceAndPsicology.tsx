import Image from 'next/image'
import Photo from '@/../public/images/computercienciandpsicologi.jpg'
import { Paragraph } from '@/components/globals/utils/paragraph/paragraph.index'

export default function ComputerScienceAndPsicology() {
	return (
		<section className='flex flex-col md:flex-row gap-3  justify-between items-center w-full h-max  rounded-3xl overflow-hidden'>
			<div className='flex flex-col gap-y-8 py-6 w-full'>
				<Paragraph.Root>
					<Paragraph.Title title='Combinando Psicologia & Computação para soluções criativas' />
					<Paragraph.Content
						text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, hic dolores neque deleniti incidunt sapiente
					'
					/>
				</Paragraph.Root>
				{/* <h1 className='text-2xl font-medium my-4'>
					Combinando Psicologia & Computação para soluções criativas
				</h1>
				<p className='flex flex-wrap  text-lg w-full'>
					Lorem ipsum dolor sit amet consectetur adipisicing elit.
					Tempora, hic dolores neque deleniti incidunt sapiente
					repellat culpa in, totam fugit reprehenderit cum. Excepturi
					laborum ipsum voluptatum, officia cumque consectetur
					repellendus!
				</p> */}
				<button className='bg-blue-500 hover:bg-blue-700 text-white w-max py-2 px-3 rounded '>
					Saiba Mais
				</button>
			</div>
			<div className='flex flex-col gap-y-8 py-6 w-max h-max '>
				<Image
					src={Photo}
					alt='ComputerScienceAndPsicology'
					width={300}
					height={300}
					className='flex rounded-3xl w-full h-full object-cover'
				/>
			</div>
		</section>
	)
}
