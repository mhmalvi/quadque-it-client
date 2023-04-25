import { motion } from "framer-motion";
import React from "react";
import { Zoom } from "react-reveal";
import Fade from "react-reveal/Fade";
import Stu1 from "../../../Asset/Image/stu1.png";
import Stu2 from "../../../Asset/Image/stu2.png";
import Stu3 from "../../../Asset/Image/stu3.png";
import Stu4 from "../../../Asset/Image/stu4.png";
import Stu5 from "../../../Asset/Image/stu5.png";
import Stu6 from "../../../Asset/Image/stu6.png";
import Stu7 from "../../../Asset/Image/stu7.png";
import Stu8 from "../../../Asset/Image/stu8.png";
import Student from "../../../Components/Shared/JsonData/student.json";

const OurStudentsDragable = ({theme}) => {

  return (
    <div className={`${theme==="dark" && "bg-home-color"} hidden lg:block w-full pb-13 lg:pb-36 lg:visible overflow-x-hidden dragableScroller`}>
      <Fade left>
        <div className="2xl:hidden text-center lg:text-start rounded-3xl mx-9">
          <div className={`w-full ${theme==="dark" ? "text-white text-shadow-white":"text-black text-shadow"} text-3xl lg:text-5xl font-bold lg:mx-12 pb-18`}>
            What our <span className="text-brand-color">Students</span> say
            <br />
            about us
          </div>
        </div>
      </Fade>
      <div className="w-full min-h-[1000px] text-start dragableScroller">
        <Fade right>
          <div className="text-black lg:px-10 gap-8">
            <div className="w-full relative">
              <motion.div
                drag
                dragConstraints={{
                  left: 0,
                  top: 0,
                  right: 0,
                  bottom: 0,
                }}
                className={`${theme==="dark" ? "text-white text-shadow-white":"text-black text-shadow"} hidden 2xl:block absolute top-[400px] left-[550px] w-full text-3xl lg:text-[60px] leading-[60px] font-bold lg:mx-12 pb-18`}
              >
                What our <span className="text-brand-color">Students</span>{" "}
                <br />
                say about us
              </motion.div>
              <div className="hidden 2xl:block absolute top-[550px] left-[600px] bg-brand-color text-white text-sm font-semibold py-1 px-3 rounded-full text-shadow">
                Click & drag to look around!
              </div>
              {Student?.map((person, i) => (
                <motion.div
                key={i}
                  className={reviewClasses[i]}
                  drag
                  dragConstraints={{
                    left: -400,
                    top: -100,
                    right: 400,
                    bottom: 200,
                    /* left: person?.left,
                  top: person?.top,
                  right: person?.right,
                  bottom: person?.bottom, */
                  }}
                >
                  <Zoom delay={400 * i}>
                    <div className="bg-white max-w-[480px] shadow-md text-center rounded-md pt-7 px-8 pb-8 mx-3 my-3">
                      <div className="pb-4">
                        <img
                          src={
                            StudentImg?.find((wtf) => wtf.id === person?.id)
                              ?.stuimage
                          }
                          alt=""
                          className="w-[5rem] h-[5rem] m-auto"
                        />
                      </div>
                      <div className="text-lg font-semibold pb-1">
                        {person?.name}
                      </div>
                      <div className="text-brand-color text-sm font-semibold pb-9">
                        {person?.job}
                      </div>

                      <div className="text-sm text-center">
                        “{person?.comment}”
                      </div>
                    </div>
                  </Zoom>
                </motion.div>
              ))}
            </div>
          </div>
        </Fade>
      </div>
    </div>
  );
}
export default OurStudentsDragable;
const StudentImg = [
  {id:1, stuimage:Stu4},
  {id:2, stuimage:Stu2},
  {id:3, stuimage:Stu7},
  {id:4, stuimage:Stu3},
  {id:5, stuimage:Stu6},
  {id:6, stuimage:Stu1},
  {id:7, stuimage:Stu5},
  {id:8, stuimage:Stu8},
]

const reviewClasses=[
"absolute top-[80px] left-[100px]",
"absolute top-[150px] right-[0px]",
"absolute top-[400px] right-[100px]",
"absolute top-[400px] left-[40px]",
"absolute top-[660px] right-[130px]",
"absolute top-[700px] right-[600px]",
"absolute top-[600px] left-[200px]",
"absolute top-[0px] right-[500px]",
"absolute bottom-[600px] left-[200px]",
"absolute bottom-[250px] left-[500px]",
]