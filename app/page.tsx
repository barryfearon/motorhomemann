import Image from "next/image";
import type { Metadata } from "next";

import Navbar from "@/components/Navbar";
import Welcome from "@/components/Welcome";
import WhyChoose from "@/components/WhyChoose";
import Qualifications from "@/components/Qualifications";
import Commitment from "@/components/Commitment";
import Parts from "@/components/Parts";

import bgDesktop from "../public/images/mhm-background-001.png";
import camperVan from "../public/images/mhm-van-001.png";
import ContactUs from "@/components/ContactUs";
import WorkingHours from "@/components/WorkingHousr";
import Terms from "@/components/Terms";

export const metadata: Metadata = {
  title: "Motorhome Mann",
  description:
    "Motorhome and campervan repairs on the Isle of Man. Dedicated to delivering high-quality, affordable service for motorhome and campervan habitation checks and repairs.",
};

export default function Home() {
  return (
    <>
      <main>
        <Image
          className={`object-cover h-screen w-screen fixed top-0 left-0 opacity-75`}
          src={bgDesktop}
          width={1920}
          alt="background image "
        />
        <Navbar />
        <div className="z-0 grid grid-cols-1 md:grid-cols-6 lg:grid-cols-6 xl:grid-cols-12 justify-items-center content-start mb-[350px] mt-[140px] w-full text-primary-400">
          <Welcome />
          <WhyChoose />
          <Qualifications />
          <Commitment />
          <Parts />
          <ContactUs />
          <WorkingHours />
          <Terms />
          <div className="fixed -bottom-1 mt-4 z-0">
            <Image
              className="object-cover"
              priority
              src={camperVan}
              width={400}
              alt={`motorhome mann campervan`}
            />
          </div>
        </div>
      </main>
    </>
  );
}
