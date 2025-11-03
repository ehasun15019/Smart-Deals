import React from "react";
import { FaArrowLeftLong } from "react-icons/fa6";
import { Link } from "react-router";
import Title from "../../Components/Title";
import CreateProductsFrom from "../../Components/Products/CreateProductsFrom";

const CreateProducts = () => {
  return (
    <div className="flex flex-col justify-center items-center py-6">
      <div className="flex gap-3 items-center">
        <FaArrowLeftLong />
        <Link to="/cards/all-cards" className="text-black">
          Back to Products
        </Link>
      </div>

      <div className="my-2">
        <Title
          title1={
            <>
              Create <span className="text-[#9F62F2]">A Product</span>
            </>
          }
        />
      </div>

      <div>
        <CreateProductsFrom></CreateProductsFrom>
      </div>
    </div>
  );
};

export default CreateProducts;
