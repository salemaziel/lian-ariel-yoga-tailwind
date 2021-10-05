import * as React from 'react';

import PinkPants from '../../../images/lian_yoga_posing/pink-pants.jpg';
import { Link } from 'gatsby';

//import RockSand from "../../../images/stock_relaxation_misc/zen-5533531_1920.jpg"

const S3Meet = () => (
	<>
		{/* Section 3 */}
		<section
			className="bg-transparent"
			style={{
				backgroundImage: `linear-gradient(
170deg,#fff 65%,#dcfce7 0,#dcfce7 123%)`
			}}
		>
			<div className="flex flex-col-reverse items-start justify-center max-w-5xl px-10 pt-16 mx-auto md:flex-row md:space-x-20 lg:space-x-32 md:pt-24 md:pb-20">
				<div className="box-content relative flex items-start justify-center flex-shrink-0 pb-16 border-2 border-b-0 border-green-500 w-80 rounded-t-3xl h-96 ">
					<div className="absolute w-full h-full px-3 pt-0 pb-0">
						<img
							className="box-content relative z-10 w-full h-full bg-gray-100 rounded-t-3xl"
							src={PinkPants}
							alt="Lian Ariel in Maui"
						/>
					</div>
				</div>
				<div className="flex flex-col w-full h-full max-w-xs pb-10 space-y-5 md:pb-6 md:max-w-none">
					<h2 className="text-5xl font-black leading-normal tracking-wide text-center text-green-700 font-dancingscript">
						Hi, <br className="block lg:hidden" /> I'm Lian Ariel
					</h2>
					<p className="text-lg text-center text-gray-600">
						I help people break out of toxic cycles of grind
						culture, sleep deprivation, and self-sacrifice using
						tools and wisdom from a variety of healing traditions.
            </p>
            <p className="text-lg text-center text-gray-600">
						My mission is to support people in developing
						sustainable self care practices and create space for
						radical imagination so that we can all be more effective
						agents for social change.
            </p>
            {/*<p className="text-lg text-center text-gray-600">
             I believe it is EVERYONE’s
						birthright to be well, joyful, and at ease. I aim to
						help people claim that through movement, breathwork,
						meditation, energy healing, and collective action.
            </p>
            <p className="text-lg text-center text-gray-600">
						Whether this work is brand new to you, you’ve “fallen
						off the wagon” or you worry your dreams are too big, I
						am here to remind you of your power, cheer you on, and
						celebrate all of your successes.{' '}
    </p>*/}
					{/*<Link
						to="#_"
						className="flex items-center px-4 py-2 font-medium text-green-100 bg-green-700 border-2 border-green-700 rounded-lg"
					>
						Learn More About Her Training
						<svg
							className="w-4 h-4 ml-1 -mr-1"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth={2}
								d="M9 5l7 7-7 7"
							/>
						</svg>
          </Link>*/}
				</div>
			</div>
		</section>
	</>
);

export default S3Meet;
