import { useLocation } from "react-router-dom";
import { useState } from "react";
import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";
import { Player } from "@lottiefiles/react-lottie-player";

export const PaymentPage = () => {
  const location = useLocation();
  const { name, details, price } = location.state || {
    name: "Premium Package",
    details: "Website + Admin Panel + Support",
    price: 2999,
  };

  const [method, setMethod] = useState("card");
  const [upiID, setUpiID] = useState("");
  const [upiStatus, setUpiStatus] = useState(null);
  const [paymentSuccess, setPaymentSuccess] = useState(false);

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");

  const isFormValid = fullName && email && address && phone;

  const shipping = 99;
  const tax = Math.round(price * 0.18);
  const total = price + shipping + tax;

  const handleUPIVerify = () => {
    const upiRegex = /^[0-9]{10}@(ybl|ibl)$/;
    setUpiStatus(upiRegex.test(upiID.trim()) ? "valid" : "invalid");
  };

  const handlePayment = (e) => {
    e.preventDefault();
    if (isFormValid) {
      setPaymentSuccess(true);
    }
  };

  if (paymentSuccess) {
    return (
      <div className="flex flex-col items-center justify-center h-screen text-center text-white">
        <Player
          autoplay
          loop={false}
          keepLastFrame={true}
          src="https://assets2.lottiefiles.com/packages/lf20_jbrw3hcz.json"
          style={{ height: "300px", width: "300px" }}
        />
        <h2 className="text-3xl font-bold mt-4">Payment Successful!</h2>
        <p className="text-lg mt-2 text-gray-400">
          Thank you so much for your purchase 🎉
        </p>
      </div>
    );
  }

  return (
    <section className="min-h-screen text-white px-6 py-12 flex items-start justify-center mt-12">
      <div className="w-full max-w-5xl bg-[#141315] rounded-xl p-8 shadow-lg grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* 1. Order Summary + Card Total */}
        <div className="col-span-1 border-r border-[#2d2b3f] pr-4">
          <h3 className="text-xl font-semibold mb-4">🧾 Order Summary</h3>
          <div className="bg-[#2a273d] p-4 rounded-lg mb-4">
            <p className="text-lg font-bold">{name}</p>
            <p className="text-sm text-[#aaa6c3] mt-1">{details}</p>
            <p className="text-pink-500 mt-4 font-semibold text-lg">₹{price}</p>
          </div>

          {/* 🔥 Card Total Section */}
          <div className="bg-[#2a273d] p-4 rounded-lg space-y-2">
            <h4 className="text-lg font-semibold mb-2">📦 Card Total</h4>
            <div className="flex justify-between text-sm">
              <span>Subtotal</span>
              <span>₹{price}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span>Shipping</span>
              <span>₹{shipping}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span>Tax (18%)</span>
              <span>₹{tax}</span>
            </div>
            <hr className="border-[#444] my-2" />
            <div className="flex justify-between font-bold text-base">
              <span>Total</span>
              <span>₹{total}</span>
            </div>
          </div>
        </div>

        {/* 2. Payment Method */}
        <div className="col-span-1 px-2">
          <h3 className="text-xl font-semibold mb-4">💳 Payment Method</h3>
          <div className="space-y-4">
            <div className="space-y-3">
              {["card", "upi", "netbanking", "wallet"].map((option) => (
                <label key={option} className="flex items-center gap-3">
                  <input
                    type="radio"
                    name="method"
                    checked={method === option}
                    onChange={() => setMethod(option)}
                  />
                  <span>
                    {option === "card"
                      ? "Credit / Debit Card"
                      : option === "upi"
                      ? "UPI"
                      : option === "netbanking"
                      ? "Net Banking"
                      : "Digital Wallet (Paytm / GPay / PhonePe)"}
                  </span>
                </label>
              ))}
            </div>

            {/* Conditional Fields */}
            <div className="space-y-4">
              {method === "card" && (
                <>
                  <input type="text" placeholder="Card Number" className="w-full p-3 bg-[#2a273d] rounded-lg text-white placeholder-gray-400" />
                  <div className="flex gap-4">
                    <input type="text" placeholder="MM/YY" className="w-1/2 p-3 bg-[#2a273d] rounded-lg text-white placeholder-gray-400" />
                    <input type="text" placeholder="CVV" className="w-1/2 p-3 bg-[#2a273d] rounded-lg text-white placeholder-gray-400" />
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
                    <button type="button" onClick={handleUPIVerify} className="bg-amber-400 text-black px-4 py-2 rounded-md hover:bg-amber-300">
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
          <form className="space-y-4" onSubmit={handlePayment}>
            <input type="text" placeholder="Full Name" value={fullName} onChange={(e) => setFullName(e.target.value)} className="w-full p-3 bg-[#2a273d] rounded-lg text-white placeholder-gray-400" />
            <input type="email" placeholder="Email Address" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full p-3 bg-[#2a273d] rounded-lg text-white placeholder-gray-400" />
            <input type="text" placeholder="Billing Address" value={address} onChange={(e) => setAddress(e.target.value)} className="w-full p-3 bg-[#2a273d] rounded-lg text-white placeholder-gray-400" />
            <input type="text" placeholder="Phone Number" value={phone} onChange={(e) => setPhone(e.target.value)} className="w-full p-3 bg-[#2a273d] rounded-lg text-white placeholder-gray-400" />
            <button type="submit" disabled={!isFormValid} className="w-full mt-2 bg-amber-400 text-black py-3 rounded-lg hover:bg-amber-300 font-bold">
              Pay ₹{total}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};
