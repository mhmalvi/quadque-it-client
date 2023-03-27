import { Input, message } from "antd";
import React, { useEffect, useState } from "react";
//import { useDispatch, useSelector } from "react-redux";
//import { useNavigate } from "react-router-dom";
//import { handleLogin } from "../../../Components/services/auth";
import Icons from "../../../../Components/Shared/Icons";
import Psychic from "../../../../Asset/Gif/psychic.gif";
import Logo from "../../../../Asset/Image/Logo.svg";
import RightArrow from "../../../../Asset/Image/arrow-left.png";
import LeftArrow from "../../../../Asset/Image/arrow-right.png";
import { useLocation } from "react-router-dom";
//import Loading from "../../../Components/Shared/Loader";
//import { Storage } from "../../../Components/Shared/utils/store";
//import { addUserDetails, setLoader } from "../../../features/user/userSlice";
//import ForgotPassword from "./ForgotModal";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [tooglePasswordForget, setTooglePasswordForget] = useState(false);
  const [boxLeft, setboxLeft] = useState(false);
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const userData = (e) => {
    const userdata = { ...data };
    userdata[e.target.id] = e.target.value;
    setData(userdata);
  };

  const ForgotPasswordModal = (e) => {
    e.preventDefault();
  };

  const handleRememberMe = (e) => {
    e.preventDefault();
  };
  /*   document.title = "QIT -Log In";
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const loadingDetails = useSelector((state) => state?.user)?.loading;
  const [tooglePasswordForget, setTooglePasswordForget] = useState(false);

  const [data, setData] = useState({
    email: "",
    password: "",
  });

  useEffect(() => {
    if (Storage.getItem("auth_tok")) {
      navigate("/dashboard");
    }

    if (Storage.getItem("crm_email") && Storage.getItem("crm_password")) {
      setData({
        email: Storage.getItem("crm_email"),
        password: Storage.getItem("crm_password")?.split("_")[0],
      });
    }
  }, [navigate]);

  const userData = (e) => {
    const userdata = { ...data };
    userdata[e.target.id] = e.target.value;
    setData(userdata);
  };

  const handleLoginReq = async (e) => {
    e.preventDefault();
    dispatch(setLoader(true));

    const loginFormData = new FormData();
    loginFormData.append("email", data.email);
    loginFormData.append("password", data.password);

    const loginResponse = await handleLogin(loginFormData);

    console.log("loginResponse", loginResponse);

    if (loginResponse?.status === 200) {
      // if ()

      Storage.setItem("user_info", loginResponse?.data?.data);
      Storage.setItem("auth_tok", loginResponse?.data?.token);

      dispatch(setLoader(false));
      dispatch(addUserDetails(loginResponse?.data?.data));

      message.success("Successfully Logged In");
      setTimeout(() => {
        navigate("/dashboard");
      }, 1500);
    } else {
      setTimeout(() => {
        dispatch(setLoader(false));
      }, 2000);
      message.warning("Oopps Wrong! Check You Email or Password");
    }
  };

  function makeid(length) {
    var result = "";
    var characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }

  const handleRememberMe = (e) => {
    if (e.target.checked) {
      Storage.setItem("crm_email", data.email);
      Storage.setItem(
        "crm_password",
        data.password +
          "_" +
          makeid(3) +
          "_" +
          makeid(3) +
          "_" +
          makeid(3) +
          "_" +
          makeid(3)
      );
    }
  };

  const ForgotPasswordModal = () => {
    const regex =
      /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    if (data.email !== "") {
      if (regex.test(data.email) === true) {
        setTooglePasswordForget(true);
      } else {
        message.warning("Please enter a valid email address.");
      }
    } else {
      message.warning("Enter your email first.");
    }
  }; */
  const handleLoginReq = async (e) => {
    e.preventDefault();
  };

  const toogleSignupLogin = () => {
    setboxLeft(!boxLeft);
  };

