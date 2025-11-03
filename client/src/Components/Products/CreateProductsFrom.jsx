import React from "react";

const CreateProductsFrom = () => {
  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = e.target;

    const newProduct = {
      title: form.title.value,
      category: form.category.value,
      min_price: parseFloat(form.minPrice.value),
      max_price: form.maxPrice.value
        ? parseFloat(form.maxPrice.value)
        : parseFloat(form.minPrice.value),
      condition: form.condition.value,
      usage_time: form.usage_time?.value || "",
      product_image: form.product_image.value,
      seller_name: form.seller_name.value,
      seller_email: form.seller_email.value,
      seller_contact: form.seller_contact.value,
      seller_image: form.seller_image.value,
      location: form.location.value,
      description: form.description.value,
      created_at: new Date(),
    };

    // ✅ Send data to backend
    fetch("http://localhost:3000/products", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newProduct),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        alert("Product created successfully!");
        form.reset();
      })
      .catch((err) => {
        console.error(err);
        alert("Server error: " + err.message);
      });
  };

  return (
    <div className="max-w-2xl mx-auto bg-white shadow-md rounded-xl p-6 mt-10 px-4 sm:px-6">
      <form className="space-y-5" onSubmit={handleSubmit}>
        {/* Title and Category */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="text"
            placeholder="Products Name"
            name="title"
            className="input input-bordered w-full border-gray-300 rounded-lg p-2"
            required
          />

          <select
            name="category"
            className="input input-bordered w-full border-gray-300 rounded-lg p-2"
            required
          >
            <option value="">Select a Category</option>
            <option value="Furniture">Furniture</option>
            <option value="Vehicles">Vehicles</option>
            <option value="Electronics">Electronics</option>
          </select>
        </div>

        {/* Price */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            name="minPrice"
            type="number"
            step="0.01"
            placeholder="Min Price you want to Sale ($)"
            className="input input-bordered w-full border-gray-300 rounded-lg p-2"
            required
          />
          <input
            name="maxPrice"
            type="number"
            step="0.01"
            placeholder="Max Price you want to Sale ($)"
            className="input input-bordered w-full border-gray-300 rounded-lg p-2"
          />
        </div>

        {/* Product Condition and Usage */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex flex-col gap-4">
            <label className="font-medium">Product Condition:</label>

            <div className="flex gap-3">
              <label className="flex items-center gap-1">
                <input
                  type="radio"
                  name="condition"
                  value="Brand New"
                  required
                />
                Brand New
              </label>

              <label className="flex items-center gap-1">
                <input type="radio" name="condition" value="Used" required />
                Used
              </label>
            </div>
          </div>

          <input
            name="usage_time"
            type="text"
            placeholder="e.g. 1 year 3 month"
            className="input input-bordered w-full border-gray-300 rounded-lg p-2"
          />
        </div>

        {/* Image URL */}
        <input
          name="product_image"
          type="url"
          placeholder="Your Product Image URL"
          className="input input-bordered w-full border-gray-300 rounded-lg p-2"
          required
        />

        {/* Seller Info */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            name="seller_name"
            type="text"
            placeholder="e.g. Artisan Roasters"
            className="input input-bordered w-full border-gray-300 rounded-lg p-2"
            required
          />
          <input
            name="seller_email"
            type="email"
            placeholder="e.g. leli31955@nlrlord.com"
            className="input input-bordered w-full border-gray-300 rounded-lg p-2"
            required
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            name="seller_contact"
            type="text"
            placeholder="e.g. +1-555-1234"
            className="input input-bordered w-full border-gray-300 rounded-lg p-2"
            required
          />
          <input
            name="seller_image"
            type="url"
            placeholder="Seller Image URL"
            className="input input-bordered w-full border-gray-300 rounded-lg p-2"
          />
        </div>

        {/* Location */}
        <input
          name="location"
          type="text"
          placeholder="City, Country"
          className="input input-bordered w-full border-gray-300 rounded-lg p-2"
          required
        />

        {/* Description */}
        <textarea
          name="description"
          rows="6"
          placeholder="e.g. I bought this product 3 months ago. Did not use more than half the time..."
          className="input input-bordered w-full border-gray-300 rounded-lg p-3 resize-none overflow-hidden focus:outline-none"
          required
        ></textarea>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full text-white rounded-lg font-semibold hover:opacity-90 transition h-10"
          style={{ background: "var(--color-primary)" }}
        >
          Create A Product
        </button>
      </form>
    </div>
  );
};

export default CreateProductsFrom;
