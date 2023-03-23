import React from "react";
import Building from "../../../Asset/Image/grant-ritchie.png";
import GoogleMapReact from "google-map-react";
import GoogleMaps from "./Maps";
/* 23.752320221204513, 90.38005477684074 */

const AnyReactComponent = ({ text }) => <div>{text}</div>;

const Contact = () => {
  const defaultProps = {
    center: {
      lat: 10.99835602,
      lng: 77.01502627,
    },
    zoom: 11,
  };
  return (
    <div className="w-full bg-home-color pt-40 pb-20 lg:mt-10">
      <div className="flex flex-col-reverse lg:flex lg:flex-row rounded-3xl">
        <div className="lg:w-1/2 text-white m-auto pt-20 lg:pt-0">
          <div className="text-2xl lg:text-4xl font-bold pb-5 px-6 lg:px-0">
            Level -7, 8/C, F.R Tower, Sukrabad, Panthapath, Dhaka 1207,
            Bangladesh
          </div>
          <div className="w-2/3 flex lg:flex-row flex-col justify-between text-xl pb-10 px-6 lg:px-0">
            <ul>
              <li className="p-2">info@quadque.tech</li>
              <li className="p-2">+61405899496</li>
              <li className="p-2">+61405899496</li>
            </ul>
            <ul>
              <li className="text-[#ffffff70] p-2">Office Hours</li>
              <li className="p-2">Sunday - Thursday</li>
              <li className="p-2">8:00 am - 5:30 pm</li>
            </ul>
          </div>
          <div className="text-white text-base lg:text-xl mb-6 px-6 lg:px-0">
            <div className="font-semibold">social channels</div>
          </div>
          <div className="flex text-sm font-thin pb-16 px-6 lg:px-0">
            <a className="pr-4" href="https://www.facebook.com/quadquetech/">
              Facebook
            </a>
            <a className="pr-4" href="https://www.youtube.com/channel/UCXbnZTYKk6q82Hbux3ffILA">
              Youtube
            </a>
            <a className="pr-4" href="https://www.instagram.com/quadquetech/">
              Instagram
            </a>
            <a className="" href="https://bd.linkedin.com/company/quadque-technologies-ltd">
              LinkedIn
            </a>
          </div>
          <div style={{ height: "50vh", width: "100%", margin: "auto" }}>
            <GoogleMapReact
              bootstrapURLKeys={{ key: "" }}
              defaultCenter={defaultProps.center}
              defaultZoom={defaultProps.zoom}
            >
              <AnyReactComponent
                lat={23.752320221204513}
                lng={90.38005477684074}
                text="QIT"
              />
            </GoogleMapReact>
          </div>
          {/* <div><GoogleMaps/></div> */}
        </div>
        <div className="flex justify-center">
          <img src={Building} className="" alt="QIT logo" />
        </div>
      </div>
    </div>
  );
};

export default Contact;
