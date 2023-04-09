import { Pagination } from "antd";
import React, { useEffect, useState } from "react";
import Fade from "react-reveal/Fade";
import { Link } from "react-router-dom";
import stories1 from "../../../Asset/Image/stories1.png";
import stories2 from "../../../Asset/Image/stories2.png";
import stories3 from "../../../Asset/Image/stories3.png";
import stories4 from "../../../Asset/Image/stories4.png";
import stories5 from "../../../Asset/Image/stories5.png";
import stories6 from "../../../Asset/Image/stories6.png";
import StudentWorks from "../../../Asset/Image/student-work.png";
import useStories from "../../../Components/Shared/JsonData/stories.json";
import InstructorsSlider from "./InstructorsSlider";
import "./More.css";


const Stories = () => {
  const [totalPosts, setTotalPosts] = useState();
  const [currentPage, setCurrentPage] = useState(1);
  const [PostsPerPage] = useState(3);

  let heightLandmark = document.getElementById("twinCard")?.clientHeight;
  useEffect(() => {
    let height = document.getElementById("twinCard")?.clientHeight;
    console.log(height);
    document.getElementById("soloCard").style.height = height - 20 + "px";
  }, [heightLandmark]);

  useEffect(() => {
    setTotalPosts(useStories.length);
  }, []);

  const indexOfLastPost = currentPage * PostsPerPage;
  const indexOfFirstPost = indexOfLastPost - PostsPerPage;
  const currentPosts = useStories?.slice(indexOfFirstPost, indexOfLastPost);

  return (
    <>
      <div className="w-full bg-home-color pt-32 lg:pb-20 lg:px-10 lg:mt-10">
        <div className="text-white">
          <div className="flex-col m-auto pb-18">
            <div className="text-3xl lg:text-5xl font-bold text-center leading-snug px-5 lg:px-0">
              Our Success Stories
            </div>
            <div className="text-2xl lg:text-4xl font-bold text-center leading-snug px-5 lg:px-0">
              Some of our stories that inspire all of us.
            </div>
            <div className="lg:w-2/3 text-center lg:text-lg py-5 pb-7 m-auto px-10 lg:px-0">
              Meet some of our students who have greatly benefited from our
              courses. We feel proud to help these individuals reach their
              dreams.
            </div>
          </div>
          <div className="hidden lg:block">
            <div className="lg:flex justify-center items-stretch gap-5">
              <div id="twinCard" className="">
                {currentPosts?.[0] ? (
                  <Fade left duration={1500} spy={currentPosts}>
                    <Link to="../stories-detail">
                      <div className="bg-home-color pb-5 max-w-[90vh]">
                        <div className="lg:flex bg-white rounded-2xl h-76">
                          <div>
                            <img
                              /* src={
                              storyImg?.find((wtf) => wtf.id === details?.id)
                                ?.img
                            } */
                              src={currentPosts?.[0]?.image}
                              className="w-[45rem] h-full rounded-tl-2xl rounded-bl-2xl"
                              alt=""
                            />
                          </div>
                          <div className="flex-col lg:justify-start text-black m-auto px-6 py-7">
                            <div className="text-4xl font-semibold">
                              {currentPosts?.[0]?.name}
                            </div>
                            <div className="text-sm font-semibold">
                              {currentPosts?.[0]?.profession}
                            </div>
                            <div className="text-xl text-[#23BDEE] font-semibold pb-5">
                              Quadque
                            </div>
                            <div className="text-sm pb-2 h-10 overflow-hidden">
                              {currentPosts?.[0]?.para}
                            </div>
                            <div className="font-bold">Read More</div>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </Fade>
                ) : null}
                {currentPosts?.[1] ? (
                  <Fade left duration={1500} spy={currentPosts}>
                    <Link to="../stories-detail">
                      <div className="bg-home-color pb-5 max-w-[90vh]">
                        <div className="lg:flex flex-row-reverse bg-white rounded-2xl h-76">
                          <div>
                            <img
                              /* src={
                              storyImg?.find((wtf) => wtf.id === details?.id)
                                ?.img
                            } */
                              src={currentPosts?.[1]?.image}
                              className="w-[45rem] h-full rounded-tr-2xl rounded-br-2xl"
                              alt=""
                            />
                          </div>
                          <div className="flex-col lg:justify-start text-black m-auto px-6 py-7">
                            <div className="text-4xl font-semibold">
                              {currentPosts?.[1]?.name}
                            </div>
                            <div className="text-sm font-semibold">
                              {currentPosts?.[1]?.profession}
                            </div>
                            <div className="text-xl text-[#23BDEE] font-semibold pb-5">
                              Quadque
                            </div>
                            <div className="text-sm pb-2 h-10 overflow-hidden">
                              {currentPosts?.[1]?.para}
                            </div>
                            <div className="font-bold">Read More</div>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </Fade>
                ) : null}
              </div>
              {/* card */}
              {currentPosts?.[2] ? (
                <Fade right duration={1500} spy={currentPosts}>
                  <Link to="../stories-detail">
                    <div>
                      <div
                        id="soloCard"
                        className="flex-col lg:max-w-xs bg-white rounded-2xl"
                      >
                        <div className="flex-wrap overflow-hidden">
                          <img
                            src={currentPosts?.[2]?.image}
                            className="w-full rounded-2xl"
                            alt=""
                          />
                        </div>
                        <div className="h-[20rem] overflow-hidden flex-col lg:justify-start text-black m-auto px-6 py-8">
                          <div className="text-4xl font-semibold">
                            {currentPosts?.[2]?.name}
                          </div>
                          <div className="text-sm font-semibold">
                            {currentPosts?.[2]?.profession}
                          </div>
                          <div className="text-xl text-[#23BDEE] font-semibold pb-5">
                            Quadque
                          </div>
                          <div className="text-sm pb-2">
                            {currentPosts?.[2]?.para}
                          </div>
                        </div>
                        <div className="px-6 text-black font-bold">
                          Read More
                        </div>
                      </div>
                    </div>
                  </Link>
                </Fade>
              ) : null}
            </div>
          </div>
          <div className="hidden lg:block">
          <div className="Stories_Pagination flex justify-center mt-10 mb-20">
            <Pagination
              onChange={(value) => {
                setCurrentPage(value);
                window.scrollTo(0, 0);
              }}
              pageSize={PostsPerPage}
              current={currentPage}
              total={totalPosts}
              className="text-lg"
              />
          </div>
          </div>

          {/* instructor MOBILE SLIDER */}
          <div className="lg:hidden mb-12">
            <InstructorsSlider />
          </div>

          <div className="lg:flex justify-evenly px-3">
            <Fade left>
              <div className="w-full lg:w-1/2 m-auto">
                <img
                  src={StudentWorks}
                  alt=""
                  width={598}
                  className="rounded-xl shrink-0 lg:pl-20 m-auto"
                />
              </div>
            </Fade>
            <Fade right>
              <div className="w-full lg:w-1/2 flex-col lg:justify-start text-start m-auto pt-10 lg:pt-0 lg:px-10">
                <div className="text-2xl lg:text-4xl font-semibold pb-5">
                  Some work of our students
                </div>
                <div className="lg:text-xl font-semibold pb-5">
                  It’s a matter of great honour for us to say that a large
                  number of our students are making a huge contribution to the
                  digital marketing and IT industry.{" "}
                </div>
                <div className="lg:text-xl font-light pb-5">
                  Our students are reputed to have amazing skills and a great
                  work ethic. It’s a huge opportunity for us to showcase some of
                  their works. These works show their creativity and talent. We
                  are extremely happy to guide them throughout their journey.{" "}
                </div>
              </div>
            </Fade>
          </div>
          <div className="m-auto pt-10 lg:pt-32 lg:pb-18">
            <div className="text-4xl text-center leading-snug pb-12">
              Art Works
            </div>
            <div className="flex flex-wrap justify-center lg:gap-2">
              <Fade left duration={2000}>
                <div className="flex-col">
                  <div className="flex-wrap overflow-hidden lg:rounded-xl lg:my-2">
                    <img
                      src={stories1}
                      alt=""
                      className="lg:rounded-xl hover:scale-110 duration-1000"
                    />
                  </div>
                  <div className="flex-wrap overflow-hidden lg:rounded-xl lg:my-2">
                    <img
                      src={stories2}
                      alt=""
                      className="lg:rounded-xl hover:scale-110 duration-1000"
                    />
                  </div>
                  <div className="flex-wrap overflow-hidden lg:rounded-xl lg:my-2">
                    <img
                      src={stories3}
                      alt=""
                      className="lg:rounded-xl hover:scale-110 duration-1000"
                    />
                  </div>
                </div>
              </Fade>
              <Fade right duration={2000}>
                <div className="flex-col">
                  <div className="flex-wrap overflow-hidden lg:rounded-xl lg:my-2">
                    <img
                      src={stories4}
                      alt=""
                      className="lg:rounded-xl hover:scale-110 duration-1000"
                    />
                  </div>
                  <div className="flex-wrap overflow-hidden lg:rounded-xl lg:my-2">
                    <img
                      src={stories5}
                      alt=""
                      className="lg:rounded-xl hover:scale-110 duration-1000"
                    />
                  </div>
                  <div className="flex-wrap overflow-hidden lg:rounded-xl lg:my-2">
                    <img
                      src={stories6}
                      alt=""
                      className="lg:rounded-xl hover:scale-110 duration-1000"
                    />
                  </div>
                </div>
              </Fade>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Stories;