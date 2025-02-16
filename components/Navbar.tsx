import Image from "next/image";
import Link from "next/link";

import {
  Popover,
  PopoverButton,
  PopoverPanel,
  Disclosure,
} from "@headlessui/react";

import mhmLogo from "../public/images/motorhomemann-logo.png";

import {
  TruckIcon,
  PhoneIcon,
  // BuildingStorefrontIcon,
  // CurrencyPoundIcon,
  // WrenchScrewdriverIcon,
  // ClockIcon,
  // ChatBubbleOvalLeftEllipsisIcon,
  // DocumentTextIcon,
} from "@heroicons/react/24/outline";

const navigation = [
  { name: "Motorhome Mann", href: "/", current: true },
  { name: "Contact Us", href: "#care-for-campervan", current: false },
  // { name: "Terms & Conditions", href: "/terms-and-conditions", current: false },
  //{ name: "Contact Us", href: "/contact-us", current: false },
  // { name: "Shop", href: "#", current: false },
  // { name: "Services & Pricing", href: "#", current: false },
  // { name: "Repair Services", href: "#", current: false },
  // { name: "Working Hours", href: "#", current: false },
  // { name: "Helpful Hints", href: "#", current: false },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

const solutions = [
  {
    name: "Motorhome Mann",
    href: "/",
    icon: TruckIcon,
  },
  {
    name: "07624 234100",
    href: "tel:00447624 234100",
    icon: PhoneIcon,
  },
  {
    name: "07624 242020",
    href: "tel:00447624 242020",
    icon: PhoneIcon,
  },
  // {
  //   name: "Shop",
  //   href: "/shop",
  //   icon: BuildingStorefrontIcon,
  // },
  // {
  //   name: "Services & Pricing",
  //   href: "/services",
  //   icon: CurrencyPoundIcon,
  // },
  // {
  //   name: "Repair Services",
  //   href: "/repair",
  //   icon: WrenchScrewdriverIcon,
  // },
  // {
  //   name: "Working Hours",
  //   href: "/working-hours",
  //   icon: ClockIcon,
  // },
  // {
  //   name: "Helpful Hints",
  //   href: "/helpful-hints",
  //   icon: ChatBubbleOvalLeftEllipsisIcon,
  // },
  // {
  //   name: "Terms & Conditions",
  //   href: "terms-and-conditions",
  //   icon: DocumentTextIcon,
  // },
];

export default function Navbar() {
  return (
    <>
      <div className="grid grid-cols-6 md:grid-cols-12 fixed w-screen top-0 h-[120px] bg-gradient-to-b from-bay-200 to-bay-600 shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] backdrop-blur-[6px] z-50">
        <div className="col-start-2 col-span-4 md:col-start-2 md:col-span-3 lg:col-start-2 lg:col-span-2 mt-3 me-3 self-center">
          <Image
            className="w-[100%] h-[93px] object-contain"
            src={mhmLogo}
            alt="motorhome mann logo"
          />
        </div>
        <div className="col-start-6 col-span-1 md:hidden self-center justify-self-end mt-3 me-3">
          <Popover className="w-[50px] h-10 relative">
            <PopoverButton>
              <div className="w-[50px] h-10 left-0 top-0 absolute bg-bay-0 rounded-[10px] border-2 border-bay-600" />
              <div data-svg-wrapper className="absolute left-0 top-0">
                <svg
                  width="50"
                  height="40"
                  viewBox="0 0 50 40"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10,10h30"
                    stroke="#425948"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                  <path
                    d="M10,20h30"
                    stroke="#425948"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                  <path
                    d="M10,30h30"
                    stroke="#425948"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
            </PopoverButton>
            <PopoverPanel
              transition
              className="fixed right-0 z-10 mt-[40px] flex w-screen max-w-max -translate-x-0 px-4 transition data-closed:translate-y-1 data-closed:opacity-0 data-enter:duration-200 data-enter:ease-out data-leave:duration-150 data-leave:ease-in"
            >
              <div className="w-screen max-w-md flex-auto overflow-hidden rounded-3xl bg-white text-sm/6 ring-1 shadow-lg ring-gray-900/5">
                <div className="p-4">
                  {solutions.map((item) => (
                    <div
                      key={item.name}
                      className="group relative flex gap-x-6 rounded-lg px-4 py-2 hover:bg-gray-50"
                    >
                      <div className="mt-1 flex size-8 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                        <item.icon
                          aria-hidden="true"
                          className="size-6 text-gray-600 group-hover:text-indigo-600"
                        />
                      </div>
                      <div className="grid self-center">
                        <Link
                          href={item.href}
                          className="font-semibold text-gray-900"
                        >
                          {item.name}
                          <span className="absolute inset-0" />
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </PopoverPanel>
          </Popover>
        </div>
        <div className="hidden md:grid md:col-start-5 md:col-span-7 lg:col-start-4 lg:col-span-8 text-center items-end justify-end mb-6">
          <Disclosure as="nav">
            <div className="flex flex-wrap justify-center space-x-1">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  aria-current={item.current ? "page" : undefined}
                  className={classNames(
                    item.current
                      ? "bg-bay-800 text-white text-center"
                      : "text-cream-0 hover:bg-bay-600 hover:text-white text-center",
                    "rounded-md px-3 py-2 text-md font-medium"
                  )}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </Disclosure>
        </div>
      </div>
    </>
  );
}
