import { LuDownload } from "react-icons/lu";

export const Herosection = () => {
  return (
    <main className="flex items-center justify-center p-[10rem] mt-[3rem]  ">
      <div className="text-center">
        <div className="mt-[1rem]">
          <h1 className="font-bold leading-[1.15] text-4xl text-white">
            Hi I'm Simran
          </h1>

          <h4 className="my-[1.3rem] text-[2.4rem] text-[#aaa6c3]">
            Give Your Innovative Project a Kickstart with Us
          </h4>

          <button className="px-6 py-2 text-base font-medium bg-amber-50 rounded-md hover:bg-amber-100">
            <LuDownload className="inline mr-2" />
            Download Resume
          </button>
        </div>
      </div>
    </main>
  );
};
