import React from "react";
import Graphics from "../../Asset/Image/graphics.png";
import Motion from "../../Asset/Image/motion.png";
import Uiux from "../../Asset/Image/uiux.png";

export default function CourseGallery() {
  return (
    <div className="w-full font-poppins text-white">
      <div className="bg-home-color py-13 px-30 relative">
        <div className="flex">
          <div className="w-1/3">
            <div className="text-xl">Course Category</div>
            <ul className="py-5 leading-10">
              <li>
                <a href="" className="">
                  Graphics & Design
                </a>
              </li>
              <li>
                <a href="" className="">
                  Programming
                </a>
              </li>
              <li>
                <a href="" className="">
                  Advanced Programming
                </a>
              </li>
              <li>
                <a href="" className="">
                  Digital Marketing
                </a>
              </li>
              <li>
                <a href="" className="">
                  Writing
                </a>
              </li>
              <li>
                <a href="" className="">
                  Video & Animation
                </a>
              </li>
              <li>
                <a href="" className="">
                  Others
                </a>
              </li>
            </ul>
          </div>
          <div className="w-full">
            {/* Gallery */}     
            {/* row1 */}      
            <div className="flex text-white gap-6 my-6">
              {/* card1 */}
              <div className="flex-col group bg-home-color rounded-3xl border border-white hover:border-4 hover:bg-[#050042] hover:border-[#23BDEE]">
                <div className="">
                  <img src={Graphics} alt="" className="w-full rounded-3xl scale-90 group-hover:scale-100 ease-in duration-500" />
                </div>
                <div className="p-5">
                  <div className="flex-col">
                    <div className="flex justify-between">
                      <div className="bg-[#1483a4] text-[#23BDEE] bg-opacity-50 rounded-full py-2 px-4">
                        5.6.22
                      </div>
                      <div className="text-xl py-2">15000 tk</div>
                    </div>
                  </div>
                  <div className="text-2xl pt-2 left-0">Motion Graphics</div>
                  <div className="py-2">
                    Our new seminar in wordpress 26 June Our new wordpress 26
                    June
                  </div>
                </div>
              </div>
              {/* card2 */}
              <div className="flex-col group bg-home-color rounded-3xl border border-white hover:border-4 hover:bg-[#050042] hover:border-[#23BDEE]">
                <div className="">
                  <img src={Motion} alt="" className="w-full rounded-3xl scale-90 group-hover:scale-100 ease-in duration-500" />
                </div>
                <div className="p-5">
                  <div className="flex-col">
                    <div className="flex justify-between">
                      <div className="bg-[#1483a4] text-[#23BDEE] bg-opacity-50 rounded-full py-2 px-4">
                        5.6.22
                      </div>
                      <div className="text-xl py-2">15000 tk</div>
                    </div>
                  </div>
                  <div className="text-2xl pt-2 left-0">Motion Graphics</div>
                  <div className="py-2">
                    Our new seminar in wordpress 26 June Our new wordpress 26
                    June
                  </div>
                </div>
              </div>
            </div>
            {/* row2 */}
            <div className="flex text-white gap-6 my-6">
              {/* card1 */}
              <div className="flex-col group bg-home-color rounded-3xl border border-white hover:border-4 hover:bg-[#050042] hover:border-[#23BDEE]">
                <div className="">
                  <img src={Motion} alt="" className="w-full rounded-3xl scale-90 group-hover:scale-100 ease-in duration-500" />
                </div>
                <div className="p-5">
                  <div className="flex-col">
                    <div className="flex justify-between">
                      <div className="bg-[#1483a4] text-[#23BDEE] bg-opacity-50 rounded-full py-2 px-4">
                        5.6.22
                      </div>
                      <div className="text-xl py-2">15000 tk</div>
                    </div>
                  </div>
                  <div className="text-2xl pt-2 left-0">Motion Graphics</div>
                  <div className="py-2">
                    Our new seminar in wordpress 26 June Our new wordpress 26
                    June
                  </div>
                </div>
              </div>
              {/* card2 */}
              <div className="flex-col group bg-home-color rounded-3xl border border-white hover:border-4 hover:bg-[#050042] hover:border-[#23BDEE]">
                <div className="">
                  <img src={Uiux} alt="" className="w-full rounded-3xl scale-90 group-hover:scale-100 ease-in duration-500" />
                </div>
                <div className="p-5">
                  <div className="flex-col">
                    <div className="flex justify-between">
                      <div className="bg-[#1483a4] text-[#23BDEE] bg-opacity-50 rounded-full py-2 px-4">
                        5.6.22
                      </div>
                      <div className="text-xl py-2">15000 tk</div>
                    </div>
                  </div>
                  <div className="text-2xl pt-2 left-0">Motion Graphics</div>
                  <div className="py-2">
                    Our new seminar in wordpress 26 June Our new wordpress 26
                    June
                  </div>
                </div>
              </div>
            </div>
            {/* row3 */}
            <div className="flex text-white gap-6 my-6">
              {/* card1 */}
              <div className="flex-col group bg-home-color rounded-3xl border border-white hover:border-4 hover:bg-[#050042] hover:border-[#23BDEE]">
                <div className="">
                  <img src={Motion} alt="" className="w-full rounded-3xl scale-90 group-hover:scale-100 ease-in duration-500" />
                </div>
                <div className="p-5">
                  <div className="flex-col">
                    <div className="flex justify-between">
                      <div className="bg-[#1483a4] text-[#23BDEE] bg-opacity-50 rounded-full py-2 px-4">
                        5.6.22
                      </div>
                      <div className="text-xl py-2">15000 tk</div>
                    </div>
                  </div>
                  <div className="text-2xl pt-2 left-0">Motion Graphics</div>
                  <div className="py-2">
                    Our new seminar in wordpress 26 June Our new wordpress 26
                    June
                  </div>
                </div>
              </div>
              {/* card2 */}
              <div className="flex-col group bg-home-color rounded-3xl border border-white hover:border-4 hover:bg-[#050042] hover:border-[#23BDEE]">
                <div className="">
                  <img src={Uiux} alt="" className="w-full rounded-3xl scale-90 group-hover:scale-100 ease-in duration-500" />
                </div>
                <div className="p-5">
                  <div className="flex-col">
                    <div className="flex justify-between">
                      <div className="bg-[#1483a4] text-[#23BDEE] bg-opacity-50 rounded-full py-2 px-4">
                        5.6.22
                      </div>
                      <div className="text-xl py-2">15000 tk</div>
                    </div>
                  </div>
                  <div className="text-2xl pt-2 left-0">Motion Graphics</div>
                  <div className="py-2">
                    Our new seminar in wordpress 26 June Our new wordpress 26
                    June
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
