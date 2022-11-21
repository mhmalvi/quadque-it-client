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
            <div className="flex text-white gap-6">
              {/* card1 */}
              <div className="flex-col bg-home-color rounded-3xl">
                <div className="flex">
                  <img src={Graphics} alt="" className="w-full" />
                </div>
                <div className="p-5">
                  <div className="flex-col">
                    <div className="flex justify-between">
                      <div className="bg-[#23BDEE] text-[#23BDEE] bg-opacity-50 rounded-2xl py-2 px-4">
                        5.6.22
                      </div>
                      <div className="text-xl py-2">15000 tk</div>
                    </div>
                  </div>
                  <div className="text-2xl pt-2 left-0">Web Design</div>
                  <div className="mx-6">
                    Our new seminar in wordpress 26 June Our new wordpress 26
                    June
                  </div>
                </div>
              </div>
              {/* card2 */}
              <div className="flex-col bg-home-color rounded-3xl">
                <div className="flex">
                  <img src={Motion} alt="" className="w-full" />
                </div>
                <div className="p-5">
                  <div className="flex-col">
                    <div className="flex justify-between">
                      <div className="bg-[#23BDEE] text-[#23BDEE] bg-opacity-50 rounded-2xl py-2 px-4">
                        5.6.22
                      </div>
                      <div className="text-xl py-2">15000 tk</div>
                    </div>
                  </div>
                  <div className="text-2xl pt-2 left-0">Motion Graphics</div>
                  <div className="mx-6">
                    Our new seminar in wordpress 26 June Our new wordpress 26
                    June
                  </div>
                </div>
              </div>
            </div>
            {/* row2 */}
            <div className="flex text-white gap-6">
              {/* card1 */}
              <div className="flex-col bg-home-color rounded-3xl">
                <div className="flex">
                  <img src={Graphics} alt="" className="w-full" />
                </div>
                <div className="p-5">
                  <div className="flex-col">
                    <div className="flex justify-between">
                      <div className="bg-[#23BDEE] text-[#23BDEE] bg-opacity-50 rounded-2xl py-2 px-4">
                        5.6.22
                      </div>
                      <div className="text-xl py-2">15000 tk</div>
                    </div>
                  </div>
                  <div className="text-2xl pt-2 left-0">Web Design</div>
                  <div className="mx-6">
                    Our new seminar in wordpress 26 June Our new wordpress 26
                    June
                  </div>
                </div>
              </div>
              {/* card2 */}
              <div className="flex-col bg-home-color rounded-3xl">
                <div className="flex">
                  <img src={Uiux} alt="" className="w-full" />
                </div>
                <div className="p-5">
                  <div className="flex-col">
                    <div className="flex justify-between">
                      <div className="bg-[#23BDEE] text-[#23BDEE] bg-opacity-50 rounded-2xl py-2 px-4">
                        5.6.22
                      </div>
                      <div className="text-xl py-2">15000 tk</div>
                    </div>
                  </div>
                  <div className="text-2xl pt-2 left-0">UI/UX Design</div>
                  <div className="mx-6">
                    Our new seminar in wordpress 26 June Our new wordpress 26
                    June
                  </div>
                </div>
              </div>
            </div>
            {/* row3 */}
            <div className="flex text-white gap-6">
              {/* card1 */}
              <div className="flex-col bg-home-color rounded-3xl">
                <div className="flex">
                  <img src={Motion} alt="" className="w-full" />
                </div>
                <div className="p-5">
                  <div className="flex-col">
                    <div className="flex justify-between">
                      <div className="bg-[#23BDEE] text-[#23BDEE] bg-opacity-50 rounded-2xl py-2 px-4">
                        5.6.22
                      </div>
                      <div className="text-xl py-2">15000 tk</div>
                    </div>
                  </div>
                  <div className="text-2xl pt-2 left-0">Motion Graphics</div>
                  <div className="mx-6">
                    Our new seminar in wordpress 26 June Our new wordpress 26
                    June
                  </div>
                </div>
              </div>
              {/* card2 */}
              <div className="flex-col bg-home-color rounded-3xl">
                <div className="flex">
                  <img src={Uiux} alt="" className="w-full" />
                </div>
                <div className="p-5">
                  <div className="flex-col">
                    <div className="flex justify-between">
                      <div className="bg-[#23BDEE] text-[#23BDEE] bg-opacity-50 rounded-2xl py-2 px-4">
                        5.6.22
                      </div>
                      <div className="text-xl py-2">15000 tk</div>
                    </div>
                  </div>
                  <div className="text-2xl pt-2 left-0">UI/UX Design</div>
                  <div className="mx-6">
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
