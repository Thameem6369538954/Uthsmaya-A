import React from 'react';
import KK from "../Images/KK.jpg";

const Offerbaner = () => {
  return (
    <div className="w-full flex justify-center px-4">
      <div
        style={{ backgroundImage: `url(${KK})` }}
        className="min-h-[300px] sm:min-h-[350px] md:min-h-[400px] w-full max-w-6xl bg-cover bg-center rounded-lg flex items-center justify-start text-white text-center p-4"
      >
        <div className="bg-black bg-opacity-50 rounded-lg p-6 w-full max-w-xl">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold font-[Heading]">
            Big Sale Offer!
          </h1>
          <p className="text-lg sm:text-xl mt-2 font-[New]">Coming Soon</p>
        </div>
      </div>
    </div>
  );
};

export default Offerbaner;
