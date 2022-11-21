import React from "react";
import PersonOne from "../../Asset/Image/person-1.png";
import PersonTwo from "../../Asset/Image/person-2.png";

export default function OurInstructors() {
  return (
    <div className="w-full pb-24">
      <div className="text-black text-3xl font-semibold px-10 mx-12 pb-16">
        Meet our instructors
      </div>
      <div className="flex">
        <div className="text-start font-poppins rounded-3xl px-9">
          <div className="w-full flex text-black px-10 gap-8">
            {/* card1 */}
            <div className="w-full shadow text-center pt-9 px-12 pb-12">
              <div className="pb-4">
                <img src={PersonOne} alt="" className="m-auto" width={110} />
              </div>
              <div className="text-xl font-semibold pb-1">Sourav Sen</div>
              <div className="text-brand-color text-base font-semibold pb-9">
                Software Developer
              </div>

              <div className="text-base">
                “Education will be for you what you want it to be”
              </div>
            </div>
            {/* card2 */}
            <div className="w-full shadow text-center pt-9 px-12 pb-12">
              <div className="pb-4">
                <img src={PersonTwo} alt="" className="m-auto" width={110} />
              </div>
              <div className="text-xl font-semibold pb-1">Zahid Islam</div>
              <div className="text-brand-color text-base font-semibold pb-9">
                Tech Lead
              </div>

              <div className="text-base">
                “Knowledge has to be improved, challenged, and increased
                constantly, or it vanishes”
              </div>
            </div>
            {/* card3 */}
            <div className="w-full shadow text-center pt-9 px-12 pb-12">
              <div className="mb-4">
                <img src={PersonTwo} alt="" className="m-auto" width={110} />
              </div>
              <div className="text-xl font-semibold pb-1">Pranto Islam</div>
              <div className="text-brand-color text-base font-semibold pb-9">
                UI UX Designer
              </div>

              <div className="text-base">
                “To know that we know what we know, and to know that we do not
                know what we do not know, that is true knowledge”
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
