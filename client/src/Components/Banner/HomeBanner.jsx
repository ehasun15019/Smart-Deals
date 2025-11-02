import React from "react";
import { assets } from "../../assets/assets";
import { Link } from "react-router";

const HomeBanner = () => {
  return (
    <div
      style={{ background: "var(--color-banner)" }}
      className="flex justify-between items-center py-6"
    >
      <div>
        <img src={assets.leftV} alt="" />
      </div>

      <div className="text-center">
        <h1 className="text-[1.5rem] md:text-2xl lg:text-5xl font-semibold">
          Deal your <span className="text-[#9F62F2]">Products</span> <br />
          in a <span className="text-[#9F62F2]">Smart</span> way !
        </h1>

        <p className="text-gray-500 mt-3">
          SmartDeals helps you sell, resell, and shop from trusted local sellers
          — all in one place!
        </p>

        <div className="input-section mt-3">
          <div className="join">
            <div>
              <label className="input validator join-item rounded-l-full">
                <svg
                  className="h-[1em] opacity-50"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <g
                    strokeLinejoin="round"
                    strokeLinecap="round"
                    strokeWidth="2.5"
                    fill="none"
                    stroke="currentColor"
                  >
                    <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                  </g>
                </svg>
                <input type="email" placeholder="mail@site.com" required />
              </label>
              <div className="validator-hint hidden">
                Enter valid email address
              </div>
            </div>
            <button
              className="btn join-item text-white rounded-r-full"
              style={{ background: "var(--color-primary)" }}
            >
              Join
            </button>
          </div>
        </div>

        <div className="btn-section flex flex-col md:flex-row gap-3 justify-center items-center mt-4">
          <Link
            className="btn text-white sm:btn-sm md:btn-md lg:btn-lg xl:btn-xl"
            style={{ background: "var(--color-primary)" }}
          >
            Watch All Products
          </Link>

          <Link className="btn text-black bg-transparent sm:btn-sm md:btn-md lg:btn-lg xl:btn-xl border-[#9F62F2] border-2">
            Post an Product
          </Link>
        </div>
      </div>

      <div>
        <img src={assets.rightV} alt="" />
      </div>
    </div>
  );
};

export default HomeBanner;
