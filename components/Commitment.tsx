export default function Commitment() {
  return (
    <div
      id="commitment"
      className="md:col-span-3 lg:col-span-2 xl:col-span-4 mt-5 w-[90%] bg-white/90 rounded-[20px] border-4 border-bay-400 p-4 z-10"
    >
      <div className="text-center text-red-400 text-[2rem]/[2rem] font-black font-['Aleo'] mb-2">
        <h1>Our Commitment to You</h1>
      </div>
      <p className="mb-2">
        Customer satisfaction is our main priority. We guarantee:
      </p>
      <ul>
        <li className="mb-2">
          <span className="text-[#1e1e1e] text-base font-bold font-['Aleo'] leading-normal">
            Transparent Pricing:
          </span>
          <span className="text-[#1e1e1e] text-base font-normal font-['Aleo'] leading-normal">
            No hidden costs; all work is discussed with you first.
            <br className="mb-4" />
          </span>
        </li>
        <li className="mb-2">
          <span className="text-[#1e1e1e] text-base font-bold font-['Aleo'] leading-normal">
            Comprehensive Consultation:
          </span>
          <span className="text-[#1e1e1e] text-base font-normal font-['Aleo'] leading-normal">
            If any issue is discovered during a habitation check, we inform you
            of your options before proceeding with repairs.
            <br />
          </span>
        </li>
        <li id={"care-for-campervan"} className="mb-2">
          <span className="text-[#1e1e1e] text-base font-bold font-['Aleo'] leading-normal">
            Care for Your Campervan or Motorhome:
          </span>
          <span className="text-[#1e1e1e] text-base font-normal font-['Aleo'] leading-normal">
            We treat your vehicle with respect, ensuring it remains your
            reliable home away from home.
          </span>
        </li>
      </ul>
    </div>
  );
}
