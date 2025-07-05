import { useNavigate } from "react-router-dom";

export const PackagesPage = () => {
  const navigate = useNavigate();

  const handleSubscribe = (plan) => {
    navigate("/payment", { state: plan });
  };

  return (
    <div className="min-h-screen text-white p-10 mt-12">
      <h2 className="text-4xl font-bold text-center mb-10">Choose Your Plan</h2>
      <div className="flex flex-col md:flex-row justify-center gap-10">

        {/* Basic Package */}
        <div className="bg-[#1d1836] p-6 rounded-xl w-full max-w-md shadow-lg text-center">
          <h3 className="text-2xl font-semibold mb-4">Basic Package</h3>
          <p className="text-gray-400 mb-4">Portfolio Website + Contact Form</p>
          <p className="text-pink-500 font-bold text-xl mb-4">₹999</p>
          <button
            onClick={() =>
              handleSubscribe({
                name: "Basic Package",
                details: "Portfolio Website + Contact Form",
                price: 999,
              })
            }
            className="bg-amber-400 text-black px-6 py-2 rounded-md hover:bg-amber-300"
          >
            Subscribe Now
          </button>
        </div>

        {/* Premium Package */}
        <div className="bg-[#1d1836] p-6 rounded-xl w-full max-w-md shadow-lg text-center">
          <h3 className="text-2xl font-semibold mb-4">Premium Package</h3>
          <p className="text-gray-400 mb-4">Website + Admin Panel + Support</p>
          <p className="text-pink-500 font-bold text-xl mb-4">₹2999</p>
          <button
            onClick={() =>
              handleSubscribe({
                name: "Premium Package",
                details: "Website + Admin Panel + Support",
                price: 2999,
              })
            }
            className="bg-amber-400 text-black px-6 py-2 rounded-md hover:bg-amber-300"
          >
            Subscribe Now
          </button>
        </div>
      </div>
    </div>
  );
};
