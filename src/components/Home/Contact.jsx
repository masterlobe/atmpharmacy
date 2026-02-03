import React, { useState } from 'react'
import { motion } from 'framer-motion'

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [toast, setToast] = useState({
    show: false,
    type: "success", // success | error
    message: "",
  });

  const handleChange = (key, value) => {
    setFormData((prev) => ({ ...prev, [key]: value }));
  };

  const showToast = (type, message) => {
    setToast({ show: true, type, message });
    setTimeout(() => {
      setToast({ show: false, type: "", message: "" });
    }, 3000);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      !formData.firstName.trim() ||
      !formData.lastName.trim() ||
      !formData.email.trim() ||
      !formData.message.trim()
    ) {
      showToast("error", "Please fill in all fields before submitting.");
      return;
    }

    setLoading(true);

    try {
      const res = await fetch("https://atmpharmacybackend.onrender.com/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        showToast("success", "Message sent successfully!");

        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          message: "",
        });
      } else {
        showToast("error", data.message || "Failed to send message");
      }
    } catch (err) {
      console.error(err);
      showToast("error", "Server error. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  const Toast = () =>
    toast.show ? (
      <motion.div
        initial={{ opacity: 0, y: -20, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.3 }}
        className={`fixed top-6 right-6 z-50 px-6 py-4 rounded-xl shadow-lg text-white
          ${toast.type === "success" ? "bg-green-500" : "bg-red-500"}
        `}
      >
        <span className="font-medium">{toast.message}</span>
      </motion.div>
    ) : null;

  return (
    <motion.section
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
      viewport={{ once: true }}
      className="w-full bg-white py-32"
    >
      <Toast />
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-4xl font-semibold text-black mb-3">
            Have some Questions?
          </h2>
          <p className="text-gray-600 text-lg">
            feel free to contact us anytime, we will be glad to help you solve your query
          </p>
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-2 rounded-xl shadow-[0_8px_20px_rgba(0,0,0,0.15)] overflow-hidden"
        >

          {/* Left Panel */}
          <div className="bg-cyan-100 p-10 flex flex-col gap-6">

            <motion.div
              whileHover={{ y: -4 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              className="bg-white rounded-xl px-6 py-4 shadow flex items-center gap-4"
            >
              <span className="text-xl">📞</span>
              <span className="text-black font-medium">
                9266830790 | 6280527028
              </span>
            </motion.div>

            <motion.div
              whileHover={{ y: -4 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              className="bg-white rounded-xl px-6 py-4 shadow flex items-center gap-4"
            >
              <span className="text-xl">✉️</span>
              <span className="text-black font-medium break-all sm:break-normal">
                aayushshah12311@gmail.com
              </span>
            </motion.div>

            <motion.div
              whileHover={{ y: -4 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              className="bg-white rounded-xl px-6 py-4 shadow flex items-center gap-4"
            >
              <span className="text-xl">📍</span>
              <span className="text-black font-medium">
                koteshwor, kathmandu
              </span>
            </motion.div>

            <div className="mt-4 rounded-xl overflow-hidden shadow">
              <iframe
                title="map"
                src="https://www.google.com/maps?q=koteshwor%20kathmandu&output=embed"
                className="w-full h-64 border-0"
                loading="lazy"
              ></iframe>
            </div>
          </div>

          {/* Right Form */}
          <div className="bg-white p-12">
            <form className="space-y-8" onSubmit={handleSubmit}>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <label className="block mb-2 font-medium">First Name</label>
                  <input
                    type="text"
                    value={formData.firstName}
                    onChange={(e) => handleChange("firstName", e.target.value)}
                    className="w-full rounded-full border px-6 py-3 shadow focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block mb-2 font-medium">Last Name</label>
                  <input
                    type="text"
                    value={formData.lastName}
                    onChange={(e) => handleChange("lastName", e.target.value)}
                    className="w-full rounded-full border px-6 py-3 shadow focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block mb-2 font-medium">Email</label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleChange("email", e.target.value)}
                  className="w-full rounded-full border px-4 sm:px-6 py-3 shadow focus:outline-none break-words" />
              </div>

              <div>
                <label className="block mb-2 font-medium">Message</label>
                <textarea
                  rows="6"
                  value={formData.message}
                  onChange={(e) => handleChange("message", e.target.value)}
                  placeholder="Write your message here..."
                  className="w-full rounded-2xl border px-6 py-4 shadow focus:outline-none resize-none"
                ></textarea>
              </div>

              <motion.button
                whileHover={{ scale: loading ? 1 : 1.05 }}
                whileTap={{ scale: loading ? 1 : 0.97 }}
                type="submit"
                disabled={loading || !formData.message.trim()}
                className={`px-10 py-3 rounded-full text-lg font-medium transition ${loading
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-green-500 hover:bg-green-600 text-white"
                  }`}
              >
                {loading ? "Sending..." : "Submit"}
              </motion.button>

            </form>
          </div>

        </motion.div>
      </div>
    </motion.section>
  )
}

export default Contact