/*   useEffect(() => {
    console.log(location);
    if(location.pathname === '/auth'){
      document.getElementById("Navbar").style.display="none";
    }
  }, []) */

  const navigateToAdminPanel = () => {
    alert("clicked");
    navigate("/user/dashboard");
  };
  
  return (
    <>
      <div className="md:flex justify-evenly items-center h-auto lg:h-screen bg-home-color">
        <div>
          <img src={Psychic} alt="" className="m-auto" />
          <div className="flex justify-center gap-5 pt-10">
            <Icons.Facebook className="cursor-pointer" />
            <Icons.Twitter className="cursor-pointer" />
            <Icons.Instagram className="cursor-pointer" />
            <Icons.Youtube className="cursor-pointer" />
          </div>
          <div className="text-white text-center pt-8">
            <a href="/">Back to Home</a>
          </div>
          <div className="cursor-pointer text-white text-center">
            <a href="/user/dashboard">Admin Panel</a>
          </div>
        </div>
        {/* <div
          className={`absolute z-50 container sm:max-w-sm h-[85%] sm:rounded-tl-lg sm:rounded-bl-lg p-3 bg-[#0D0D2B] shadow-lg ${
            boxLeft
              ? "h-[20%] sm:h-[85%] -translate-y-[0%] sm:-translate-x-[50%] sm:rounded-tl-lg sm:rounded-bl-lg duration-500"
              : "h-[20%] sm:h-[85%] sm:translate-x-[50%] sm:rounded-tl-none sm:rounded-bl-none sm:rounded-tr-lg sm:rounded-br-lg duration-500"
          }`}
        >
          <img src={Psychic} alt="" className="hidden sm:block" />
          <div className="flex justify-center gap-5 mt-10">
            <Icons.Facebook />
            <Icons.Twitter />
            <Icons.Instagram />
            <Icons.Youtube />
          </div>
          <div className="text-white text-center pt-8">
            <a href="/">Back to Home</a>
          </div>
          <div
            className="cursor-pointer text-white text-center"
          >
            <a href="/user/dashboard">Admin Panel</a>
          </div>
        </div> */}

        {/* SIGNUP FORM */}
        <div
          /* className={`container ${
            boxLeft
              ? "sm:max-w-sm h-[60%] scale-0 sm:scale-100 opacity-0 duration-700 border border-gray-200 rounded-tl-lg rounded-bl-lg p-3 bg-white shadow-lg"
              : "absolute top-[20%] sm:static sm:max-w-sm h-[60%] duration-700 border border-gray-200 sm:rounded-tl-lg sm:rounded-bl-lg p-3 bg-white shadow-lg"
          }`} */
          className={`container bg-white bg-opacity-10 backdrop:filter backdrop-blur-sm border border-white border-opacity-20 custom-white-shadow mt-20 ${
            boxLeft
              ? "hidden"
              : "sm:max-w-sm duration-700 p-3 shadow-lg m-auto md:m-0 rounded-md"
          }`}
        >
          <div className="flex justify-end">
            <div
              onClick={toogleSignupLogin}
              className="flex justify-end text-center cursor-pointer px-3"
            >
              <span className="text-sm text-white my-auto px-2">Login</span>
              <img src={LeftArrow} alt="" />
            </div>
          </div>
          <div className="pt-8">
            <div className="flex flex-col items-center">
              <img src={Logo} alt="" />
            </div>
          </div>
          <div className="text-center my-6">
            <h1 className="text-2xl font-semibold text-white">Signup</h1>
            <p className="text-sm text-white pt-2">Signup to get your account</p>
          </div>

          <div className="m-6">
            <form className="" onSubmit={handleLoginReq}>
              <div className="">
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm text-white"
                >
                  Email
                </label>
                <Input
                  // type="password"
                  size="large"
                  name="email"
                  id="email"
                  value={data.email}
                  placeholder="Enter your username"
                  className="w-full px-6 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-brand-color"
                  onChange={userData}
                  required
                />
                <label
                  htmlFor="email"
                  className="block my-2 text-sm text-white"
                >
                  Username
                </label>
                <Input
                  size="large"
                  type="text"
                  name="username"
                  id="username"
                  placeholder="Enter Your Username"
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-brand-color"
                  required
                />
              </div>
              <div className="">
                {/* Forgot password */}
                <div className="flex justify-between my-2">
                  <label htmlFor="password" className="text-sm text-white">
                    Password
                  </label>
                </div>
                <Input.Password
                  // type="password"
                  size="large"
                  name="password"
                  id="password"
                  placeholder="Enter your password"
                  value={data.password}
                  className="w-full px-6 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-brand-color"
                  onChange={userData}
                  required
                />
              </div>

              {/* <div className="mb-6   flex items-center">
              <input
                className="cursor-pointer mr-2"
                type="checkbox"
                name="remember me"
                id="remember_me"
                defaultValue="off"
                onChange={handleRememberMe}
              />
              <label className="cursor-pointer" htmlFor="remember_me">
                Remember Me
              </label>
            </div> */}

              <div className="my-6">
                <button
                  type="submit"
                  className="w-full p-3 text-white font-medium bg-brand-color bg-opacity-80 hover:bg-opacity-100 rounded-md focus:outline-none  "
                >
                  Register
                </button>
              </div>
              {/* <p className="text-sm text-center text-gray-400">
                Don't have an account yet?
                <Link to="/join" className="font-semibold ml-1.5">
                  Sign up
                </Link>
              </p> */}
            </form>
          </div>
        </div>

        {/* LOGIN  FORM */}
        <div
          /* className={`container ${
            boxLeft
              ? "absolute top-[20%] sm:static sm:max-w-sm h-[60%] duration-700 border border-gray-200  sm:rounded-tr-lg sm:rounded-br-lg p-3 bg-white shadow-lg"
              : "scale-0 sm:scale-100 sm:max-w-sm h-[60%] opacity-0 duration-700 border border-gray-200  rounded-tr-lg rounded-br-lg p-3 bg-white shadow-lg"
          }`} */
          className={`container bg-white bg-opacity-10 backdrop:filter backdrop-blur-sm border border-white border-opacity-20 custom-white-shadow mt-20 ${
            boxLeft
              ? "sm:max-w-sm duration-700 p-3 shadow-lg m-auto md:m-0 rounded-md"
              : "hidden"
          }`}
        >
          <div className="flex justify-start">
            <div
              onClick={toogleSignupLogin}
              className="flex justify-start cursor-pointer px-3"
              >
              <img src={RightArrow} alt="" />
              <span className="text-sm text-white my-auto px-2">Signup</span>
            </div>
          </div>
          <div className="pt-8">
            <div className="flex flex-col items-center">
              <img src={Logo} alt="" />
            </div>
          </div>
          <div className="text-center my-6">
            <h1 className="text-2xl font-semibold text-white">Login</h1>
            <p className="pt-2 pb-4 text-white text-sm">Login to access your account</p>
          </div>

          <div className="m-6">
            <form className="mb-4" onSubmit={handleLoginReq}>
              <div className="mb-6  ">
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm text-white"
                >
                  Email
                </label>
                <Input
                  // type="password"
                  size="large"
                  name="email"
                  id="email"
                  value={data.email}
                  placeholder="Enter your username"
                  className="w-full px-6 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-brand-color"
                  onChange={userData}
                  required
                />
                {/* <input
                type="text"
                name="username"
                id="username"
                placeholder="Enter Your Username"
                className="w-full px-3 py-2 placeholder-gray-600 border bg-gray-100 rounded-md focus:outline-none focus:border-brand-color"
                required
              /> */}
              </div>
              <div className="mb-4  ">
                {/* Forgot password */}
                <div className="flex justify-between mb-2">
                  <label htmlFor="password" className="text-sm text-white">
                    Password
                  </label>
                  <label
                    className="text-xs text-gray-400 focus:outline-none hover:text-indigo-500"
                    onClick={ForgotPasswordModal}
                  >
                    Forgot password?
                  </label>

                  {/*                 <ForgotPassword
                  visibility={tooglePasswordForget}
                  oncancel={(cancel) => setTooglePasswordForget(cancel)}
                  emaildata ={data.email} 
                /> */}
                </div>
                <Input.Password
                  // type="password"
                  size="large"
                  name="password"
                  id="password"
                  placeholder="Enter your password"
                  value={data.password}
                  className="w-full px-6 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-brand-color"
                  onChange={userData}
                  required
                />
              </div>

              <div className="mb-6   flex items-center">
                <input
                  className="cursor-pointer mr-2"
                  type="checkbox"
                  name="remember me"
                  id="remember_me"
                  defaultValue="off"
                  /* onChange={handleRememberMe} */
                />
                <label
                  className="cursor-pointer text-white"
                  htmlFor="remember_me"
                >
                  Remember Me
                </label>
              </div>

              <div className="mb-6">
                <button
                  type="submit"
                  className="w-full p-3 text-white font-medium bg-brand-color bg-opacity-80 hover:bg-opacity-100 rounded-md focus:outline-none  "
                >
                  Log in
                </button>
              </div>

              {/* <p className="text-sm text-center text-gray-400">
                Don't have an account yet?
                <Link to="/join" className="font-semibold ml-1.5">
                  Sign up
                </Link>
              </p> */}
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
