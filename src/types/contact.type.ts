import { StaticImageData } from 'next/image'

export interface ContactProps {
	id: number
	name: string
	image: string | StaticImageData
	title: string
	value: string
	link: string
}
