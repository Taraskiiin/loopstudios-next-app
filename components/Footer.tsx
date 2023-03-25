import React from 'react';
import Link from 'next/link';

import { navList } from './Hero';

const socialMediasList = [
	{
		id: '1',
		img: '/assets/icon-facebook.svg',
	},
	{ id: '2', img: '/assets/icon-twitter.svg' },
	{
		id: '3',
		img: '/assets/icon-pinterest.svg',
	},
	{ id: '4', img: '/assets/icon-instagram.svg' },
];

export default function Footer() {
	return (
		<footer className='bg-black'>
			<div className='container max-w-6xl py-10 mx-auto'>
				<div className='flex flex-col items-center mb-8 space-y-6 md:flex-row md:space-y-0 md:justify-between md:items-start'>
					<div className='flex flex-col items-center space-y-8 md:items-start md:space-y-4'>
						<div className='h-8'>
							<img src='/assets/logo.svg' alt='' className='w-44 md:ml-3' />
						</div>
						<div className='flex flex-col items-center space-y-4 font-bold text-white md:flex-row md:space-y-0 md:space-x-6 md:ml-3'>
							{navList.map((el) => (
								<div key={el} className='h-10 group'>
									<Link href='#'>{el}</Link>
									<div className='mx-2 group-hover:border-b group-hover:border-blue-50'></div>
								</div>
							))}
						</div>
					</div>
					<div className='flex flex-col items-start justify-between space-y-4 text-gray-500'>
						<div className='flex items-center justify-center mx-auto space-x-4 md:justify-end md:mx-0'>
							{socialMediasList.map((el) => (
								<div key={el.id} className='h-8 group'>
									<Link href='#'>
										<img src={el.img} alt='' className='h-6' />
									</Link>
								</div>
							))}
						</div>
						<div className='font-bold'>
							&copy; 2022 Loopstudios. All Rights Reserved
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
}
