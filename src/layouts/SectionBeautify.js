import React from "react";

const SectionBeautify = () => {
  return (
    <section className="bg-[#F2F5FF] py-16">
      <div className="w-9/12 mx-auto">
        <div className="flex justify-between items-center gap-12">
          <div className="w-5/12 space-y-4 ">
            <p className="text-2xl font-bold">Beautify Your Space</p>
            <p className="text-gray-500">
              Do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris.
            </p>
            <button className="py-3 px-6 rounded-full bg-[#054C73] text-white text-sm font-semibold uppercase">
              Learn More
            </button>
          </div>
          <div className="w-5/12 relative z-10">
            <img
              className="w-8/12"
              src="/assets/MaskGroup-2.png"
              alt="Pretty Girl"
            />
            <div className="absolute top-1/2 -translate-y-1/2 -z-10">
              <svg
                width="372"
                height="374"
                viewBox="0 0 372 374"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <ellipse
                  cx="186"
                  cy="186.995"
                  rx="186"
                  ry="186.855"
                  fill="#09513B"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionBeautify;
