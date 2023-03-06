/* eslint-disable react/jsx-filename-extension */
import { Disclosure } from '@headlessui/react';
import React from 'react';
// import { GiHamburgerMenu } from 'react-icons/gi';
import Image from 'next/image';
import {
  MdOutlineHome,
  MdOutlineSearch,
  MdPeopleOutline,
  MdOutlineFormatListBulleted,
  MdOutlineLogout,
} from 'react-icons/md';
import { H4 } from './ui/typography';
import logo from '../images/logo.png';
import NavbarLink from './NavbarLink';
// import icons from react-icon

function SideNavbar() {
  const sidenavIconStyles = 'text-2xl text-white group-hover:text-black ';
  const sidenavAllStyles = 'text-red';

  return (
    <div>
      <Disclosure as="nav">
        <div className="p-6 w-1/2 h-screen bg-black z-20 fixed top-0 -left-96 lg:w-60 lg:left-0 peer-focus:left-0 peer:transition ease-out delay-150 duration-200">
          <div className="flex flex-col justify-start items-center my-6">
            <Image src={logo} width={60} height={60} alt="classy logo" />
            <H4
              color="white"
              className="text-base text-center font-bold pb-4 w-full mt-3.5"
            >
              Classy
            </H4>

            {/* main tabs */}
            <div className="my-40 pb-10 w-full">
              <NavbarLink
                link="home"
                title="Home"
                className={sidenavAllStyles}
                icon={<MdOutlineHome className={sidenavIconStyles} />}
              />

              <NavbarLink
                link="search"
                title="Search"
                icon={<MdOutlineSearch className={sidenavIconStyles} />}
              />

              <NavbarLink
                link="social"
                title="Social"
                icon={<MdPeopleOutline className={sidenavIconStyles} />}
              />

              <NavbarLink
                link="waitlist"
                title="Waitlists"
                icon={<MdOutlineFormatListBulleted className={sidenavIconStyles} />}
              />

            </div>

            {/* logout */}
            <div className="my-4 w-full">
              <NavbarLink
                link=""
                title="Logout"
                icon={<MdOutlineLogout className={sidenavIconStyles} />}
              />
            </div>
          </div>
        </div>
      </Disclosure>
    </div>
  );
}

export default SideNavbar;
