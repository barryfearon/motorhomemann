export default function WhyChoose() {
  return (
    <div className="md:col-span-3 lg:col-span-2 xl:col-span-4 mt-5 w-[90%] bg-white/90 rounded-[20px] border-4 border-bay-400 p-4 z-10">
      <div className="text-center text-red-400 text-[2rem]/[2rem] font-black font-['Aleo'] mb-2">
        <h1>Why Choose Motorhome Mann?</h1>
      </div>
      <ul className="text-[#1e1e1e] text-base font-normal font-['Aleo'] leading-normal">
        <li className="mb-2">
          <span className="text-[#1e1e1e] text-base font-bold font-['Aleo'] leading-normal">
            Certified Expertise:{" "}
          </span>
          <span>
            Fully qualified leisure vehicle engineer with ongoing training to
            stay updated on industry advancements.
            <br />
          </span>
        </li>
        <li className="mb-2">
          <span className="text-[#1e1e1e] text-base font-bold font-['Aleo'] leading-normal">
            Professional Service:{" "}
          </span>
          <span>
            Dedicated to delivering high-quality, affordable service for
            motorhome and campervan habitation checks and repairs.
            <br />
          </span>
        </li>
        <li className="mb-2">
          <span className="text-[#1e1e1e] text-base font-bold font-['Aleo'] leading-normal">
            Local Knowledge:{" "}
          </span>
          <span>
            Proudly serving the Isle of Man community with a commitment to
            transparency and customer satisfaction.
          </span>
        </li>
      </ul>
    </div>
  );
}
