import * as React from "react"

import TwoIndianGuys from "../../../images/lian_social_gallery/2-indian-guys.jpg"
import LianPlusOne from "../../../images/lian_social_gallery/lian-plus-one.jpg"
import GroupLiftingLian from "../../../images/lian_social_gallery/group-lifting-lian.jpg"
import PinkPants from "../../../images/lian_yoga_posing/pink-pants.jpg"






const S3Gallery = () => (
    <>
  {/* Section 4 */}
  <section className="bg-white">
    <div className="pt-16 pb-16 pl-4 pr-4 mx-auto ml-auto mr-auto bg-top bg-cover max-w-7xl md:px-24 lg:px-12 lg:py-20">
      <div className="mb-10 ml-auto mr-auto bg-top bg-cover max-w-7xl md:mx-auto sm:text-center lg:max-w-2xl md:mb-16">
        <p className="text-base text-gray-700 md:text-lg">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
      </div>
      <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
        {/* Team Member 1 */}
        <div>
          <div className="relative overflow-visible rounded-md shadow-lg group">
            <img className="object-cover w-full rounded-md h-72 xl:h-80" src={TwoIndianGuys} alt="" />
           {/*} <div className="absolute inset-0 px-6 py-4 text-center duration-300 opacity-0 group-hover:opacity-100">
              <div className="absolute inset-0 w-full h-full bg-gradient-to-br from-blue-500 opacity-60 to-purple-600" />
              <div className="relative flex flex-col items-center justify-center w-full h-full">
                <p className="mb-1 text-lg font-bold text-white">John Smith</p>
                <p className="mb-4 text-xs text-blue-50">Founder &amp; CEO</p>
                <p className="mb-4 text-xs tracking-wide text-blue-50">John has a family of three and enjoys hiking.</p>
                <div className="flex items-center justify-center space-x-3 bg-top bg-cover">
                  <Link to="#_" className="transition-colors duration-300 bg-top bg-cover cursor-pointer hover:text-white text-blue-50">
                    <svg className="h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M24,4.6c-0.9,0.4-1.8,0.7-2.8,0.8c1-0.6,1.8-1.6,2.2-2.7c-1,0.6-2,1-3.1,1.2c-0.9-1-2.2-1.6-3.6-1.6 c-2.7,0-4.9,2.2-4.9,4.9c0,0.4,0,0.8,0.1,1.1C7.7,8.1,4.1,6.1,1.7,3.1C1.2,3.9,1,4.7,1,5.6c0,1.7,0.9,3.2,2.2,4.1 C2.4,9.7,1.6,9.5,1,9.1c0,0,0,0,0,0.1c0,2.4,1.7,4.4,3.9,4.8c-0.4,0.1-0.8,0.2-1.3,0.2c-0.3,0-0.6,0-0.9-0.1c0.6,2,2.4,3.4,4.6,3.4 c-1.7,1.3-3.8,2.1-6.1,2.1c-0.4,0-0.8,0-1.2-0.1c2.2,1.4,4.8,2.2,7.5,2.2c9.1,0,14-7.5,14-14c0-0.2,0-0.4,0-0.6 C22.5,6.4,23.3,5.5,24,4.6z" /></svg>
                  </Link>
                  <Link to="#_" className="transition-colors duration-300 cursor-pointer text-blue-50 hover:text-white">
                    <svg className="h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M22,0H2C0.895,0,0,0.895,0,2v20c0,1.105,0.895,2,2,2h11v-9h-3v-4h3V8.413c0-3.1,1.893-4.788,4.659-4.788 c1.325,0,2.463,0.099,2.795,0.143v3.24l-1.918,0.001c-1.504,0-1.795,0.715-1.795,1.763V11h4.44l-1,4h-3.44v9H22c1.105,0,2-0.895,2-2 V2C24,0.895,23.105,0,22,0z" /></svg>
                  </Link>
                </div>
              </div>
            </div>*/}
          </div>
        </div>
        {/* Team Member 2 */}
        <div>
          <div className="relative overflow-visible rounded-md shadow-lg group">
            <img className="object-cover w-full rounded-md h-72 xl:h-80" src={LianPlusOne} alt="" />
           {/*} <div className="absolute inset-0 px-6 py-4 text-center duration-300 opacity-0 group-hover:opacity-100">
              <div className="absolute inset-0 w-full h-full bg-gradient-to-br from-blue-500 opacity-60 to-purple-600" />
              <div className="relative flex flex-col items-center justify-center w-full h-full">
                <p className="mb-1 text-lg font-bold text-white">Sean Jackson</p>
                <p className="mb-4 text-xs text-blue-50">Co-Founder</p>
                <p className="mb-4 text-xs tracking-wide text-blue-50">Sean's passionate about drawing, art, and photography.</p>
                <div className="flex items-center justify-center space-x-3 bg-top bg-cover">
                  <div className="transition-colors duration-300 bg-top bg-cover cursor-pointer hover:text-white text-blue-50">
                    <svg className="h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M24,4.6c-0.9,0.4-1.8,0.7-2.8,0.8c1-0.6,1.8-1.6,2.2-2.7c-1,0.6-2,1-3.1,1.2c-0.9-1-2.2-1.6-3.6-1.6 c-2.7,0-4.9,2.2-4.9,4.9c0,0.4,0,0.8,0.1,1.1C7.7,8.1,4.1,6.1,1.7,3.1C1.2,3.9,1,4.7,1,5.6c0,1.7,0.9,3.2,2.2,4.1 C2.4,9.7,1.6,9.5,1,9.1c0,0,0,0,0,0.1c0,2.4,1.7,4.4,3.9,4.8c-0.4,0.1-0.8,0.2-1.3,0.2c-0.3,0-0.6,0-0.9-0.1c0.6,2,2.4,3.4,4.6,3.4 c-1.7,1.3-3.8,2.1-6.1,2.1c-0.4,0-0.8,0-1.2-0.1c2.2,1.4,4.8,2.2,7.5,2.2c9.1,0,14-7.5,14-14c0-0.2,0-0.4,0-0.6 C22.5,6.4,23.3,5.5,24,4.6z" /></svg>
                  </div>
                  <div className="transition-colors duration-300 cursor-pointer text-blue-50 hover:text-white">
                    <svg className="h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M22,0H2C0.895,0,0,0.895,0,2v20c0,1.105,0.895,2,2,2h11v-9h-3v-4h3V8.413c0-3.1,1.893-4.788,4.659-4.788 c1.325,0,2.463,0.099,2.795,0.143v3.24l-1.918,0.001c-1.504,0-1.795,0.715-1.795,1.763V11h4.44l-1,4h-3.44v9H22c1.105,0,2-0.895,2-2 V2C24,0.895,23.105,0,22,0z" /></svg>
                  </div>
                </div>
              </div>
          </div>*/}
          </div>
        </div>
        {/* Team Member 3 */}
        <div>
          <div className="relative overflow-visible rounded-md shadow-lg group">
            <img className="object-cover w-full rounded-md h-72 xl:h-80" src={GroupLiftingLian} alt="" />
        {/*    <div className="absolute inset-0 px-6 py-4 text-center duration-300 opacity-0 group-hover:opacity-100">
              <div className="absolute inset-0 w-full h-full bg-gradient-to-br from-blue-500 opacity-60 to-purple-600" />
              <div className="relative flex flex-col items-center justify-center w-full h-full">
                <p className="mb-1 text-lg font-bold text-white">Fred Jenson</p>
                <p className="mb-4 text-xs text-blue-50">Product Lead</p>
                <p className="mb-4 text-xs tracking-wide text-blue-50">Fred is a Coffee Connoisseur who also loves to ski.</p>
                <div className="flex items-center justify-center space-x-3 bg-top bg-cover">
                  <div className="transition-colors duration-300 bg-top bg-cover cursor-pointer hover:text-white text-blue-50">
                    <svg className="h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M24,4.6c-0.9,0.4-1.8,0.7-2.8,0.8c1-0.6,1.8-1.6,2.2-2.7c-1,0.6-2,1-3.1,1.2c-0.9-1-2.2-1.6-3.6-1.6 c-2.7,0-4.9,2.2-4.9,4.9c0,0.4,0,0.8,0.1,1.1C7.7,8.1,4.1,6.1,1.7,3.1C1.2,3.9,1,4.7,1,5.6c0,1.7,0.9,3.2,2.2,4.1 C2.4,9.7,1.6,9.5,1,9.1c0,0,0,0,0,0.1c0,2.4,1.7,4.4,3.9,4.8c-0.4,0.1-0.8,0.2-1.3,0.2c-0.3,0-0.6,0-0.9-0.1c0.6,2,2.4,3.4,4.6,3.4 c-1.7,1.3-3.8,2.1-6.1,2.1c-0.4,0-0.8,0-1.2-0.1c2.2,1.4,4.8,2.2,7.5,2.2c9.1,0,14-7.5,14-14c0-0.2,0-0.4,0-0.6 C22.5,6.4,23.3,5.5,24,4.6z" /></svg>
                  </div>
                  <div className="transition-colors duration-300 cursor-pointer text-blue-50 hover:text-white">
                    <svg className="h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M22,0H2C0.895,0,0,0.895,0,2v20c0,1.105,0.895,2,2,2h11v-9h-3v-4h3V8.413c0-3.1,1.893-4.788,4.659-4.788 c1.325,0,2.463,0.099,2.795,0.143v3.24l-1.918,0.001c-1.504,0-1.795,0.715-1.795,1.763V11h4.44l-1,4h-3.44v9H22c1.105,0,2-0.895,2-2 V2C24,0.895,23.105,0,22,0z" /></svg>
                  </div>
                </div>
              </div>
            </div>*/}
          </div>
        </div>
        {/* Team Member 4 */}
        <div>
          <div className="relative overflow-visible rounded-md shadow-lg group">
            <img className="object-cover w-full rounded-md h-72 xl:h-80" src={PinkPants} alt="" />
        {/*    <div className="absolute inset-0 px-6 py-4 text-center duration-300 opacity-0 group-hover:opacity-100">
              <div className="absolute inset-0 w-full h-full bg-gradient-to-br from-blue-500 opacity-60 to-purple-600" />
              <div className="relative flex flex-col items-center justify-center w-full h-full">
                <p className="mb-1 text-lg font-bold text-white">Jeremy Lee</p>
                <p className="mb-4 text-xs text-blue-50">Lead Engineer</p>
                <p className="mb-4 text-xs tracking-wide text-blue-50">Jeremy loves to spend time with his family and go to the gym.</p>
                <div className="flex items-center justify-center space-x-3 bg-top bg-cover">
                  <div className="transition-colors duration-300 bg-top bg-cover cursor-pointer hover:text-white text-blue-50">
                    <svg className="h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M24,4.6c-0.9,0.4-1.8,0.7-2.8,0.8c1-0.6,1.8-1.6,2.2-2.7c-1,0.6-2,1-3.1,1.2c-0.9-1-2.2-1.6-3.6-1.6 c-2.7,0-4.9,2.2-4.9,4.9c0,0.4,0,0.8,0.1,1.1C7.7,8.1,4.1,6.1,1.7,3.1C1.2,3.9,1,4.7,1,5.6c0,1.7,0.9,3.2,2.2,4.1 C2.4,9.7,1.6,9.5,1,9.1c0,0,0,0,0,0.1c0,2.4,1.7,4.4,3.9,4.8c-0.4,0.1-0.8,0.2-1.3,0.2c-0.3,0-0.6,0-0.9-0.1c0.6,2,2.4,3.4,4.6,3.4 c-1.7,1.3-3.8,2.1-6.1,2.1c-0.4,0-0.8,0-1.2-0.1c2.2,1.4,4.8,2.2,7.5,2.2c9.1,0,14-7.5,14-14c0-0.2,0-0.4,0-0.6 C22.5,6.4,23.3,5.5,24,4.6z" /></svg>
                  </div>
                  <div className="transition-colors duration-300 cursor-pointer text-blue-50 hover:text-white">
                    <svg className="h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M22,0H2C0.895,0,0,0.895,0,2v20c0,1.105,0.895,2,2,2h11v-9h-3v-4h3V8.413c0-3.1,1.893-4.788,4.659-4.788 c1.325,0,2.463,0.099,2.795,0.143v3.24l-1.918,0.001c-1.504,0-1.795,0.715-1.795,1.763V11h4.44l-1,4h-3.44v9H22c1.105,0,2-0.895,2-2 V2C24,0.895,23.105,0,22,0z" /></svg>
                  </div>
                </div>
              </div>
            </div>*/}
          </div>
        </div>
      </div>
    </div>
  </section>


    </>
) 

export default S3Gallery