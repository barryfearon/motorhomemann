export default function Parts() {
  return (
    <div
      id={"parts"}
      className="md:col-start-1 md:col-span-3 lg:col-start-2 lg:col-span-2 xl:col-start-3 xl:col-span-4 mt-5 w-[90%] bg-white/90 rounded-[20px] border-4 border-bay-400 p-4 z-10 overscroll-none"
    >
      <div className="text-center text-red-400 text-[2rem]/[2rem] font-black font-['Aleo'] mb-2">
        <h1>Parts and Payment</h1>
      </div>
      <ul>
        <li>Special-order parts must be prepaid.</li>
        <li>
          Off-grid setups require a 50% deposit upfront, with the remainder due
          upon completion.
        </li>
        <li>
          We can fit any new parts supplied by you (no warranty on
          customer-supplied parts).
        </li>
      </ul>
    </div>
  );
}
