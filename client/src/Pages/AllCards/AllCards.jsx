import React, { useEffect, useState } from "react";
import Title from "../../Components/Title";
import CardDesign from "../../Components/Design/CardDesign";

const AllCards = () => {
  const [allProducts, setAllProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:3000/products")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setAllProducts(data);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center py-6">
        <span className="loading loading-dots loading-xl text-[#9F62F2]"></span>
      </div>
    );
  }

  return (
    <div className="my-9">
      <div className="mt-6">
        <Title
          title1={
            <>
              All <span className="text-[#9F62F2]">Products</span>
            </>
          }
        />
      </div>

      <div className="card-section grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mt-6">
        {allProducts.map((item) => {
          return (
            <CardDesign
              key={item._id}
              _id={item._id}
              image={item?.product_image ?? item?.image}
              title={item.title}
              category={item.category}
              price_min={item.price_min}
            />
          );
        })}
      </div>
    </div>
  );
};

export default AllCards;
