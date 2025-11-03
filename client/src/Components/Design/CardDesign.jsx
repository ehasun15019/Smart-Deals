import React from "react";
import { Link } from "react-router";

const CardDesign = ({ _id ,image, title, category, price_min }) => {
  return (
    <div className="card bg-white w-70 md:w-80 lg:w-96 shadow-sm">
      <figure className="px-10 pt-10">
        <img
          src={image}
          alt={title}
          className="rounded-xl"
        />
        {/* <div className="py-20 bg-gray-200 w-full rounded-2xl"></div> */}
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{title}</h2>
        <p>
         category: {category}
        </p>

        <p className="text-[#9F62F2]">
          Minimum Price: {
                price_min
            }$
        </p>

        <div className="card-actions">
          <Link to={`/details/card-details/${_id}`} className="w-full btn border-2 border-[#9F62F2]">View Details</Link>
        </div>
      </div>
    </div>
  );
};

export default CardDesign;
