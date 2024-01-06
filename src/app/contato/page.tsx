import Image from 'next/image'
import contacts from '@/data/contacts.data'
import ContactItem from '@/components/pages/contato/contactItem'

export default function ContatoPage() {
	return (
		<div className='flex flex-wrap gap-8 justify-center items-center w-full h-[68vh]  rounded-3xl overflow-hidden'>
			{contacts.map((contact) => (
				<div key={contact.id}>
					<ContactItem item={contact} />
				</div>
			))}
		</div>
	)
}
