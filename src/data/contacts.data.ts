import { ContactProps } from '@/types/contact.type'
import GithubLogo from '@/../public/contacts/github-logo.svg'
import LinkedinLogo from '@/../public/contacts/linkedin-logo.svg'
import WhatsappLogo from '@/../public/contacts/whatsapp-logo.svg'

const contacts: ContactProps[] = [
	{
		id: 1,
		name: 'GitHub',

		image: GithubLogo,
		title: 'GitHub',
		value: 'HiImVOID',
		link: 'https://github.com/HiImVOID',
	},
	{
		id: 2,
		name: 'Linkedin',
		image: LinkedinLogo,
		title: 'Linkedin',
		value: 'raphael-luz-ribeiro',
		link: 'https://www.linkedin.com/in/raphael-luz-ribeiro/',
	},
	{
		id: 3,
		name: 'WhatsApp',
		image: WhatsappLogo,
		title: 'FullStack Developer',
		value: '(11) 9 5872-0403',
		link: 'https://wa.me/5511958720403',
	},
]

export default contacts
