import React from "react";
import { Link } from "react-router";
import { FaArrowLeftLong } from "react-icons/fa6";
import { FcManager } from "react-icons/fc";

const CardDetailsDesign = ({
  _id,
  image,
  description,
  condition,
  usage,
  title,
  price_min,
  price_max,
  created_at,
  seller_image,
  seller_name,
  seller_contact,
  location,
  status,
}) => {
  return (
    <div className="flex flex-col lg:flex-row gap-6">
      <section>
        {/* <img src={image} alt={title} /> */}
        <div className="bg-gray-300 py-60 px-80 rounded"></div>

        <div className="card bg-white w-full text-black mt-10">
          <div className="card-body">
            <h2 className="card-title">Product Description</h2>
            
            <div className="flex justify-between">
                <p><span className="text-[#9F62F2]">Condition:</span> {condition}</p>
                <p><span className="text-[#9F62F2]">Usage Time :</span> {usage}</p>
            </div>

            <hr />

            <div className="pt-4">
                <p>{description}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Right side  */}
      <section className="w-full">
        <div className="flex gap-3 items-center">
            <FaArrowLeftLong />
            <Link to="/cards/all-cards" className="text-black">Back to Products</Link>
        </div>

        <h2 className="text-[1.5rem] md:text-3xl lg:text-4xl py-2">{title}</h2>

        <div className="bg-white space-y-1.5 rounded p-3 mt-3">
            <p className="text-[1.2rem] text-green-600">Minimum Price: {price_min}$</p>
            <p className="text-[1.2rem] text-green-600">Maximum Price: {price_max}$</p>
        </div>

        <div className="products-details bg-white space-y-1.5 rounded p-3 mt-3">
            <h4 className="text-2xl font-semibold">Product Details</h4>

            <p className="text-[0.8rem] mt-1"><span className="font-semibold">Product ID:</span> {_id}</p>
            <p className="text-[0.8rem]"><span className="font-semibold">Posted:</span> {created_at}</p>
        </div>

        <div className="seller-information bg-white space-y-1.5 rounded p-3 mt-3">
            <h4 className="text-2xl font-semibold">Seller Information</h4>

            <div className="flex gap-4 items-center py-3">
                <div className="seller-image">
                    <FcManager size={50}/>
                </div>

                <div>
                    <h5 className="text-[0.9rem] font-semibold">{seller_name}</h5>
                    <p className="text-[0.9rem]">{seller_contact}</p>
                </div>
            </div>

            <p><span className="font-semibold">Location:</span> {location}</p>
            <p><span className="font-semibold pt-1">Status:</span> <span className="badge badge-warning">{status}</span></p>
        </div>

        <div className="button-sec mt-3">
            <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg xl:btn-xl w-full text-white" style={{ background: "var(--color-primary)" }}>I want Buy This Product</button>
        </div>
      </section>
    </div>
  );
};

export default CardDetailsDesign;
