import React from "react";

const SectionBrowseRange = () => {
  return (
    <section className="py-16 text-gray-600">
      <div className="w-9/12 mx-auto">
        <div className="text-center mb-12">
          <p className="text-2xl font-bold">Browse The Range</p>
          <p className="text-gray-500">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>
        <div>
          <div className="flex gap-10">
            <div classname="h-94 w-34 overflow-hidden">
              <img src="/assets/Image-living-room.png" alt="living" />
              <p className="text-center text-2xl font-bold mt-4 text-gray-700">
                Dining
              </p>
            </div>
            <div classname="h-94 w-34 overflow-hidden">
              <img src="/assets/MaskGroup-1.png" alt="living" />
              <p className="text-center text-2xl font-bold mt-4 text-gray-700">
                Living
              </p>
            </div>

            <div classname="h-94 w-34 overflow-hidden">
              <img src="/assets/MaskGroup.png" alt="living" />
              <p className="text-center text-2xl font-bold mt-4 text-gray-700">
                Bedroom
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionBrowseRange;
