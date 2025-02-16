export default function ContactUs() {
  return (
    <div className="md:col-span-3 lg:col-span-2 xl:col-span-4 mt-5 w-[90%] bg-white/90 rounded-[20px] border-4 border-bay-400 p-4 z-10">
      <div className="text-center text-red-400 text-[2rem]/[2rem] font-black font-['Aleo'] mb-2">
        <h1>Contact Us</h1>
      </div>
      <div className="text-[#1e1e1e] text-[1rem]/[1.45rem] font-normal font-['Aleo'] mb-4">
        <ul>
          <li className="font-semibold pb-2">
            Facebook:{" "}
            <a
              href="https://www.facebook.com/profile.php?id=61565650358616"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600"
            >
              Motorhome Mann
            </a>
          </li>
          <li className="font-semibold pb-2">
            Phone:{" "}
            <a href="tel:+447624234100" className="text-blue-600">
              07624 234100
            </a>{" "}
            /{" "}
            <a href="tel:+447624242020" className="text-blue-600">
              07624 242020
            </a>
          </li>
          <li className="font-semibold pb-2">
            Email:{" "}
            <a href="mailto:mohomann@outlook.com" className="text-blue-600">
              mohomann@outlook.com
            </a>
          </li>
          <li className="font-semibold pb-2">
            Website:{" "}
            <a href="http://www.motorhomemann.co.uk" className="text-blue-600">
              www.motorhomemann.co.uk
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
