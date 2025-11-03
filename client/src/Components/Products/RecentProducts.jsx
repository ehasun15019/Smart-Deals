import React, { useEffect, useState } from "react";
import CardDesign from "../Design/CardDesign";
import { Link } from "react-router";
import Title from "../Title";

const RecentProducts = () => {
  const [recentProducts, setRecentProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:3000/recent-products")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setRecentProducts(data);
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
    <div className="py-9">
      <Title
        title1={
          <>
            Recent <span className="text-[#9F62F2]">Products</span>
          </>
        }
      />

      <div className="card-section grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center gap-3 mt-5">
        {recentProducts.map((item) => {
          return (
            <CardDesign
              key={item._id}
              image={item.image}
              title={item.title}
              category={item.category}
              price_min={item.price_min}
            />
          );
        })}
      </div>

      <div className="all-card-show-section mt-9 flex justify-center">
        <Link
          style={{ background: "var(--color-primary)" }}
          className="px-12 py-4 text-white rounded-full"
          to="/cards/all-cards"
        >
          Show all
        </Link>
      </div>
    </div>
  );
};

export default RecentProducts;
