import React from "react";

const SectionMailingList = () => {
  return (
    <section className="bg-white py-16 text-gray-600">
      <div className="w-9/12 mx-auto text-center">
        <div className="mb-12">
          <p className="text-2xl font-bold">Join our mailing list</p>
          <p className="text-gray-500 w-5/12 mx-auto mt-1">
            Sign up to receive inspiration, produc updates and special offers
            from our team.
          </p>
          <div className="inline-block border border-[#054C73] rounded-md">
            <input
              type="text"
              placeholder="example@gmail.com"
              className="py-3 px-4 rounded-mx placeholder:text-gray-400 placeholder:text-xs rounded-l-md bg-white focus:outline-none "
            />
            <button className="p-5 bg-[#054c73] text-white text-sm rounded-r-md">
              Submit
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionMailingList;
