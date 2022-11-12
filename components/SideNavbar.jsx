import { Disclosure } from '@headlessui/react';
import React from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import Image from 'next/image';
import {
  MdOutlineSearch, MdOutlineExplore, MdOutlineFormatListBulleted,
  MdOutlinePersonOutline, MdOutlineSettings, MdOutlineLogout,
} from 'react-icons/md';
import {
  H4, B1,
} from './ui/typography';
import logo from '../images/logo.png';
// import icons from react-icon

function SideNavbar() {
  return (
    <div>
      <Disclosure as="nav">
        <Disclosure.Button className="absolute top-4 right-4 inline-flex items-center peer justify-center rounded-md p-2 text-gray-900 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:rind-white group hover:bg-gray-900">
          <GiHamburgerMenu
            className="block md:hidden h-6 w-6"
            aria-hidden="true"
          />
        </Disclosure.Button>
        <div className="p-6 w-1/2 h-screen bg-black z-20 fixed top-0 -left-96 lg:w-60 lg:left-0 peer-focus:left-0 peer:transition ease-out delay-150 duration-200">
          <div className="flex flex-col justify-start items-center">
            <Image src={logo} width={60} height={60} alt="classy logo" />
            {/* <img src={logo} alt="logo" /> NOT WORKING */}
            <H4 color="white" className="text-base text-center cursor-pointer font-bold pb-4 w-full">
              Hi, Tim!
            </H4>

            {/* main tabs */}
            <div className="my-40 pb-10 w-full">
              <a href="../search" className="flex mb-2 justify-start items-center gap-4 pl-5 hover:bg-white p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto">
                <MdOutlineSearch className="text-2xl text-white group-hover:text-black" />
                <B1 color="white" className="text-base group-hover:text-black">
                  Search
                </B1>
              </a>

              <a href="../explore" className="flex mb-2 justify-start items-center gap-4 pl-5 hover:bg-white p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto">
                <MdOutlineExplore className="text-2xl text-white group-hover:text-black" />
                <B1 color="white" className="text-base group-hover:text-black">
                  Explore
                </B1>
              </a>

              <a href="../waitlist" className="flex mb-2 justify-start items-center gap-4 pl-5 hover:bg-white p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto">
                <MdOutlineFormatListBulleted className="text-2xl text-white group-hover:text-black" />
                <B1 color="white" className="text-base group-hover:text-black">
                  Waitlist
                </B1>
              </a>

              <a href="../profile" className="flex mb-2 justify-start items-center gap-4 pl-5 hover:bg-white p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto">
                <MdOutlinePersonOutline className="text-2xl text-white group-hover:text-black" />
                <B1 color="white" className="text-base group-hover:text-black">
                  Profile
                </B1>
              </a>

              <a href="../profile" className="flex mb-2 justify-start items-center gap-4 pl-5 hover:bg-white p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto">
                <MdOutlineSettings className="text-2xl text-white group-hover:text-black" />
                <B1 color="white" className="text-base group-hover:text-black">
                  Settings
                </B1>
              </a>
            </div>

            {/* logout */}
            <div className="my-4 w-full">
              <div className="flex mb-2 justify-start items-center gap-4 pl-5 hover:bg-white p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto">
                <MdOutlineLogout className="text-2xl text-white group-hover:text-black" />
                <B1 color="white" className="text-base group-hover:text-black">
                  Logout
                </B1>
              </div>
            </div>

          </div>
        </div>

      </Disclosure>
    </div>
  );
}

export default SideNavbar;
