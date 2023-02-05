/* eslint-disable react/jsx-filename-extension */
import { Disclosure } from '@headlessui/react';
import React from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import Image from 'next/image';
import {
  MdOutlineHome,
  MdOutlineSearch,
  MdPeopleOutline,
  MdOutlineFormatListBulleted,
  MdOutlineSettings,
  MdOutlineLogout,
} from 'react-icons/md';
import { H4 } from './ui/typography';
import logo from '../images/logo.png';
import NavbarLink from './NavbarLink';
// import icons from react-icon

function SideNavbar() {
  const sidenavLinkStyles = 'text-2xl text-white group-hover:text-black';

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
            <H4
              color="white"
              className="text-base text-center cursor-pointer font-bold pb-4 w-full mt-3.5"
            >
              Hi, Tim!
            </H4>

            {/* main tabs */}
            <div className="my-40 pb-10 w-full">
              <NavbarLink
                link="home"
                title="Home"
                icon={<MdOutlineHome className={sidenavLinkStyles} />}
              />

              <NavbarLink
                link="search"
                title="Search"
                icon={<MdOutlineSearch className={sidenavLinkStyles} />}
              />

              <NavbarLink
                link="social"
                title="Social"
                icon={<MdPeopleOutline className={sidenavLinkStyles} />}
              />

              <NavbarLink
                link="waitlist"
                title="Waitlists"
                icon={<MdOutlineFormatListBulleted className={sidenavLinkStyles} />}
              />

              <NavbarLink
                link="settings"
                title="Settings"
                icon={<MdOutlineSettings className={sidenavLinkStyles} />}
              />
            </div>

            {/* logout */}
            <div className="my-4 w-full">
              <NavbarLink
                link="explore"
                title="Logout"
                icon={<MdOutlineLogout className={sidenavLinkStyles} />}
              />
            </div>
          </div>
        </div>
      </Disclosure>
    </div>
  );
}

export default SideNavbar;
