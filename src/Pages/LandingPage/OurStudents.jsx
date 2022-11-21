import React from "react";
import PersonOne from "../../Asset/Image/person-1.png";
import PersonTwo from "../../Asset/Image/person-2.png";

export default function OurStudents() {
  return (
    <div className="w-full pb-36">
      <div className="flex">
        <div className="text-center font-poppins rounded-3xl mx-9">
          <div className="w-full text-black text-5xl font-bold px-1 mx-12">
            What our <span className="text-brand-color">Students</span> say <br />
            about us
          </div>
        </div>
        <div className="text-start font-poppins rounded-3xl px-9">
          <div className="w-full flex text-black px-10 gap-8">
            {/* card1 */}
              <div className="w-full shadow pt-9 px-12 pb-12">
                <div className="flex pb-6">
                  <div className="pr-4"><img src={PersonOne} alt="" width={70}/></div>
                  <div className="flex-col pt-2">
                    <div className="text-xl font-semibold">Fahim Fayaz</div>
                    <div className="text-brand-color text-base font-semibold">Software Developer</div>
                    </div>
                </div>
                <div className="text-base">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consectetur ac blandit nam massa massa elementum mollis lectus. Sit ultricies nisl amet non, quis enim velit tempus. Interdum duis imperdiet venenatis </div>
              </div>
              {/* card2 */}
              <div className="w-full shadow pt-9 px-12 pb-12">
                <div className="flex pb-6">
                  <div className="pr-4"><img src={PersonTwo} alt="" width={70}/></div>
                  <div className="flex-col pt-2">
                    <div className="text-xl font-semibold">Mohh Jumah</div>
                    <div className="text-brand-color text-base font-semibold">Data Analyst</div>
                    </div>
                </div>
                <div className="text-base">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consectetur ac blandit nam massa massa elementum mollis lectus. Sit ultricies nisl amet non, quis enim velit tempus. Interdum duis imperdiet venenatis </div>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
}
