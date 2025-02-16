export default function WorkingHours() {
  return (
    <div className="md:col-start-1 md:col-span-3 lg:col-start-2 lg:col-span-2 xl:col-start-3 xl:col-span-4 mt-5 w-[90%] bg-white/90 rounded-[20px] border-4 border-bay-400 p-4 z-10 overscroll-none">
      <div className="text-center text-red-400 text-[2rem]/[2rem] font-black font-['Aleo'] mb-2">
        <h1>Working Hours</h1>
      </div>
      <p className="text-[#1e1e1e] text-base font-normal font-['Aleo'] leading-normal pb-2">
        Our working hours vary weekly. Once you contact us, we’ll add you to our
        service list and reach out as soon as possible.
      </p>
      <p>
        During peak times, wait times may extend to 14-21 days. Rest assured, if
        you’re on our list, we’ll contact you as soon as possible.
      </p>
    </div>
  );
}
