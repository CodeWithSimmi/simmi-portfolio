import { useLocation } from "react-router-dom";
import { useState } from "react";
import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";

export const PaymentPage = () => {
  const location = useLocation();
  const { name, details, price } = location.state || {
    name: "Premium Package",
    details: "Website + Admin Panel + Support",
    price: 2999,
  };

  const [method, setMethod] = useState("card");

  // UPI Verification States
  const [upiID, setUpiID] = useState("");
  const [upiStatus, setUpiStatus] = useState(null); // null | "valid" | "invalid"

  const handleUPIVerify = () => {
  const upiRegex = /^[0-9]{10}@(ybl|ibl)$/;
  if (upiRegex.test(upiID.trim())) {
    setUpiStatus("valid");
  } else {
    setUpiStatus("invalid");
  }
};

  return (
    <section className="min-h-screen bg-[#0f0f1b] text-white px-6 py-12 flex items-start justify-center">
      <div className="w-full max-w-5xl bg-[#1e1b2f] rounded-xl p-8 shadow-lg grid grid-cols-1 md:grid-cols-3 gap-8">

        {/* 1. Order Summary */}
        <div className="col-span-1 border-r border-[#2d2b3f] pr-4">
          <h3 className="text-xl font-semibold mb-4">🧾 Order Summary</h3>
          <div className="bg-[#2a273d] p-4 rounded-lg mb-4">
            <p className="text-lg font-bold">{name}</p>
            <p className="text-sm text-[#aaa6c3] mt-1">{details}</p>
            <p className="text-pink-500 mt-4 font-semibold text-lg">₹{price}</p>
          </div>
        </div>

        {/* 2. Payment Method */}
        <div className="col-span-1 px-2">
          <h3 className="text-xl font-semibold mb-4">💳 Payment Method</h3>
          <div className="space-y-4">
            {/* Payment Options */}
            <div className="space-y-3">
              <label className="flex items-center gap-3">
                <input
                  type="radio"
                  name="method"
                  checked={method === "card"}
                  onChange={() => setMethod("card")}
                />
                <span>Credit / Debit Card</span>
              </label>
              <label className="flex items-center gap-3">
                <input
                  type="radio"
                  name="method"
                  checked={method === "upi"}
                  onChange={() => setMethod("upi")}
                />
                <span>UPI</span>
              </label>
              <label className="flex items-center gap-3">
                <input
                  type="radio"
                  name="method"
                  checked={method === "netbanking"}
                  onChange={() => setMethod("netbanking")}
                />
                <span>Net Banking</span>
              </label>
              <label className="flex items-center gap-3">
                <input
                  type="radio"
                  name="method"
                  checked={method === "wallet"}
                  onChange={() => setMethod("wallet")}
                />
                <span>Digital Wallet (Paytm / GPay / PhonePe)</span>
              </label>
            </div>

            {/* Conditional Fields */}
            <div className="space-y-4">
              {method === "card" && (
                <>
                  <input
                    type="text"
                    placeholder="Card Number"
                    className="w-full p-3 bg-[#2a273d] rounded-lg text-white placeholder-gray-400"
                  />
                  <div className="flex gap-4">
                    <input
                      type="text"
                      placeholder="MM/YY"
                      className="w-1/2 p-3 bg-[#2a273d] rounded-lg text-white placeholder-gray-400"
                    />
                    <input
                      type="text"
                      placeholder="CVV"
                      className="w-1/2 p-3 bg-[#2a273d] rounded-lg text-white placeholder-gray-400"
                    />
                  </div>
                </>
              )}

              {method === "upi" && (
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <input
                      type="text"
                      value={upiID}
                      onChange={(e) => {
                        setUpiID(e.target.value);
                        setUpiStatus(null);
                      }}
                      placeholder="Enter UPI ID (e.g., 1234567890@ybl)"
                      className="w-full p-3 bg-[#2a273d] rounded-lg text-white placeholder-gray-400"
                    />
                    <button
                      type="button"
                      onClick={handleUPIVerify}
                      className="bg-amber-400 text-black px-4 py-2 rounded-md hover:bg-amber-300"
                    >
                      Verify
                    </button>
                  </div>

                  {upiStatus === "valid" && (
                    <div className="flex items-center text-green-400 gap-2">
                      <FaCheckCircle />
                      <span>UPI ID Verified</span>
                    </div>
                  )}
                  {upiStatus === "invalid" && (
                    <div className="flex items-center text-red-400 gap-2">
                      <FaTimesCircle />
                      <span>Invalid UPI ID</span>
                    </div>
                  )}
                </div>
              )}

              {method === "netbanking" && (
                <select className="w-full p-3 bg-[#2a273d] rounded-lg text-white">
                  <option>Select Bank</option>
                  <option>HDFC Bank</option>
                  <option>ICICI Bank</option>
                  <option>SBI</option>
                  <option>Axis Bank</option>
                </select>
              )}

              {method === "wallet" && (
                <select className="w-full p-3 bg-[#2a273d] rounded-lg text-white">
                  <option>Select Wallet</option>
                  <option>Paytm</option>
                  <option>GPay</option>
                  <option>PhonePe</option>
                </select>
              )}
            </div>
          </div>
        </div>

        {/* 3. Billing Details */}
        <div className="col-span-1 px-2">
          <h3 className="text-xl font-semibold mb-4">📄 Billing Details</h3>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Full Name"
              className="w-full p-3 bg-[#2a273d] rounded-lg text-white placeholder-gray-400"
            />
            <input
              type="email"
              placeholder="Email Address"
              className="w-full p-3 bg-[#2a273d] rounded-lg text-white placeholder-gray-400"
            />
            <input
              type="text"
              placeholder="Billing Address"
              className="w-full p-3 bg-[#2a273d] rounded-lg text-white placeholder-gray-400"
            />
            <input
              type="text"
              placeholder="Phone Number"
              className="w-full p-3 bg-[#2a273d] rounded-lg text-white placeholder-gray-400"
            />
            <button className="w-full mt-2 bg-amber-400 text-black py-3 rounded-lg hover:bg-amber-300 font-bold">
              Pay ₹{price}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};
