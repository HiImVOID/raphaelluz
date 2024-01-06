import Image from 'next/image'
import CodeLogo from '@/../public/icons/pngwing.com.png'

export default function Stacks() {
	return (
		<section className='flex flex-col md:flex-row gap-4 w-10/12 items-center justify-between '>
			<div className='flex flex-col gap-4 items-center '>
				<div className='flex flex-col gap-y-4'>
					<h1 className='text-2xl font-medium'>Front-End </h1>
					<p className='text-lg max-w-lg'>
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Quo nemo, voluptas cumque, accusantium sint soluta,
						temporibus inventore quibusdam omnis itaque veniam
						accusamus. Assumenda, dolore perspiciatis minima aliquid
						ipsam animi reprehenderit.
					</p>
				</div>
				<div className='flex flex-col gap-y-4'>
					<h1 className='text-2xl font-medium'>Back-End</h1>
					<p className='text-lg max-w-lg'>
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Quo nemo, voluptas cumque, accusantium sint soluta,
						temporibus inventore quibusdam omnis itaque veniam
						accusamus. Assumenda, dolore perspiciatis minima aliquid
						ipsam animi reprehenderit.
					</p>
				</div>
				<div className='flex flex-col gap-y-4'>
					<h1 className='text-2xl font-medium'>Data-Base</h1>
					<p className='text-lg max-w-lg'>
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Quo nemo, voluptas cumque, accusantium sint soluta,
						temporibus inventore quibusdam omnis itaque veniam
						accusamus. Assumenda, dolore perspiciatis minima aliquid
						ipsam animi reprehenderit.
					</p>
				</div>
			</div>
			<div className=''>
				<Image
					src={CodeLogo}
					width={400}
					height={400}
					alt='Stack'
					className='rounded-full p-10'
				/>
			</div>
		</section>
	)
}
