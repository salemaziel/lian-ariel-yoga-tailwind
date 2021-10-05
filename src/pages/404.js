import * as React from 'react';
import Banner from '../components/banner';
import { Link } from 'gatsby';
import Layout from '../components/layout';
import Seo from '../components/seo';

const NotFoundPage = () => (
	<Layout>
		<Seo title="404: Not found" />
		<Banner />
		<section className="relative overflow-hidden lg:py-20">
			<img
				className="object-cover w-full max-h-screen lg:absolute lg:top-0 lg:right-0 h-128 lg:h-auto lg:w-5/12"
				src="https://images.unsplash.com/photo-1544717305-996b815c338c?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80"
				alt
			/>
			<div className="container px-4 mx-auto">
				<div className="flex flex-wrap items-center">
					<div className="w-full mt-12 mb-20 text-center lg:w-7/12">
						<span className="font-semibold text-green-500 uppercase text-md">
							Error 404
						</span>
						<h2 className="mt-8 mb-10 text-4xl font-semibold font-heading">
							Page not found
						</h2>
						<p className="mb-12 text-xl text-gray-500">
							Sorry! We are unable to find the page you are
							looking for
						</p>
						<div className="flex flex-wrap justify-center">
							<Link
								to="/"
								className="w-full px-8 py-4 mb-4 font-sans text-lg font-medium leading-normal text-white bg-green-500 rounded md:w-auto md:mb-0 md:mr-4 hover:bg-green-600"
							>
								Go back to Homepage
							</Link>
						</div>
					</div>
				</div>
			</div>
		</section>
	</Layout>
);

export default NotFoundPage;
