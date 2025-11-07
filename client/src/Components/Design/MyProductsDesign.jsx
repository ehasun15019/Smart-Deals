import React, { use, useEffect, useState } from "react";
import { AuthContext } from "../../Context/AuthContext";
import useAxios from "../../Hooks/useAxios";
import Title from "../Title";

const MyProductsDesign = () => {
  const { user } = use(AuthContext);
  const [myProducts, setMyProducts] = useState([]);
  const axios = useAxios();

  useEffect(() => {
    if (!user?.email) return;

    axios.get("/get-wishList")
      .then((data) => {
        console.log("Wishlist data:", data.data);
        setMyProducts(data.data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, [axios, user]);

  if (!user) {
    return (
      <div className="flex justify-center items-center py-6">
        <span className="loading loading-dots loading-xl"></span>
      </div>
    );
  }

  return (
    <div className="pb-6 pt-4">
      <div className="py-4 pt-6">
        <Title
          title1={
            <>
              My Products{" "}
              <span className="text-[#9F62F2]">{myProducts.length}</span>
            </>
          }
        />
      </div>

      <div>
        {myProducts.map((item) => {
          return (
            <div className="overflow-x-auto rounded-box border border-base-content/5 bg-base-100 mt-3" key={item._id}>
              <table className="table">
                {/* head */}
                <thead>
                  <tr>
                    <th>Image</th>
                    <th>Product Name</th>
                    <th>Max Price</th>
                    <th>Min Price</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {/* row 1 */}
                  <tr>
                    <td><img src={item.image} alt="product image" className="w-20"/></td>
                    <td>{item.title}</td>
                    <td>${item.max_price}</td>
                    <td>${item.min_price}</td>
                    <td>
                        <button className="btn btn-outline btn-info me-3">Edit</button>
                        <button className="btn btn-outline btn-error me-3">Delete</button>
                        <button className="btn btn-outline btn-success me-3">Make Sold</button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MyProductsDesign;
