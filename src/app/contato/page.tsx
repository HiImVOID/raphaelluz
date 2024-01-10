import Image from 'next/image'
import fs from 'fs/promises'
import path from 'path'

import GithubLogo from '@/../public/contacts/github-logo.svg'
import LinkedinLogo from '@/../public/contacts/linkedin-logo.svg'
import WhatsappLogo from '@/../public/contacts/whatsapp-logo.svg'
import Link from 'next/link'

export default function ContatoPage() {
	return (
		<div className='flex flex-wrap gap-8 justify-center items-center w-full h-[68vh]  rounded-3xl overflow-hidden'>
			<div className='flex flex-col gap-y-4 justify-center '>
				<Link
					className='flex flex-col gap-y-4 justify-center items-center'
					href='https://github.com/HiImVOID'
					target='_blank'>
					<Image
						src={GithubLogo}
						alt='GithubLogo'
						width={150}
						height={150}
						className=' p-10'
					/>
					<div className=' text-lg'>Github</div>
					<div className='font-semibold text-xl'>HiImVOID</div>
				</Link>
			</div>
			<div className='flex flex-col gap-y-4 justify-center '>
				<Link
					className='flex flex-col gap-y-4 justify-center items-center'
					href='https://www.linkedin.com/in/raphael-luz-ribeiro/'
					target='_blank'>
					<Image
						src={LinkedinLogo}
						alt='LinkedinLogo'
						width={150}
						height={150}
						className=' p-10'
					/>
					<div className=' text-lg'>LinkedIn</div>
					<div className='font-semibold text-xl'>
						raphael-luz-ribeiro
					</div>
				</Link>
			</div>
			<div className='flex flex-col gap-y-4 justify-center '>
				<Link
					className='flex flex-col gap-y-4 justify-center items-center'
					href={'https://wa.me/5511958720403'}
					target='_blank'>
					<Image
						src={WhatsappLogo}
						alt='WhatsappLogo'
						width={150}
						height={150}
						className=' p-10 '
					/>
					<div className=' text-lg'>Whatsapp</div>
					<div className='font-semibold text-xl'>
						(11) 9 5872-0403
					</div>
				</Link>
			</div>
		</div>
	)
}
