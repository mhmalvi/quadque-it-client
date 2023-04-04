import React, { useState, useEffect } from "react";
// import useBlogs from "../../../Shared/Hooks/useBlog";
import Blogs from "../../../Components/Shared/JsonData/blogs.json"
import { Pagination } from "antd";
import { Link } from "react-router-dom";


const Newstory = () => {
  // const [allBlogs] = useBlogs();
  const [totalPosts, setTotalPosts] = useState();
  const [currentPage, setCurrentPage] = useState(1);
  const [PostsPerPage] = useState(3);
  //console.log("all blogs", allBlogs);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    setTotalPosts(Blogs.length);
  }, [Blogs]);


  const indexOfLastPost = currentPage * PostsPerPage;
  const indexOfFirstPost = indexOfLastPost - PostsPerPage;
  const currentPosts = Blogs?.slice(indexOfFirstPost, indexOfLastPost);

  return (
    <>

      <div className="Blog w-full mt-30 font_primary flex">
        {Blogs.length === 0 && (
          <div className="text-white text-center">No blogs to show.</div>
        )}
        <div>
        {currentPosts?.splice(0, 2).map((details,i) => (
          <>
            <div key={i} className="rounded-xl relative mb-8 mx-6">
              {details?.id}
            </div>
          </>
        
        ))}
        </div>
      </div>
      <div className="Blog w-full mt-30 font_primary flex">
        {Blogs.length === 0 && (
          <div className="text-white text-center">No blogs to show.</div>
        )}
        <div>
        {currentPosts?.splice(0, 2).map((details,i) => (
          <>
            <div key={i} className="rounded-xl relative mb-8 mx-6">
              {details?.id}
            </div>
          </>
        
        ))}
        </div>
      </div>
      {/* PAGINATION */}
      <div className="Blog flex justify-center mt-5">
        <Pagination
          onChange={(value) => {
            setCurrentPage(value);
            window.scrollTo(0, 0);
          }}
          pageSize={PostsPerPage}
          current={currentPage}
          total={totalPosts}
          className="text-xl"
        />
      </div>
    </>
  );
};

export default Newstory;