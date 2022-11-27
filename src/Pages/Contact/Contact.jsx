import React from "react";
import Building from "../../Asset/Image/grant-ritchie.png";
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
    <div className="w-full bg-home-color font-poppins pt-40 mt-10">
      <div className="flex flex-col-reverse lg:flex lg:flex-row rounded-3xl">
        <div className="lg:w-1/2 pt-20 text-white m-auto">
          <div className="text-2xl lg:text-4xl font-bold pb-5">
            Level -7, 8/C, F.R Tower, Panthapath, Dhaka 1207
          </div>
          <div className="flex text-xl pb-10 gap-20">
            <ul>
              <li className="p-2">info@quadque.tech</li>
              <li className="p-2">+61405899496</li>
              <li className="p-2">+61405899496</li>
            </ul>
            <ul>
              <li className="p-2">During office visits</li>
              <li className="p-2">Saturday - Friday</li>
              <li className="p-2">9am to 8pm</li>
            </ul>
          </div>
          <div className="text-white text-base lg:text-xl mb-6">
            <div className="font-semibold">social channels</div>
          </div>
          <div className="flex pb-16">
            <a className="pr-4" href="">
              Facebook
            </a>
            <a className="pr-4" href="">
              Youtube
            </a>
            <a className="pr-4" href="">
              Instagram
            </a>
            <a className="" href="">
              Google
            </a>
          </div>
          <div style={{ height: "50vh", width: "90%" }}>
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
        <div className="m-auto">
          <img src={Building} className="" alt="QIT logo" />
        </div>
      </div>
    </div>
  );
};

export default Contact;
