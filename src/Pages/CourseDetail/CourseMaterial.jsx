import React from "react";
import Icons from "../../Components/Shared/Icons";

const CourseMaterial = () => {
  return (
    <div>
      <div className="bg-home-color w-full font-poppins text-white pb-24">
        <div className="text-center mx-auto">
          <a href="" className="px-2">
            {" "}
            Curriculum{" "}
          </a>
          <a href="" className="px-2 ">
            {" "}
            Software{" "}
          </a>
        </div>
        <div className="pt-2 text-center mx-auto font-semibold text-2xl">
          What you can learn in the course
        </div>

        <div className="w-full flex justify-center pt-5 mx-auto">
          <div className="flex justify-between gap-20">
            <div>
              <ul className="">
                <li>
                  <div className="flex gap-2">
                    {" "}
                    <div className="bg-brand-color  p-1 my-2"></div>Product
                    design{" "}
                  </div>
                </li>
                <li>
                  <div className="flex gap-2">
                    {" "}
                    <div className="bg-brand-color  p-1 my-2"></div>Branding
                    design{" "}
                  </div>
                </li>
                <li>
                  <div className="flex gap-2">
                    {" "}
                    <div className="bg-brand-color  p-1 my-2"></div>Print design
                  </div>
                </li>
                <li>
                  <div className="flex gap-2">
                    {" "}
                    <div className="bg-brand-color  p-1 my-2"></div>Publishing
                    design
                  </div>
                </li>
              </ul>
            </div>
            <div>
              <ul className=" ">
                <li>
                  <div className="flex gap-2">
                    {" "}
                    <div className="bg-brand-color  p-1 my-2"></div>
                    Prowess to research{" "}
                  </div>
                </li>
                <li>
                  <div className="flex gap-2">
                    {" "}
                    <div className="bg-brand-color  p-1 my-2"></div>
                    Website design{" "}
                  </div>
                </li>
                <li>
                  <div className="flex gap-2">
                    {" "}
                    <div className="bg-brand-color  p-1 my-2"></div>
                    Publishing design
                  </div>
                </li>
                <li>
                  <div className="flex gap-2">
                    {" "}
                    <div className="bg-brand-color  p-1 my-2"></div>
                    Animation design
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="pt-10 text-center mx-auto font-semibold text-2xl">
          Job Opportunities
        </div>

{/* first row */}
        <div className="flex justify-center pt-8 gap-6">
          <div className="bg-white bg-opacity-10 w-50 border rounded-2xl p-5">
            <div className="flex-col">
              <div>
                <Icons.Bank className="m-auto" />
              </div>
              <div className="font-poppins text-xl text-center py-2">Bank </div>
            </div>
          </div>
          <div className="bg-white bg-opacity-10 w-50 border rounded-2xl p-5">
            <div className="flex-col">
              <div>
                <Icons.Supershop className="m-auto" />
              </div>
              <div className="font-poppins text-xl text-center py-2">
                Super Shop{" "}
              </div>
            </div>
          </div>
          <div className="bg-white bg-opacity-10 w-50 border rounded-2xl p-5">
            <div className="flex-col">
              <div>
                <Icons.Tourcompanies className="m-auto" />
              </div>
              <div className="font-poppins text-xl text-center py-2">
                Tour Companies{" "}
              </div>
            </div>
          </div>
        </div>
{/* second row */}
        <div className="flex justify-center pt-8 gap-6">
          <div className="bg-white bg-opacity-10 w-50 border rounded-2xl p-5">
            <div className="flex-col">
              <div>
                <Icons.Fashionindustry className="m-auto" />
              </div>
              <div className="font-poppins text-xl text-center py-2">
                Fashion Industry{" "}
              </div>
            </div>
          </div>
          <div className="bg-white bg-opacity-10 w-50 border rounded-2xl p-5">
            <div className="flex-col">
              <div>
                <Icons.Itcompanies className="m-auto" />
              </div>
              <div className="font-poppins text-xl text-center py-2">
                It Companies{" "}
              </div>
            </div>
          </div>
          <div className="bg-white bg-opacity-10 w-50 border rounded-2xl p-5">
            <div className="flex-col">
              <div>
                <Icons.Mediaindustries className="m-auto" />
              </div>
              <div className="font-poppins text-xl text-center py-2">
                Media Industries
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseMaterial;
