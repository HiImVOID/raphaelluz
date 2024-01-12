import { StaticImageData } from 'next/image'

export interface ProjectProps {
	id: number
	name: string
	title: string
	description: string
	photo: string | StaticImageData
	linkLive: string
	linkGit?: string
}
