import { Disclosure } from '@headlessui/react';
import React from 'react'
import {GiHamburgerMenu} from "react-icons/gi"

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
            <h1 className="text-base text-center cursor-pointer font-bold text-blue-900 border-b border-gray-100 pb-4 w-full">
              Virtual Dashboard
            </h1>
          </div>
        </div>


      </Disclosure> 
    </div>
  );
}

export default SideNavbar