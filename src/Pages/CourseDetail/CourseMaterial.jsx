import React from "react";
import Icons from "../../Components/Shared/Icons";



export default function CourseMaterial() {
  return (
    <div>
      <div className="bg-home-color w-full h-full font-poppins text-white">
        <div className="w-1/3 pt-30 text-center mx-auto">
          <span className="px-2"> Curriculam </span>
          <span className="px-2 "> Software </span>
        </div>
        <div className="w-1/3 pt-2 text-center mx-auto font-semibold text-2xl">
          You can learn in the course
        </div>

        <div className="w-1/2 pt-5  mx-auto flex justify-center">
         
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
                    Prowess to research
                    {" "}
                  </div>
                </li>
                <li>
                  <div className="flex gap-2">
                    {" "}
                    <div className="bg-brand-color  p-1 my-2"></div>
                    Website design
                    {" "}
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
                 <div className="w-1/3 pt-10 text-center mx-auto font-semibold text-2xl">
                   Job Opportunities
                 </div>
             
             
             <div className="flex relative mt-4 justify-center mx-auto h-30 w-11  ">
                 <div className="bg-slate-900 mr-3 py-4 px-4  border rounded-2xl">
                 <div className="mx-8">
                 <Icons.Bank />
                 </div>
            <span className="font-poppins  text-sm px-5 py-2">
              Bank{" "}
            </span>
            </div>

            <div className="bg-slate-900 mr-3 py-4 px-4 border rounded-2xl">
            <div className="mx-8">
            <Icons.Supershop />
            </div>
            <span className="font-poppins  text-sm  py-2">
            Super Shop{" "}
            </span>
            </div>

            <div className="bg-slate-900  py-4 px-4 border rounded-2xl">
            <div className="mx-8">
            <Icons.Tourcompanies />
            </div>
            <span className="font-poppins  text-sm py-2">
            Tour Companies{" "}
            </span>
            </div>

      </div>
            
            
      <div className="flex relative justify-center mt-3 mx-auto h-30 w-11 ">
                 <div className="bg-slate-900  mr-3 py-4 px-4 border rounded-2xl">
                  
                  <div className="mx-8">
               <Icons.Fashionindustry />
               
               </div>
            <span className="font-poppins justify-center text-sm mx-auto">
            Fashion Industry {" "}
            </span>
            </div>

            <div className="bg-slate-900 mr-3 py-4 px-4  border rounded-2xl">
            <div className="mx-8">
            <Icons.Itcompanies />
            </div>
            <span className="font-poppins  text-sm  py-2">
            It Companies  {" "}
            </span>
            </div>

            <div className="bg-slate-900 mx-4 py-4 px-4 border rounded-2xl">
            <div className="mx-8">
            <Icons.Mediaindustries/>
            </div>
            <span className="font-poppins  text-sm py-2">
            Media Industries{" "}
            </span>
            </div>

            </div>




      </div>
    </div>
  );
}
