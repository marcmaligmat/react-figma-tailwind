import React from "react";

const HowItWorks = () => {
  return (
    <section className="bg-[#F2F5FF] py-16 text-gray-600">
      <div className="w-9/12 mx-auto">
        <div className="text-center mb-12">
          <p className="text-2xl font-bold">How it works </p>
          <p className="text-gray-500">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>
        <div>
          <div className="flex gap-10">
            <div className="h-94 w-34 overflow-hidden">
              <img src="/assets/PurchaseSecurely.png" alt="Purchase"></img>
              <p className="text-center text-2xl font-bold mt-4 text-gray-700">
                Purchase Securely
              </p>
              <p className="text-center text-sm w-9/12 mx-auto">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
            <div className="h-94 w-34 overflow-hidden">
              <img
                src="/assets/ShipsFromWarehouse.png"
                alt="ShipsFromWarehouse "
              ></img>
              <p className="text-center text-2xl font-bold mt-4 text-gray-700">
                Purchase Securely
              </p>
              <p className="text-center text-sm w-9/12 mx-auto">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
            <div className="h-94 w-34 overflow-hidden">
              <img src="/assets/styleyourroom.png" alt="Purchase"></img>
              <p className="text-center text-2xl font-bold mt-4 text-gray-700">
                Purchase Securely
              </p>
              <p className="text-center text-sm w-9/12 mx-auto">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
