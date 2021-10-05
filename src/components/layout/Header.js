import React, { useState, useEffect } from 'react';
import { Menu, Transition } from '@headlessui/react';
import { Fragment } from 'react';

import { Link } from "gatsby"

const Header = () => {
	const [scroll, setScroll] = useState(false);
	useEffect(() => {
		window.addEventListener('scroll', () => {
			setScroll(window.scrollY > 100);
		});
	}, []);

	return (
		<>
			<Menu>
				{/* Desktop menu */}
				<div
					className={
						(scroll
							? ' bg-white opacity-95 shadow-md'
							: ' bg-transparent ') +
						' flex items-center w-full h-auto md:pt-8 fixed z-50'
					}
				>
					<nav className="hidden w-full md:block">
						<ul className="relative z-10 flex items-center px-6 mx-auto mb-6 text-sm text-white lg:text-base">
							<li className="mx-2 lg:mx-3">
								<Link to="/about"
									className={
										(scroll
											? 'text-green-700 '
											: 'text-gray-200 text-shadow-lg hover:text-white ') +
										'relative inline-block font-medium hover:underline font-montserrat'
									}
								>
									<span className="block">About</span>
									{/*<span className="absolute bottom-0 left-0 inline-block w-full h-1 -mb-1 overflow-hidden">
										<span
										/*x-show="hover"* / className="absolute inset-0 inline-block w-full h-1 h-full transform border-t-2 border-green-500"
										/*x-transition:enter="transition ease-out duration-300" x-transition:enter-start="-translate-x-full" x-transition:enter-end="translate-x-0" x-transition:leave="transition ease-out duration-300" x-transition:leave-start="translate-x-0" x-transition:leave-end="translate-x-full"* / style={{
											display: 'none'
										}} * /
										/>
									</span>*/}
								</Link>
							</li>
							<li className="mx-2 lg:mx-3">
								<Link to="/yoga"
									className={
										(scroll
											? 'text-green-700 '
											: 'text-gray-200 text-shadow-lg hover:text-white ') +
										'relative inline-block font-medium hover:underline font-montserrat'
									}
								>
									<span className="block">Yoga</span>
									{/*<span className="absolute bottom-0 left-0 inline-block w-full h-1 -mb-1 overflow-hidden">
										<span
										/*x-show="hover"* / className="absolute inset-0 inline-block w-full h-1 h-full transform border-t-2 border-green-500"
										/* x-transition:enter="transition ease-out duration-300" x-transition:enter-start="-translate-x-full" x-transition:enter-end="translate-x-0" x-transition:leave="transition ease-out duration-300" x-transition:leave-start="translate-x-0" x-transition:leave-end="translate-x-full" * / style={{
											display: 'none' 
										}}* /
										/>
									</span>*/}
								</Link>
							</li>
							<li className="mx-2 lg:mx-3">
								<Link to="/gallery"
									className={
										(scroll
											? 'text-green-700'
											: 'text-gray-200 text-shadow-lg hover:text-white ') +
										' relative inline-block font-medium hover:underline font-montserrat'
									}
								>
									<span className="block">Mindfulness</span>
									{/*<span className="absolute bottom-0 left-0 inline-block w-full h-1 -mb-1 overflow-hidden">
										<span
										/*x-show="hover"* / className="absolute inset-0 inline-block w-full h-1 h-full transform border-t-2 border-green-500"
										/* x-transition:enter="transition ease-out duration-300" x-transition:enter-start="-translate-x-full" x-transition:enter-end="translate-x-0" x-transition:leave="transition ease-out duration-300" x-transition:leave-start="translate-x-0" x-transition:leave-end="translate-x-full" * / style={{
											display: 'none'
										}}* /
										/>
									</span>*/}
								</Link>
							</li>
							<li className="mx-auto">
								<Link to="/"
									className="w-1/4 py-4 pl-6 pr-4 md:pl-4 md:py-0"
								>
									<span
										className={
											(scroll
												? 'text-green-700'
												: 'text-white ') +
											' font-dancingscript tracking-wide text-4xl font-normal leading-none select-none logo'
										}
									>
										Lian Ariel Yoga
										<span className="text-green-500">
											.
										</span>
									</span>
								</Link>
							</li>
							<li className="mx-2 lg:mx-3">
								<Link to="/contact"
									className={
										(scroll
											? 'text-green-700'
											: 'text-gray-200 text-shadow-lg hover:text-white ') +
										' relative inline-block font-medium hover:underline font-montserrat'
									}
								>
									<span className="block">Contact</span>
									{/*<span className="absolute bottom-0 left-0 inline-block w-full h-1 -mb-1 overflow-hidden">
										<span
										/*x-show="hover"* / className="absolute inset-0 inline-block w-full h-1 h-full transform border-t-2 border-green-500"
										/* x-transition:enter="transition ease-out duration-300" x-transition:enter-start="-translate-x-full" x-transition:enter-end="translate-x-0" x-transition:leave="transition ease-out duration-300" x-transition:leave-start="translate-x-0" x-transition:leave-end="translate-x-full" * / style={{
											display: 'none'
										}}* /
										/>
									</span>*/}
								</Link>
							</li>
							{/*<li className="mx-2 lg:mx-3">
								<Link to="/sign-in"
									className={
										(scroll
											? 'text-green-700'
											: 'text-gray-200 text-shadow-lg hover:text-white ') +
										' relative inline-block font-medium hover:underline font-montserrat'
									}
								>
									<span className="block">Sign In</span>
									{/*<span className="absolute bottom-0 left-0 inline-block w-full h-1 -mb-1 overflow-hidden">
										<span
										/*x-show="hover" * / className="absolute inset-0 inline-block w-full h-1 h-full transform border-t-2 border-green-500"
										/* x-transition:enter="transition ease-out duration-300" x-transition:enter-start="-translate-x-full" x-transition:enter-end="translate-x-0" x-transition:leave="transition ease-out duration-300" x-transition:leave-start="translate-x-0" x-transition:leave-end="translate-x-full" * / style={{
											display: 'none'
										}}* /
										/>
									</span>* /}
								</Link>
									</li>*/}
							<li className="mx-2 lg:mx-3">
								<Link to="sign-up"
									className={
										(scroll
											? 'text-green-700 '
											: 'text-gray-200 text-shadow-lg hover:text-white ') +
										' relative inline-block font-medium hover:underline font-montserrat '
									}
								>
									<span className="block">Sign Up</span>
									{/*<span className="absolute bottom-0 left-0 inline-block w-full h-1 -mb-1 overflow-hidden">
										<span
										/* x-show="hover" * / className="absolute inset-0 inline-block w-full h-1 h-full transform border-t-2 border-green-500"
										/*x-transition:enter="transition ease-out duration-300" x-transition:enter-start="-translate-x-full" x-transition:enter-end="translate-x-0" x-transition:leave="transition ease-out duration-300" x-transition:leave-start="translate-x-0" x-transition:leave-end="translate-x-full" * / style={{
											display: 'none'
										}}* /
										/>
									</span>*/}
								</Link>
							</li>
						</ul>
					</nav>
					{/* End Desktop menu */}
					{/* Mobile Nav  */}
					<nav
						className={
							(scroll
								? ' bg-white shadow-md '
								: ' bg-transparent ') +
							'  fixed top-0 z-30 flex flex-col flex-wrap items-center justify-between w-full h-auto px-6 md:hidden'
						}
					>
						<div className="relative z-30 flex items-center justify-between w-full h-20">
						<Link to="/"
								className="flex items-center flex-shrink-0 mr-6 text-white"
							>
								<span
									className={
										(scroll
											? ' text-green-700 '
											: ' text-white ') +
										'text-4xl font-normal leading-none text-white select-none logo font-dancingscript tracking-wide'
									}
								>
									Lian Ariel Yoga
									<span className="text-green-500">.</span>
								</span>
							</Link>
							<div className="block lg:hidden">
								<Menu.Button
									className={
										(scroll
											? 'text-green-700 hover:text-white hover:bg-green-700 hover:bg-opacity-50 '
											: 'text-gray-200 hover:text-white hover:bg-white hover:bg-opacity-25 ') +
										'flex items-center justify-center w-10 h-10  rounded-full focus:outline-none'
									}
								>
									<svg
										className="w-5 h-5 fill-current"
										viewBox="0 0 20 20"
										xmlns="http://www.w3.org/2000/svg"
									>
										<title>Menu</title>
										<path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
									</svg>
								</Menu.Button>
							</div>
						</div>
					</nav>
					{/* End Mobile Nav */}
				</div>
				{/* Mobile Menu */}
				{/*<Transition
            as={Fragment}
        enter="transform duration-200 transition  ease-in-out"
        enterFrom="transform opacity-0"
        enterTo="scale-100 opacity-100"
        leave="transform duration-200 transition ease-in-out"
        leaveFrom="transform scale-100 opacity-100"
        leaveTo="opacity-0"
			>*/}
				<Transition
					as={Fragment}
					enter="ease-out duration-300"
					enterFrom="opacity-0 scale-95"
					enterTo="opacity-100 scale-100"
					leave="ease-in duration-200"
					leaveFrom="opacity-100 scale-100"
					leaveTo="opacity-0 scale-95"
				>
					<Menu.Items
						className="fixed top-0 z-30 flex flex-col items-center justify-center w-full h-full space-y-5 text-lg transition duration-300 ease-in-out origin-center bg-green-700"
						/*style={{ display: 'none' }}*/
					>
						<Menu.Item>
							{({ active }) => (
								<Link to="/about"
									className="block text-green-100 hover:text-white hover:underline font-montserrat"
								>
									About
								</Link>
							)}
						</Menu.Item>
						<Menu.Item>
							{({ active }) => (
								<Link to="#"
									className="block text-green-100 hover:text-white hover:underline font-montserrat"
								>
									Yoga
								</Link>
							)}
						</Menu.Item>

						<Menu.Item>
							{({ active }) => (
								<Link to="#"
									className="block text-green-100 hover:text-white hover:underline font-montserrat"
								>
									Mindfulness
								</Link>
							)}
						</Menu.Item>

						<Menu.Item>
							{({ active }) => (
								<Link to="/contact"
									className="block text-green-100 hover:text-white hover:underline font-montserrat"
								>
									Contact
								</Link>
							)}
						</Menu.Item>

						<div className="flex flex-col justify-center mt-6">
							<Menu.Item>
								{({ active }) => (
									<Link to="/sign-in"
										className="px-8 py-3 mt-2 text-center text-white border-2 border-green-200 rounded-full sm:mt-2 sm:px-8 sm:py-2 hover:bg-green-500 font-montserrat"
									>
										Sign In
									</Link>
								)}
							</Menu.Item>

							<Menu.Item>
								{({ active }) => (
									<Link to="/sign-up"
										className="px-8 py-3 mt-2 text-center text-white bg-green-700 border-2 border-green-200 rounded-full sm:mt-2 sm:px-8 sm:py-2 hover:bg-transparent font-montserrat"
									>
										Sign Up
									</Link>
								)}
							</Menu.Item>
						</div>
					</Menu.Items>
				</Transition>
				{/* End Mobile Menu */}
			</Menu>
		</>
	);
};

export default Header;
