export default function Terms() {
  return (
    <div className="md:col-span-3 lg:col-span-2 xl:col-span-4 mt-5 w-[90%] bg-white/90 rounded-[20px] border-4 border-bay-400 p-4 z-10">
      <div className="text-center text-red-400 text-[2rem]/[2rem] font-black font-['Aleo'] mb-2">
        <h1>Terms and Conditions</h1>
      </div>
      <ul>
        <li className="mb-2">
          <span className="text-[#1e1e1e] text-base font-bold font-['Aleo'] leading-normal">
            Payment:{" "}
          </span>
          <span className="text-[#1e1e1e] text-base font-normal font-['Aleo'] leading-normal">
            Payment is required in full upon completion. We accept cash, bank
            transfer, and debit/credit cards.
          </span>
        </li>
        <li className="mb-2">
          <span className="text-[#1e1e1e] text-base font-bold font-['Aleo'] leading-normal">
            Access Requirements:{" "}
          </span>
          <span className="text-[#1e1e1e] text-base font-normal font-['Aleo'] leading-normal">
            Please ensure clear access to appliances and availability of water,
            gas, and a charged leisure battery for a thorough habitation check.
            <br />
          </span>
        </li>
        <li className="mb-2">
          <span className="text-[#1e1e1e] text-base font-bold font-['Aleo'] leading-normal">
            Cancellations:{" "}
          </span>
          <span className="text-[#1e1e1e] text-base font-normal font-['Aleo'] leading-normal">
            If we cannot access your vehicle during a pre-booked appointment, a
            £60 call-out fee applies.
          </span>
        </li>
        <li className="mb-2">
          <span className="text-[#1e1e1e] text-base font-bold font-['Aleo'] leading-normal">
            Special Orders:{" "}
          </span>
          <span className="text-[#1e1e1e] text-base font-normal font-['Aleo'] leading-normal">
            Full payment is required at the time of ordering for special parts,
            which are non-refundable.
          </span>
        </li>
      </ul>
    </div>
  );
}
