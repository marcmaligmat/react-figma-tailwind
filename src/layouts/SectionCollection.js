import React from "react";

const SectionCollection = () => {
  return (
    <section className="py-16 text-gray-600">
      <div className="w-9/12 mx-auto">
        <div className="text-center mb-12">
          <p className="text-2xl font-bold">Insipirational Collection</p>
          <p className="text-gray-500">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>
        <div className="grid grid-cols-3 gap-10">
          <div className="h-94 w-34 overflow-hidden rounded-tl-[70px] mt-16">
            <img
              src="/assets/Image-living-room.png"
              className="scale-110"
              alt="liVing room"
            />
          </div>
          <div className="h-94 w-34 overflow-hidden">
            <img
              src="/assets/MaskGroup.png"
              className="scale-110"
              alt="liVing room"
            />
          </div>
          <div className="h-94 w-34 overflow-hidden rounded-br-[70px] mt-16">
            <img
              src="/assets/MaskGroup-1.png"
              className="scale-110"
              alt="liVing room"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionCollection;
