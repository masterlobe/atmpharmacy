import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import medicine1 from '../../assets/images/colorlogo.png';
import Navbar from "../Navbar";
import Footer from "../Home/Footer";

const Details = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [showPopup, setShowPopup] = useState(false);
  const [product, setProduct] = useState([]);
  const [allProducts, setAllProducts] = useState([]);
  useEffect(() => {
    const storedProduct = localStorage.getItem("selectedProduct");
    if (!storedProduct) return;

    setProduct(JSON.parse(storedProduct));

    const storedProducts = localStorage.getItem("allProducts");
    if (storedProducts) {
      setAllProducts(JSON.parse(storedProducts));
    }
  }, [location.key]);
  return (
    <>
    <Navbar />
    <div className=" min-h-screen py-10 px-4 md:px-12">
        
      {/* Go Back */}
      <div className="max-w-6xl mx-auto mb-8">
        <button
          onClick={() => navigate("/catalogue")}
          className="flex items-center gap-2 bg-white px-6 md:px-10 py-2 rounded-full shadow hover:shadow-md transition"
        >
          <ArrowLeft size={18} />
          Go Back
        </button>
      </div>

      {/* Main Card */}
      <div className="max-w-6xl mx-auto bg-gray-50 border border-gray-300 rounded-2xl shadow-sm p-6 md:p-10">
        {/* Top Section */}
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <img
            src={product.image || medicine1}
            alt="Absolute-M"
            className="w-full max-w-sm mx-auto"
          />

          <div>
            <h1 className="text-3xl font-bold mb-2">{product.brandName}</h1>
            <p className="text-gray-600 mb-4">{product.formType} · {(product.category || []).join(", ")}</p>

            <p className="mb-2">
              <span className="font-semibold">Category:</span> {(product.category || []).join(", ")}
            </p>
            <p>
              <span className="font-semibold">Availability:</span>
               {product.availability || "N/A"}
            </p>
          </div>
        </div>

        {/* Info Grid */}
        <div className="grid md:grid-cols-2 gap-10 mt-12">
          <div>
            <h2 className="font-semibold text-lg mb-3">
              Composition (per tablet)
            </h2>
            <ul className="list-disc ml-5 text-gray-700 space-y-1">
              {(product?.composition || []).map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="font-semibold text-lg mb-3">Indications / Uses</h2>
            <ul className="list-disc ml-5 text-gray-700 space-y-1">
              {(product?.uses || []).map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="font-semibold text-lg mb-3">
              Brand & Generic Mapping
            </h2>
            <ul className="list-disc ml-5 text-gray-700 space-y-1">
              <li>Brand Name: {product.brandName}</li>
              <li>
                Generic Name: {product.genericName}
              </li>
              <li>Product Type: {product.productType}</li>
            </ul>
          </div>

          <div>
            <h2 className="font-semibold text-lg mb-3">Key Highlights</h2>
            <ul className="list-disc ml-5 text-gray-700 space-y-1">
              {(product?.highlights || []).map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="font-semibold text-lg mb-3">
              Packaging & Supply
            </h2>
            <ul className="list-disc ml-5 text-gray-700 space-y-1">
              <li>Packaging: {product.packaging || "N/A"}</li>
              <li>Supply Type: Bulk & institutional supply available</li>
              <li>
                Target Users: Pharmacies, clinics, healthcare distributors
              </li>
            </ul>
          </div>
        </div>

        {/* CTA */}
        <div className="flex justify-center mt-14">
          <button
            onClick={() => setShowPopup(true)}
            className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-xl text-lg font-medium transition"
          >
            Enquire About the Product
          </button>
        </div>

        {/* Similar Products */}
        {(() => {
          const similarProducts = allProducts.filter((item) => {
            if (!item.genericName || !product.genericName) return false;

            const currentGenerics = Array.isArray(product.genericName)
              ? product.genericName.map((g) => g.toLowerCase().trim())
              : [product.genericName.toLowerCase().trim()];

            const itemGenerics = Array.isArray(item.genericName)
              ? item.genericName.map((g) => g.toLowerCase().trim())
              : [item.genericName.toLowerCase().trim()];

            const hasCommonGeneric = itemGenerics.some((g) =>
              currentGenerics.includes(g)
            );

            return hasCommonGeneric && item.brandName !== product.brandName;
          });
          return similarProducts.length > 0 && (
            <div className="mt-16">
              <h2 className="text-xl font-semibold mb-6">Similar Products</h2>

              <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
                {similarProducts.map((item, index) => (
                  <div
                    key={index}
                    onClick={() => {
                      localStorage.setItem("selectedProduct", JSON.stringify(item));
                      navigate("/details");
                    }}
                    className="bg-white shadow-md rounded-lg p-4 text-center hover:shadow-lg transition cursor-pointer"
                  >
                    <img
                      src={item.image || medicine1}
                      alt={item.brandName}
                      className="h-40 mx-auto object-contain mb-3"
                    />
                    <h3 className="font-semibold">{item.brandName}</h3>
                    <p className="text-gray-500 text-sm">{item.formType}</p>
                  </div>
                ))}
              </div>
            </div>
          );
        })()}
      </div>
    </div>
    {showPopup && (
      <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 px-4">
        <div className="bg-white rounded-2xl p-8 max-w-lg w-full relative">
          <button
            onClick={() => setShowPopup(false)}
            className="absolute top-3 right-3 text-gray-500 hover:text-gray-700 text-xl"
          >
            ✕
          </button>

          <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
          <p className="text-gray-600 mb-6">
            Interested in this product? Reach out to our team and we’ll assist you with pricing, availability, and bulk orders.
          </p>

          <div className="space-y-3 text-gray-700">
            <p><span className="font-semibold">Phone:</span> +91 98765 43210</p>
            <p><span className="font-semibold">Email:</span> sales@company.com</p>
            <p><span className="font-semibold">Address:</span> Your company address here</p>
          </div>

          <button
            onClick={() => setShowPopup(false)}
            className="mt-6 w-full bg-green-500 hover:bg-green-600 text-white py-2 rounded-lg transition"
          >
            Close
          </button>
        </div>
      </div>
    )}
    <Footer />
    </>
  );
};

export default Details;
