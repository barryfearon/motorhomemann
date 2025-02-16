import Image from "next/image";
import mceaLogo from "../public/images/MCEA-logo.png";

export default function Welcome() {
  return (
    <div className="md:col-start-1 md:col-span-3 lg:col-start-2 lg:col-span-2 xl:col-start-3 xl:col-span-4 mt-5 w-[90%] bg-white/90 rounded-[20px] border-4 border-bay-400 p-4 z-10 overscroll-none">
      <div className="text-center text-red-400 text-[2rem]/[2rem] font-black font-['Aleo'] mb-2">
        <h1>Welcome to Motorhome Mann</h1>
      </div>

      <div className="text-[#1e1e1e] text-[1rem]/[1.45rem] font-normal font-['Aleo']">
        <p className="mb-2">
          Your trusted provider of motorhome and campervan repairs on the Isle
          of Man.
        </p>
        <p className="mb-2">
          With over 10 years of experience in motorhome and campervan repair, we
          specialize in habitation services, maintenance, and upgrades to keep
          your vehicle in top condition.
        </p>
        <p className="mb-2">
          We have been operating professionally for 6 years and are certified by
          the Mobile Caravan Engineers Association
        </p>
      </div>

      <div className="grid justify-items-center">
        <Image src={mceaLogo} width={140} height={65} alt={`MCEA Logo`} />
      </div>
    </div>
  );
}
