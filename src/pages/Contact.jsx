import React from "react";

export const Contact = () => {
  
  function handleFormSubmit(e) {
    console.log("Name:", e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    alert("Are you sure?");
  }

  return (
    <section className="bg-[#151030] rounded-[45px] m-8 p-8 animate-slideIn">
      <p className="text-[#aaa6c3] text-lg font-cagliostro mb-1">GET IN TOUCH</p>
      <h2 className="text-white text-5xl font-cagliostro font-semibold mb-3">Contact</h2>

      <div className="container mx-auto">
        <form
          onSubmit={handleSubmit}
          onChange={handleFormSubmit}
          className="flex flex-col space-y-6 mt-10"
        >
          <label className="text-lg font-cagliostro text-white ">
            Your Name
            <input
              type="text"
              className="w-full mt-2 h-12 rounded-lg bg-[#1b182e] border-none px-4 py-2 text-white font-cagliostro text-sm focus:outline-none focus:ring-2 focus:ring-[#aaa6c3]"
              placeholder="What's your name?"
              name="username"
              required
              autoComplete="off"
            />
          </label>

          <label className="text-lg font-cagliostro text-white ">
            Your Email
            <input
              type="email"
              className="w-full mt-2 h-12 rounded-lg bg-[#1b182e] border-none px-4 py-2 text-white font-cagliostro text-sm focus:outline-none focus:ring-2 focus:ring-[#aaa6c3]"
              placeholder="What's your email?"
              name="email"
              required
              autoComplete="off"
            />
          </label>

          <label className="text-lg font-cagliostro text-white ">
            Message
            <textarea
              className="w-full mt-2 rounded-lg bg-[#1b182e] border-none px-4 py-2 text-white font-cagliostro text-sm focus:outline-none focus:ring-2 focus:ring-[#aaa6c3]"
              rows="6"
              placeholder="What do you want to say?"
              name="message"
            ></textarea>
          </label>

          <button
            type="submit"
            className="w-32 bg-[#1b182e] text-white font-cagliostro py-2 rounded-lg hover:bg-[#2c2740] focus:ring-2 focus:ring-[#aaa6c3]"
          >
            Send
          </button>
        </form>
      </div>
    </section>
  );
};


