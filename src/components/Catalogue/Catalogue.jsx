import React, { useEffect, useState } from "react";
import Box from "./Box";

const Catalogue = () => {
  const [allProducts, setAllProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedProductType, setSelectedProductType] = useState(null);
  const [showHealthArea, setShowHealthArea] = useState(false);
  const [showProductType, setShowProductType] = useState(false);




  const fetchProducts = async () => {
    try {
      const res = await fetch("https://atmpharmacybackend.onrender.com/product/all");
      const data = await res.json();

      if (res.ok) {
        setAllProducts(data.data || []);
        localStorage.setItem("allProducts", JSON.stringify(data.data || []));
      } else {
        console.error("Failed to fetch products", data);
      }
    } catch (err) {
      console.error("Error fetching products", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const filteredProducts = allProducts.filter((product) => {
    const searchMatch =
      !search.trim() ||
      [
        product.brandName,
        product.genericName,
        product.productType,
        ...(product.category || []),
      ]
        .join(" ")
        .toLowerCase()
        .includes(search.toLowerCase());

    const categoryMatch =
      !selectedCategory ||
      (Array.isArray(product.category) &&
        product.category.includes(selectedCategory));

    const typeMatch =
      !selectedProductType ||
      product.productType === selectedProductType;

    return searchMatch && categoryMatch && typeMatch;
  });

  return (
    <section className="w-full bg-white py-8">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Search Row */}
        <div className="flex flex-col lg:flex-row gap-6 items-stretch mb-4">
          
          {/* Search Input */}
          <div className="flex-1 relative">
            <span className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-500">
              🔍
            </span>
            <input
              type="text"
              placeholder="Search by medicine, generic name, brand, or category"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-14 pr-6 py-4 rounded-l-xl shadow-md border border-gray-200 focus:outline-none focus:ring-2 focus:ring-green-400"
            />
          </div>

          {/* Search Button */}
          <button className="bg-green-500 hover:bg-green-600 text-white px-10 py-4 rounded-r-xl text-lg shadow-md transition">
            Search
          </button>
        </div>

        {/* Filter Row
        <div className="flex justify-end mb-4">
          <select className="px-6 py-3 rounded-xl border border-gray-300 shadow-md focus:outline-none">
            <option>Filter By Category</option>
            <option>Filter By Brand</option>
            
          </select>
        </div> */}

        {/* Filters */}
        <div className="mt-6 space-y-6">

          {/* Health Area */}
          <div className="bg-gray-50 rounded-2xl p-4 shadow-sm">
            <button
              onClick={() => setShowHealthArea(!showHealthArea)}
              className="w-full flex md:hidden items-center justify-between text-sm font-semibold text-gray-500 mb-3 tracking-wide uppercase"
            >
              Filter by Health Area
              <svg
                className={`h-5 w-5 transition-transform duration-200 ${
                  showHealthArea ? "rotate-180" : "rotate-0"
                }`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <h3 className="hidden md:block text-sm font-semibold text-gray-500 mb-3 tracking-wide uppercase">
              Filter by Health Area
            </h3>
            <div
              className={`flex flex-wrap gap-4 overflow-hidden transition-all duration-300 ease-out
              ${showHealthArea ? "max-h-[500px] opacity-100 translate-y-0" : "max-h-0 opacity-0 -translate-y-2"}
              md:max-h-none md:opacity-100 md:translate-y-0 md:flex`}
            >
              {[
                "All",
                "Women’s Health",
                "Bone & Joint Care",
                "Cardio & Metabolic Support",
                "Gut Health",
                "General Wellness",
              ].map((cat) => (
                <button
                  key={cat}
                  onClick={() => {
                    if (cat === "All") {
                      setSelectedCategory(null);
                    } else {
                      setSelectedCategory(selectedCategory === cat ? null : cat);
                    }
                  }}
                  className={`px-6 py-3 rounded-xl shadow-md border text-base transition-all duration-200 active:scale-95 hover:-translate-y-0.5 whitespace-nowrap ${
                    (cat === "All" && !selectedCategory) ||
                    selectedCategory === cat
                      ? "bg-green-500 text-white border-green-500"
                      : "bg-white border-gray-200 hover:bg-gray-50"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Product Type */}
          <div className="bg-gray-50 rounded-2xl p-4 shadow-sm">
            <button
              onClick={() => setShowProductType(!showProductType)}
              className="w-full flex md:hidden items-center justify-between text-sm font-semibold text-gray-500 mb-3 tracking-wide uppercase"
            >
              Filter by Product Type
              <svg
                className={`h-5 w-5 transition-transform duration-200 ${
                  showProductType ? "rotate-180" : "rotate-0"
                }`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <h3 className="hidden md:block text-sm font-semibold text-gray-500 mb-3 tracking-wide uppercase">
              Filter by Product Type
            </h3>
            <div
              className={`flex flex-wrap gap-4 overflow-hidden transition-all duration-300 ease-out
              ${showProductType ? "max-h-[300px] opacity-100 translate-y-0" : "max-h-0 opacity-0 -translate-y-2"}
              md:max-h-none md:opacity-100 md:translate-y-0 md:flex`}
            >
              {[
                "All",
                "Nutraceuticals & Supplements",
                "Pharmaceuticals",
                "Injectables",
              ].map((type) => (
                <button
                  key={type}
                  onClick={() => {
                    if (type === "All") {
                      setSelectedProductType(null);
                    } else {
                      setSelectedProductType(
                        selectedProductType === type ? null : type
                      );
                    }
                  }}
                  className={`px-6 py-3 rounded-xl shadow-md border text-base transition-all duration-200 active:scale-95 hover:-translate-y-0.5 whitespace-nowrap ${
                    (type === "All" && !selectedProductType) ||
                    selectedProductType === type
                      ? "bg-green-500 text-white border-green-500"
                      : "bg-white border-gray-200 hover:bg-gray-50"
                  }`}
                >
                  {type}
                </button>
              ))}
            </div>
          </div>

        </div>

      </div>

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 justify-items-center mt-10">
        {loading && <p className="col-span-full text-gray-500">Loading products...</p>}

        {!loading && filteredProducts.length === 0 && (
          <p className="col-span-full text-gray-500">No products found.</p>
        )}

        {!loading &&
          filteredProducts.map((product) => (
            <Box key={product._id} product={product} />
          ))}
      </div>
    </section>
  )
}

export default Catalogue
