import React from "react";
import { Link } from "react-router";
import { FaArrowLeftLong } from "react-icons/fa6";
import toast from "react-hot-toast";
import useAxios from "../../Hooks/useAxios";
// import { FcManager } from "react-icons/fc";

const CardDetailsDesign = ({ _id, image, description, condition, usage, title, min_price, max_price, created_at, seller_image, seller_name, seller_contact, location, status,
}) => {

  const axios = useAxios();

  const handleWishList = async() => {
   try{
    const productsData = {
      product_id: _id, image, title, max_price, min_price
    }

    const response = await axios.post('/whishList', productsData);
   
    if(response.data.success){
      toast.success(response.data.message)
    }else{
      toast.error(response.data.message  ||'Failed to add product to My-Products')
    }
   }
   catch(err){
    toast.error(err.message)
   }
  }

  return (
    <div className="flex flex-col lg:flex-row gap-6">
      <section>
        <img src={image} alt={title} className="w-300" />
        {/* <div className="bg-gray-300 py-60 px-80 rounded"></div> */}

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
            <p className="text-[1.2rem] text-green-600">Minimum Price: {min_price}$</p>
            <p className="text-[1.2rem] text-green-600">Maximum Price: {max_price}$</p>
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
                  {/* <FcManager size={50}/> */}
                  <img src={seller_image} alt="" className="w-15 rounded-full h-15" />
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
          <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg w-full text-white" style={{ background: "var(--color-primary)" }}>I want Buy This Product</button>

          <button onClick={handleWishList} className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg w-full border-2 bg-transparent mt-2" style={{ borderColor: "var(--color-primary)" }}>Product to wishlist</button>
        </div>
      </section>
    </div>
  );
};

export default CardDetailsDesign;
