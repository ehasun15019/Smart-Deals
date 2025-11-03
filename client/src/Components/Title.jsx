import React from "react";

const Title = ({ title1 }) => {
  return (
    <div>
      <h3 className="text-center text-[1.3rem] md:text-3xl lg:text-4xl font-semibold">
        {/* Recent <span className="text-[#9F62F2]">Products</span> */}
        {title1}
      </h3>
    </div>
  );
};

export default Title;
