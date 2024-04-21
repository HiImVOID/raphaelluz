import { ContactProps } from '@/types/contact.type'

import Image from 'next/image'
import Link from 'next/link'

export default function ContactItem({ item }: { item: ContactProps }) {
	return (
		<div className='flex flex-col gap-y-4 justify-center '>
			<Link
				className='flex flex-col gap-y-4 justify-center items-center'
				href={item.link}
				target='_blank'>
				<Image
					src={item.image}
					alt={item.name}
					width={150}
					height={150}
					className='rounded-full p-10'
				/>
				<div className=' text-lg'>{item.name}</div>
				<div className='font-semibold text-xl'>{item.value}</div>
			</Link>
		</div>
	)
}
