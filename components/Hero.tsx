import React, { useEffect, useState } from 'react';
import Link from 'next/link';

import { alata } from '../fonts';

export const navList = ['About', 'Careers', 'Events', 'Products', 'Support'];

export default function Hero() {
	const [openNav, setOpenNav] = useState<boolean>(false);

	const handleToggle = () => {
		openNav ? setOpenNav(false) : setOpenNav(true);
	};

	return (
		<section id='hero'>
			<div className='container max-w-6xl mx-auto px-6 py-12'>
				<nav className='flex items-center justify-between font-bold text-white'>
					<img src='/assets/logo.svg' alt='logo icon' />
					<div style={alata.style} className='hidden h-10 md:flex md:space-x-8'>
						{navList.map((item) => (
							<div key={item} className='group'>
								<Link href='#'>{item}</Link>
								<div className='mx-2 group-hover:border-b group-hover:border-blue-50'></div>
							</div>
						))}
					</div>
					<div className='md:hidden'>
						<button
							id='menu-btn'
							type='button'
							className={`z-40 block hamburger md:hidden focus:outline-none ${
								openNav && 'open'
							}`}
							onClick={handleToggle}
						>
							<span className='hamburger-top' />
							<span className='hamburger-middle' />
							<span className='hamburger-bottom' />
						</button>
					</div>
				</nav>
				<div
					id='menu'
					className={`absolute top-0 bottom-0 left-0 flex flex-col self-end w-full min-h-screen py-1 pt-40 pl-12 space-y-3 text-lg text-white uppercase bg-black ${
						openNav ? 'block' : 'hidden'
					}`}
				>
					{navList.map((item) => (
						<Link key={item} href='#' className='hover:text-pink-500'>
							{item}
						</Link>
					))}
				</div>
				<div className='max-w-lg mt-32 mb-32 p-4 text-4xl text-white uppercase border-2 md:p-10 md:m-32 md:mx-0 md:text-6xl'>
					Impressive Experiences That Deliver
				</div>
			</div>
		</section>
	);
}
