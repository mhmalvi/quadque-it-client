import React from "react";
import Icons from "../../Components/Shared/Icons";

const CourseMaterial = () => {
  return (
    <div>
      <div className="w-full lg:bg-gradient-to-r from-transparent to-[#ffffff10] font-poppins text-white lg:py-12 lg:px-12 mb-24">
        <div className="lg:flex justify-evenly">
          <div className="lg:w-2/3 flex flex-wrap justify-center gap-14 m-auto pb-16">
            <div className="">
                <div>
                  <Icons.Bank className="w-16 lg:w-full m-auto" />
                </div>
            </div>
            <div className="">
                <div>
                  <Icons.Supershop className="w-16 lg:w-full m-auto" />
                </div>
            </div>
            <div className="">
                <div>
                  <Icons.Tourcompanies className="w-16 lg:w-full m-auto" />
                </div>
            </div>
            <div className="">
                <div>
                  <Icons.Fashionindustry className="w-16 lg:w-full m-auto" />
                </div>
            </div>
            <div className="">
                <div>
                  <Icons.Itcompanies className="w-16 lg:w-full m-auto" />
                </div>
            </div>
            <div className="">
                <div>
                  <Icons.Mediaindustries className="w-16 lg:w-full m-auto" />
                </div>
            </div>
          </div>
          <div className="lg:w-1/3 text-center lg:text-start m-auto px-6 lg:px-0">
            <div className="text-4xl pb-9">Job Opportunities</div>
            <div className="text-xl pb-18">
              To be a successful graphic designer you need to have training in
              quality curriculum as well as project based work experience and a
              good idea about the marketplace. So none of these have been
              included together in our course module.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseMaterial;
