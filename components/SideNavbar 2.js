/* eslint-disable react/jsx-filename-extension */
import { Disclosure } from '@headlessui/react';
import React from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import {
  MdOutlineSearch, MdOutlineExplore, MdOutlineFormatListBulleted,
  MdOutlinePersonOutline, MdOutlineSettings, MdOutlineLogout,
} from 'react-icons/md';
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
            <h1 className="text-base text-center cursor-pointer font-bold text-white border-b border-gray-100 pb-4 w-full">
              Classy
            </h1>

            {/* main tabs */}
            <div className="my-4 border-b border-gray-100 pb-4 w-full">
              <div className="flex mb-2 justify-start items-center gap-4 pl-5 hover:bg-white p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto">
                <MdOutlineSearch className="text-2xl text-white group-hover:text-black" />
                <h3 className="text-base text-white group-hover:text-black font-semibold">
                  Search
                </h3>
              </div>

              <div className="flex mb-2 justify-start items-center gap-4 pl-5 hover:bg-white p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto">
                <MdOutlineExplore className="text-2xl text-white group-hover:text-black" />
                <h3 className="text-base text-white group-hover:text-black font-semibold">
                  Explore
                </h3>
              </div>

              <div className="flex mb-2 justify-start items-center gap-4 pl-5 hover:bg-white p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto">
                <MdOutlineFormatListBulleted className="text-2xl text-white group-hover:text-black" />
                <h3 className="text-base text-white group-hover:text-black font-semibold">
                  Waitlists
                </h3>
              </div>

              <div className="flex mb-2 justify-start items-center gap-4 pl-5 hover:bg-white p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto">
                <MdOutlinePersonOutline className="text-2xl text-white group-hover:text-black" />
                <h3 className="text-base text-white group-hover:text-black font-semibold">
                  Profile
                </h3>
              </div>

              <div className="flex mb-2 justify-start items-center gap-4 pl-5 hover:bg-white p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto">
                <MdOutlineSettings className="text-2xl text-white group-hover:text-black" />
                <h3 className="text-base text-white group-hover:text-black font-semibold">
                  Settings
                </h3>
              </div>
            </div>

            {/* logout */}
            <div className="my-4 w-full">
              <div className="flex mb-2 justify-start items-center gap-4 pl-5 hover:bg-white p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto">
                <MdOutlineLogout className="text-2xl text-white group-hover:text-black" />
                <h3 className="text-base text-white group-hover:text-black font-semibold">
                  Logout
                </h3>
              </div>
            </div>

          </div>
        </div>

      </Disclosure>
    </div>
  );
}

export default SideNavbar;
