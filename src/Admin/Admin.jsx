
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Admin() {
  
  const [composition, setComposition] = useState([]);
  const [uses, setUses] = useState([]);
  const [highlights, setHighlights] = useState([]);
  const [category, setcategory] = useState([]);
  const [updating, setUpdating] = useState(false);

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

  const a = sessionStorage.getItem("isAdminLoggedIn");
  if (a === "true") {
    // User is an admin
  } else {
    // User is not an admin
    navigate("/admin");
  }

  const [inputs, setInputs] = useState({
    composition: "",
    uses: "",
    highlights: ""
  });

  // --- Add/Edit Product Form State (controlled) ---
  const [form, setForm] = useState({
    brandName: "",
    productType: "",
    formType: "Tablet",
    genericType: "",
    genericName: "",
    packaging: "",
    availability: "In Stock"
  });

  const updateForm = (key, value) => {
    setForm((prev) => ({ ...prev, [key]: value }));
  };

  const [imageFile, setImageFile] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);

  // --- Edit Modal State ---
  const [showEditModal, setShowEditModal] = useState(false);
  const [editProduct, setEditProduct] = useState(null);
  const [editImageFile, setEditImageFile] = useState(null);
  const [editImagePreview, setEditImagePreview] = useState(null);
  // Dirty-check original snapshot
  const [originalEditProduct, setOriginalEditProduct] = useState(null);

  const addItem = (key, setter, list) => {
    if (!inputs[key].trim()) return;

    setter([...list, inputs[key].trim()]);
    setInputs({ ...inputs, [key]: "" });
  };

  const removeItem = (setter, list, index) => {
    setter(list.filter((_, i) => i !== index));
  };

  // Compress image utility
  const compressImage = (file, maxWidth = 800, quality = 0.7) =>
    new Promise((resolve) => {
      const img = new Image();
      const reader = new FileReader();

      reader.onload = (e) => {
        img.src = e.target.result;
      };

      img.onload = () => {
        const canvas = document.createElement("canvas");
        const scale = Math.min(maxWidth / img.width, 1);

        canvas.width = img.width * scale;
        canvas.height = img.height * scale;

        const ctx = canvas.getContext("2d");
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

        canvas.toBlob(
          (blob) => {
            resolve(
              new File([blob], file.name, {
                type: "image/jpeg",
                lastModified: Date.now()
              })
            );
          },
          "image/jpeg",
          quality
        );
      };

      reader.readAsDataURL(file);
    });

  const handleImageChange = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const compressed = await compressImage(file);

    setImageFile(compressed);
    setImagePreview(URL.createObjectURL(compressed));
  };

  const removeImage = () => {
    setImageFile(null);
    setImagePreview(null);
  };

  const renderMultiInput = (title, key, list, setter) => (
    <div className="bg-gray-50 rounded-lg p-4">
      <label className="block text-sm font-medium text-gray-700 mb-2">
        {title}
      </label>

      <div className="flex gap-2 mb-3">
        <input
          value={inputs[key]}
          onChange={(e) =>
            setInputs({ ...inputs, [key]: e.target.value })
          }
          className="flex-1 rounded-lg border px-3 py-2"
          placeholder={`Add ${title}`}
        />
        <button
          type="button"
          onClick={() => addItem(key, setter, list)}
          className="rounded-lg bg-[#4F7D73] px-4 py-2 text-white hover:bg-[#41685F]"
        >
          Add
        </button>
      </div>

      {list.length > 0 && (
        <table className="w-full text-sm bg-white rounded-lg overflow-hidden">
          <tbody>
            {list.map((item, index) => (
              <tr key={index} className="border-t">
                <td className="px-3 py-2">{item}</td>
                <td className="px-3 py-2 text-right">
                  <button
                    type="button"
                    onClick={() => removeItem(setter, list, index)}
                    className="text-red-500 hover:underline"
                  >
                    Remove
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );

  const buildFormData = () => {
    const formData = new FormData();

    formData.append("brandName", form.brandName);
    formData.append("productType", form.productType);
    formData.append("formType", form.formType);
    formData.append("genericType", form.genericType);
    formData.append("genericName", form.genericName);
    formData.append("packaging", form.packaging);
    formData.append("availability", form.availability);

    formData.append("category", JSON.stringify(category));
    formData.append("composition", JSON.stringify(composition));
    formData.append("uses", JSON.stringify(uses));
    formData.append("highlights", JSON.stringify(highlights));

    if (imageFile) {
      formData.append("image", imageFile);
    }

    return formData;
  };

 const validateProduct = () => {
  if (!form.brandName.trim()) return "Brand name is required";
  if (!form.productType) return "Product type is required";
  if (!form.formType) return "Form type is required";
  if (!form.genericType) return "Generic type is required";
  if (!form.genericName.trim()) return "Generic name is required";
  if (!form.packaging.trim()) return "Packaging is required";
  if (!form.availability) return "Availability is required";

  if (!category.length) return "At least one category is required";
  if (!composition.length) return "At least one composition is required";
  if (!uses.length) return "At least one use is required";
  if (!highlights.length) return "At least one highlight is required";

  return null; // ✅ valid
};

  const fetchProducts = async () => {
    try {
      setLoading(true);
      const res = await fetch("https://atmpharmacybackend.onrender.com/product/all");
      const data = await res.json();

      if (data.success) {
        setProducts(data.data);
      } else {
        console.error("Failed to fetch products");
      }
    } catch (err) {
      console.error("Fetch error:", err);
    } finally {
      setLoading(false);
    }
  };

  // --- Delete Handler ---
  const handleDelete = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this product?"
    );

    if (!confirmDelete) return;

    try {
      const res = await fetch(
        `https://atmpharmacybackend.onrender.com/product/delete/${id}`,
        { method: "DELETE" }
      );

      const data = await res.json();

      if (!res.ok) {
        alert(data?.message || "Delete failed");
        return;
      }

      alert("Product deleted successfully");
      fetchProducts();
    } catch (err) {
      console.error(err);
      alert("Server error");
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  // --- Edit Handler ---
  // Normalizes values so dropdowns always auto-select the right option
  const handleEdit = (product) => {
    setEditProduct({
      _id: product._id,

      brandName: product.brandName || "",
      productType: product.productType || "",
      formType: product.formType || "Tablet",
      genericType: product.genericType || "",
      genericName: product.genericName || "",
      packaging: product.packaging || "",
      availability: product.availability || "In Stock",

      // Ensure category is never null or undefined, always array
      category: Array.isArray(product.category)
        ? product.category
        : product.category
          ? [product.category]
          : [],
      composition: Array.isArray(product.composition) ? product.composition : [],
      uses: Array.isArray(product.uses) ? product.uses : [],
      highlights: Array.isArray(product.highlights) ? product.highlights : []
    });

    // store original snapshot for change detection
    setOriginalEditProduct({
      brandName: product.brandName || "",
      productType: product.productType || "",
      formType: product.formType || "Tablet",
      genericType: product.genericType || "",
      genericName: product.genericName || "",
      packaging: product.packaging || "",
      availability: product.availability || "In Stock",
      category: Array.isArray(product.category)
        ? product.category.filter(Boolean)
        : product.category
          ? [product.category]
          : [],
      composition: Array.isArray(product.composition) ? product.composition : [],
      uses: Array.isArray(product.uses) ? product.uses : [],
      highlights: Array.isArray(product.highlights) ? product.highlights : [],
      image: product.image || null
    });

    setEditImagePreview(product.image || null);
    setEditImageFile(null);
    setShowEditModal(true);
  };

  const updateEditField = (key, value) => {
    setEditProduct((prev) => ({ ...prev, [key]: value }));
  };

  // Dirty-check helper for edit modal
  const hasEditChanges = () => {
    if (!originalEditProduct || !editProduct) return false;

    const fields = [
      "brandName",
      "productType",
      "formType",
      "genericType",
      "genericName",
      "packaging",
      "availability"
    ];

    // compare primitive fields
    for (const field of fields) {
      if ((originalEditProduct[field] || "") !== (editProduct[field] || "")) {
        return true;
      }
    }

    // compare array fields
    const arrays = ["category", "composition", "uses", "highlights"];
    for (const key of arrays) {
      const a = JSON.stringify(originalEditProduct[key] || []);
      const b = JSON.stringify(editProduct[key] || []);
      if (a !== b) return true;
    }

    // image change
    if (editImageFile) return true;

    return false;
  };

  const handleEditImageChange = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const compressed = await compressImage(file);
    setEditImageFile(compressed);
    setEditImagePreview(URL.createObjectURL(compressed));
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4 sm:p-6 lg:p-8 font-sans">
      <h1 className="text-3xl font-semibold mb-8">Product Admin Panel</h1>

      {/* FORM CARD */}
      <div className="bg-white rounded-xl shadow-sm p-6 mb-10">
        <h2 className="text-xl font-medium mb-6">Add / Edit Product</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6 mb-6">
          <div>
            <label className="block text-sm text-gray-600 mb-1">Brand Name</label>
            <input
              value={form.brandName}
              onChange={(e) => updateForm("brandName", e.target.value)}
              className="w-full rounded-lg border px-3 py-2"
            />
          </div>

          <div>
            <label className="block text-sm text-gray-600 mb-1">Product Type</label>
            <select
              value={form.productType}
              onChange={(e) => updateForm("productType", e.target.value)}
              className="w-full rounded-lg border px-3 py-2"
            >
              <option value="">Select Product Type</option>
              <option>Nutraceuticals & Supplements</option>
              <option>Pharmaceuticals</option>
              <option>Injectables</option>
            </select>
          </div>

          <div>
            <label className="block text-sm text-gray-600 mb-1">Form Type</label>
            <select
              value={form.formType}
              onChange={(e) => updateForm("formType", e.target.value)}
              className="w-full rounded-lg border px-3 py-2"
            >
              <option>Tablet</option>
              <option>Capsule</option>
              <option>Syrup</option>
              <option>Injection</option>
              <option>Cream</option>
              <option>Gel</option>
              <option>Powder</option>
              <option>Drops</option>
            </select>
          </div>

          <div>
            <label className="block text-sm text-gray-600 mb-1">Drug Class (Generic Type)</label>
            <select
              value={form.genericType}
              onChange={(e) => updateForm("genericType", e.target.value)}
              className="w-full rounded-lg border px-3 py-2"
            >
              <option value="">Select Drug Class</option>
              <option>Analgesic</option>
              <option>Antipyretic</option>
              <option>Antibiotic</option>
              <option>NSAID</option>
              <option>Antidiabetic</option>
              <option>Antacid</option>
              <option>Antihypertensive</option>
              <option>Cardiac</option>
              <option>Multivitamin</option>
              <option>Probiotic</option>
              <option>Hormonal</option>
              <option>Immunomodulator</option>
              <option>Antioxidant</option>
            </select>
          </div>

          <div>
            <label className="block text-sm text-gray-600 mb-1">Generic Name</label>
            <input
              value={form.genericName}
              onChange={(e) => updateForm("genericName", e.target.value)}
              className="w-full rounded-lg border px-3 py-2"
            />
          </div>

          <div>
            <label className="block text-sm text-gray-600 mb-1">Packaging</label>
            <input
              value={form.packaging}
              onChange={(e) => updateForm("packaging", e.target.value)}
              className="w-full rounded-lg border px-3 py-2"
              placeholder="30 mg packet or 10 × 10 tablets"
            />
          </div>

          <div>
            <label className="block text-sm text-gray-600 mb-1">Availability</label>
            <select
              value={form.availability}
              onChange={(e) => updateForm("availability", e.target.value)}
              className="w-full rounded-lg border px-3 py-2"
            >
              <option>In Stock</option>
              <option>Out of Stock</option>
            </select>
          </div>

          <div>
            <label className="block text-sm text-gray-600 mb-2">Product Image</label>

            {!imagePreview ? (
              <label className="flex cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed border-gray-300 bg-gray-50 px-4 py-6 text-center hover:bg-gray-100">
                <span className="text-sm text-gray-500">
                  Click to upload image
                </span>
                <span className="text-xs text-gray-400 mt-1">
                  JPG, PNG, WEBP
                </span>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageChange}
                  className="hidden"
                />
              </label>
            ) : (
              <div className="relative">
                <img
                  src={imagePreview}
                  alt="Preview"
                  className="h-32 sm:h-40 w-full rounded-lg object-cover"
                />

                <div className="mt-2 flex gap-2">
                  <label className="cursor-pointer rounded bg-blue-500 px-3 py-1 text-sm text-white">
                    Change
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleImageChange}
                      className="hidden"
                    />
                  </label>

                  <button
                    type="button"
                    onClick={removeImage}
                    className="rounded bg-red-500 px-3 py-1 text-sm text-white"
                  >
                    Remove
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* CATEGORY (MULTI SELECT) */}
        <div className="bg-gray-50 rounded-lg p-3 sm:p-4 mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Category
          </label>

          <div className="flex gap-2 mb-3">
            <select
              value=""
              onChange={(e) => {
                const value = e.target.value;
                if (!value || category.includes(value)) return;
                setcategory([...category, value]);
              }}
              className="flex-1 rounded-lg border px-3 py-2"
            >
              <option value="">Select Category</option>
              <option>Women’s Health</option>
              <option>Bone & Joint Care</option>
              <option>Cardio & Metabolic Support</option>
              <option>Gut Health</option>
              <option>General Wellness</option>
            </select>
          </div>

          {category.length > 0 && (
            <table className="w-full text-sm bg-white rounded-lg overflow-hidden">
              <tbody>
                {category.map((cat, index) => (
                  <tr key={index} className="border-t">
                    <td className="px-3 py-2">{cat}</td>
                    <td className="px-3 py-2 text-right">
                      <button
                        type="button"
                        onClick={() =>
                          setcategory(category.filter((_, i) => i !== index))
                        }
                        className="text-red-500 hover:underline"
                      >
                        Remove
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>

        {/* MULTI VALUE SECTIONS */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6">
          {renderMultiInput("Composition", "composition", composition, setComposition)}
          {renderMultiInput("Uses", "uses", uses, setUses)}
          {renderMultiInput("Highlights", "highlights", highlights, setHighlights)}
        </div>

        <button
          onClick={async () => {
            try {
              const error = validateProduct();
  if (error) {
    alert(error);
    return;
  }
              const formData = buildFormData();

              console.log("📦 Sending FormData:");
              console.log([...formData.entries()]);

              const res = await fetch("https://atmpharmacybackend.onrender.com/product/add", {
                method: "POST",
                body: formData
                // ⚠️ DO NOT set Content-Type manually
              });

              const data = await res.json();

              if (!res.ok) {
                console.error("❌ Backend Error:", data);
                alert(data?.message || "Failed to add product");
                return;
              }

              console.log("✅ Product Added:", data);
              alert("Product added successfully!");
              fetchProducts();
              // Clear form after successful add
              setForm({
                brandName: "",
                productType: "",
                formType: "Tablet",
                genericType: "",
                genericName: "",
                packaging: "",
                availability: "In Stock"
              });
              setcategory([]);
              setComposition([]);
              setUses([]);
              setHighlights([]);
              setImageFile(null);
              setImagePreview(null);
            } catch (err) {
              console.error("❌ Network / Server Error:", err);
              alert("Server error");
            }
          }}
          className="mt-8 w-full sm:w-auto rounded-lg bg-[#4F7D73] px-6 py-2 text-white hover:bg-[#41685F]"
        >
          Save Product
        </button>
      </div>

      {/* TABLE CARD (STATIC DESIGN) */}
      <div className="bg-white rounded-xl shadow-sm p-6">
        <h2 className="text-xl font-medium mb-6">All Products</h2>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="bg-gray-50 text-gray-600">
                <th className="px-3 sm:px-4 py-3 text-left whitespace-nowrap">Brand</th>
                <th className="px-3 sm:px-4 py-3 text-left whitespace-nowrap">Generic</th>
                <th className="px-3 sm:px-4 py-3 text-left whitespace-nowrap">Form</th>
                <th className="px-3 sm:px-4 py-3 text-left whitespace-nowrap">Availability</th>
                <th className="px-3 sm:px-4 py-3 text-left whitespace-nowrap">Actions</th>
              </tr>
            </thead>
            <tbody>
              {loading ? (
                <tr>
                  <td colSpan="5" className="px-3 sm:px-4 py-6 text-center whitespace-nowrap">
                    Loading products...
                  </td>
                </tr>
              ) : products.length === 0 ? (
                <tr>
                  <td colSpan="5" className="px-3 sm:px-4 py-6 text-center whitespace-nowrap">
                    No products found
                  </td>
                </tr>
              ) : (
                products.map((product) => (
                  <tr key={product._id} className="border-t">
                    <td className="px-3 sm:px-4 py-3 whitespace-nowrap font-medium">
                      {product.brandName}
                    </td>
                    <td className="px-3 sm:px-4 py-3 whitespace-nowrap">
                      {product.genericName}
                    </td>
                    <td className="px-3 sm:px-4 py-3 whitespace-nowrap">
                      {product.formType}
                    </td>
                    <td
                      className={`px-3 sm:px-4 py-3 whitespace-nowrap font-medium ${product.availability === "In Stock"
                        ? "text-green-600"
                        : "text-red-500"
                        }`}
                    >
                      {product.availability}
                    </td>
                    <td className="px-3 sm:px-4 py-3 whitespace-nowrap space-x-2">
                      <button
                        onClick={() => handleEdit(product)}
                        className="rounded bg-yellow-400 px-3 py-1"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => handleDelete(product._id)}
                        className="rounded bg-red-500 px-3 py-1 text-white"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
      {/* EDIT MODAL */}
      {showEditModal && editProduct && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
          <div className="bg-white w-full max-w-5xl max-h-[90vh] overflow-y-auto rounded-xl p-4 sm:p-6 relative">
            {updating && (
              <div className="absolute inset-0 z-50 flex items-center justify-center bg-white/70">
                <div className="h-10 w-10 animate-spin rounded-full border-4 border-[#4F7D73] border-t-transparent"></div>
              </div>
            )}
            <button
              onClick={() => {
                setShowEditModal(false);
                setEditProduct(null);
              }}
              className="absolute right-4 top-4 text-gray-500 hover:text-black"
            >
              ✕
            </button>

            <h2 className="text-2xl font-semibold mb-6">Edit Product</h2>

            {/* BASIC INFO */}
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6 mb-6">
              <div>
                <label className="block text-sm text-gray-600 mb-1">Brand Name</label>
                <input
                  value={editProduct.brandName}
                  onChange={(e) => updateEditField("brandName", e.target.value)}
                  className="rounded-lg border px-3 py-2 w-full"
                />
              </div>
              <div>
                <label className="block text-sm text-gray-600 mb-1">Generic Name</label>
                <input
                  value={editProduct.genericName}
                  onChange={(e) => updateEditField("genericName", e.target.value)}
                  className="rounded-lg border px-3 py-2 w-full"
                />
              </div>
              <div>
                <label className="block text-sm text-gray-600 mb-1">Packaging</label>
                <input
                  value={editProduct.packaging}
                  onChange={(e) => updateEditField("packaging", e.target.value)}
                  className="rounded-lg border px-3 py-2 w-full"
                />
              </div>
              <div>
                <label className="block text-sm text-gray-600 mb-1">Product Type</label>
                <select
                  value={editProduct.productType}
                  onChange={(e) => updateEditField("productType", e.target.value)}
                  className="rounded-lg border px-3 py-2 w-full"
                >
                  <option value="">Select Product Type</option>
                  <option>Nutraceuticals & Supplements</option>
                  <option>Pharmaceuticals</option>
                  <option>Injectables</option>
                </select>
              </div>
              <div>
                <label className="block text-sm text-gray-600 mb-1">Form Type</label>
                <select
                  value={editProduct.formType}
                  onChange={(e) => updateEditField("formType", e.target.value)}
                  className="rounded-lg border px-3 py-2 w-full"
                >
                  <option>Tablet</option>
                  <option>Capsule</option>
                  <option>Syrup</option>
                  <option>Injection</option>
                  <option>Cream</option>
                  <option>Gel</option>
                  <option>Powder</option>
                  <option>Drops</option>
                </select>
              </div>
              <div>
                <label className="block text-sm text-gray-600 mb-1">
                  Drug Class (Generic Type)
                </label>
                <select
                  value={editProduct.genericType || ""}
                  onChange={(e) => updateEditField("genericType", e.target.value)}
                  className="rounded-lg border px-3 py-2 w-full"
                >
                  <option value="">Select Drug Class</option>
                  <option>Analgesic</option>
                  <option>Antioxidant</option>
                  <option>Antipyretic</option>
                  <option>Antibiotic</option>
                  <option>NSAID</option>
                  <option>Antidiabetic</option>
                  <option>Antacid</option>
                  <option>Antihypertensive</option>
                  <option>Cardiac</option>
                  <option>Multivitamin</option>
                  <option>Probiotic</option>
                  <option>Hormonal</option>
                  <option>Immunomodulator</option>
                </select>
              </div>
              <div>
                <label className="block text-sm text-gray-600 mb-1">Availability</label>
                <select
                  value={editProduct.availability}
                  onChange={(e) => updateEditField("availability", e.target.value)}
                  className="rounded-lg border px-3 py-2 w-full"
                >
                  <option>In Stock</option>
                  <option>Out of Stock</option>
                </select>
              </div>
            </div>

            {/* CATEGORY */}
            <div className="bg-gray-50 rounded-lg p-3 sm:p-4 mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Category
              </label>
              <div className="flex gap-2 mb-3">
                {console.log(editProduct)}
                <select
                  value=""
                  onChange={(e) => {
                    const value = e.target.value;
                    if (!value) return;

                    const current = Array.isArray(editProduct.category)
                      ? editProduct.category
                      : [];

                    if (current.includes(value)) return;

                    updateEditField("category", [...current, value]);
                  }}
                  className="flex-1 rounded-lg border px-3 py-2"
                >
                  <option value="">Select Category</option>
                  <option
                    value="Women’s Health"
                    disabled={editProduct.category?.includes("Women’s Health")}
                  >
                    Women’s Health
                  </option>
                  <option
                    value="Bone & Joint Care"
                    disabled={editProduct.category?.includes("Bone & Joint Care")}
                  >
                    Bone & Joint Care
                  </option>
                  <option
                    value="Cardio & Metabolic Support"
                    disabled={editProduct.category?.includes("Cardio & Metabolic Support")}
                  >
                    Cardio & Metabolic Support
                  </option>
                  <option
                    value="Gut Health"
                    disabled={editProduct.category?.includes("Gut Health")}
                  >
                    Gut Health
                  </option>
                  <option
                    value="General Wellness"
                    disabled={editProduct.category?.includes("General Wellness")}
                  >
                    General Wellness
                  </option>
                </select>
              </div>
              {editProduct.category?.length > 0 && (
                <table className="w-full text-sm bg-white rounded-lg overflow-hidden">
                  <tbody>
                    {editProduct.category.map((cat, index) => (
                      <tr key={index} className="border-t">
                        <td className="px-3 py-2 font-medium text-[#4F7D73]">
                          {cat}
                        </td>
                        <td className="px-3 py-2 text-right">
                          <button
                            type="button"
                            onClick={() =>
                              updateEditField(
                                "category",
                                editProduct.category.filter((_, i) => i !== index)
                              )
                            }
                            className="text-red-500 hover:underline"
                          >
                            Remove
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              )}
            </div>

            {/* MULTI VALUES */}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6 mb-6">
              {renderMultiInput(
                "Composition",
                "composition",
                editProduct.composition,
                (list) => updateEditField("composition", list)
              )}
              {renderMultiInput(
                "Uses",
                "uses",
                editProduct.uses,
                (list) => updateEditField("uses", list)
              )}
              {renderMultiInput(
                "Highlights",
                "highlights",
                editProduct.highlights,
                (list) => updateEditField("highlights", list)
              )}
            </div>

            {/* IMAGE EDIT SECTION */}
            <div className="mb-6">
              <label className="block text-sm font-medium mb-2">Product Image</label>

              {!editImagePreview ? (
                <label className="flex cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed px-4 py-6">
                  <span className="text-sm">Upload Image</span>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleEditImageChange}
                    className="hidden"
                  />
                </label>
              ) : (
                <div>
                  <img
                    src={editImagePreview}
                    className="h-40 w-full object-cover rounded-lg mb-2"
                    alt=""
                  />
                  <div className="flex gap-2">
                    <label className="cursor-pointer rounded bg-blue-500 px-3 py-1 text-white text-sm">
                      Change
                      <input
                        type="file"
                        accept="image/*"
                        onChange={handleEditImageChange}
                        className="hidden"
                      />
                    </label>
                    <button
                      onClick={() => {
                        setEditImagePreview(null);
                        setEditImageFile(null);
                      }}
                      className="rounded bg-red-500 px-3 py-1 text-white text-sm"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              )}
            </div>

            <div className="flex flex-col sm:flex-row justify-end gap-3">
              <button
                onClick={() => {
                  setShowEditModal(false);
                  setEditProduct(null);
                  setOriginalEditProduct(null);
                }}
                className="rounded-lg border px-5 py-2"
              >
                Cancel
              </button>

              <button
              disabled={updating}
                onClick={async () => {
                  if (!hasEditChanges()) {
                    alert("No changes detected");
                    return;
                  }

                  try {
                    setUpdating(true);
                    const formData = new FormData();

                    formData.append("brandName", editProduct.brandName);
                    formData.append("productType", editProduct.productType);
                    formData.append("formType", editProduct.formType);
                    formData.append("genericType", editProduct.genericType);
                    formData.append("genericName", editProduct.genericName);
                    formData.append("packaging", editProduct.packaging);
                    formData.append("availability", editProduct.availability);

                    const safeCategory = Array.isArray(editProduct.category)
                      ? editProduct.category
                      : [];
                    formData.append("category", JSON.stringify(safeCategory));
                    formData.append("composition", JSON.stringify(editProduct.composition));
                    formData.append("uses", JSON.stringify(editProduct.uses));
                    formData.append("highlights", JSON.stringify(editProduct.highlights));

                    if (editImageFile) {
                      formData.append("image", editImageFile);
                    }

                    const res = await fetch(
                      `https://atmpharmacybackend.onrender.com/product/update/${editProduct._id}`,
                      {
                        method: "PATCH",
                        body: formData
                      }
                    );

                    const data = await res.json();

                    if (!res.ok) {
                      alert(data?.message || "Update failed");
                      setUpdating(false);
                      return;
                    }

                    alert("Product updated successfully");
                    setUpdating(false);
                    setShowEditModal(false);
                    setEditProduct(null);
                    setOriginalEditProduct(null);
                    fetchProducts();
                  }  catch (err) {
                console.error(err);
              alert("Server error");
              setUpdating(false);
}
                }}
              className="w-full sm:w-auto rounded-lg bg-[#4F7D73] px-6 py-2 text-white hover:bg-[#41685F]"
              >
              Update Product
            </button>
          </div>
        </div>
        </div>
  )
}
    </div >
  );
}