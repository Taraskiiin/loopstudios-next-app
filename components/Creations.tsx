import React from 'react';

import { alata } from '../fonts';

const list = [
	{
		id: '1',
		text: 'Deep Earth',
		desktopImage: '/assets/desktop/image-deep-earth.jpg',
		mobileImage: '/assets/mobile/image-deep-earth.jpg',
	},
	{
		id: '2',
		text: 'Night Arcade',
		desktopImage: '/assets/desktop/image-night-arcade.jpg',
		mobileImage: '/assets/mobile/image-night-arcade.jpg',
	},
	{
		id: '3',
		text: 'Soccer Team VR',
		desktopImage: '/assets/desktop/image-soccer-team.jpg',
		mobileImage: '/assets/mobile/image-soccer-team.jpg',
	},
	{
		id: '4',
		text: 'The Grid',
		desktopImage: '/assets/desktop/image-grid.jpg',
		mobileImage: '/assets/mobile/image-grid.jpg',
	},
	{
		id: '5',
		text: 'From Up Above VR',
		desktopImage: '/assets/desktop/image-from-above.jpg',
		mobileImage: '/assets/mobile/image-from-above.jpg',
	},
	{
		id: '6',
		text: 'Pocket Borealis',
		desktopImage: '/assets/desktop/image-pocket-borealis.jpg',
		mobileImage: '/assets/mobile/image-pocket-borealis.jpg',
	},
	{
		id: '7',
		text: 'The Curiosit',
		desktopImage: '/assets/desktop/image-curiosity.jpg',
		mobileImage: '/assets/mobile/image-curiosity.jpg',
	},
	{
		id: '8',
		text: 'Make It Fisheye',
		desktopImage: '/assets/desktop/image-fisheye.jpg',
		mobileImage: '/assets/mobile/image-fisheye.jpg',
	},
];

export default function Creations() {
	return (
		<section id='creations'>
			<div className='container max-w-6xl mx-auto my-32 px-6 text-gray-900 md:px-0'>
				<div className='flex justify-center mb-20 md:justify-between'>
					<h2 className='text-4xl text-center uppercase md:text-left md:text-5xl'>
						Our Creations
					</h2>
					<button style={alata.style} className='hidden  md:block'>
						See All
					</button>
				</div>
				<div className='item-container'>
					{list.map((el) => (
						<div key={el.id} className='group item'>
							<img
								src={el.desktopImage}
								alt=''
								className='hidden w-full duration-200 md:block group-hover:scale-110'
							/>
							<img src={el.mobileImage} alt='' className='w-full md:hidden' />
							<div className='item-gradient' />
							<h5>{el.text}</h5>
						</div>
					))}
				</div>
				<div className='flex justify-center mt-10 md:hidden'>
					<button style={alata.style} className='btn w-full md:hidden'>
						See All
					</button>
				</div>
			</div>
		</section>
	);
}
