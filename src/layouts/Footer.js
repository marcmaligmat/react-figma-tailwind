import React from "react";

const Footer = () => {
  return (
    <footer className="py-16 text-gray-200 bg-[#03344F]">
      <div className="w-9/12 mx-auto">
        <div className="flex justify-between gap-10">
          <div className="w-4/12 space-y-4">
            <p className="text-2xl font-bold">Beauty Care</p>
            <p className="text-sm text-gray-300">
              Do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris.
            </p>
            <a href="/" className="inline-block text-lg font-semibold ">
              Follow us
            </a>
          </div>
          <div className="space-y-4">
            <p className="text-2xl font-bold">Instagram Shop</p>
            <div className="grid grid-cols-4 gap-3">
              <img
                className="rounded-lg"
                alt="instagram "
                src="/assets/IG-1.jpg"
              />
              <img
                className="rounded-md"
                alt="instagram "
                src="/assets/IG-2.jpg"
              />
              <img
                className="rounded-md"
                alt="instagram "
                src="/assets/IG-3.jpg"
              />
              <img
                className="rounded-md"
                alt="instagram "
                src="/assets/IG-4.jpg"
              />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
