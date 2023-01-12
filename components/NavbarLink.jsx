import React from 'react';
import Link from 'next/link';
import { B1 } from './ui/typography';

export default function NavbarLink(props) {
  const { link, title, icon } = props;
  return (
    <Link
      href={`/${link}`}
    >
      <div className="flex mb-2 justify-start items-center gap-4 pl-5 hover:bg-white p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto">
        {icon}
        <B1
          color="white"
          className="text-base group-hover:text-black"
        >
          {title}
        </B1>
      </div>
    </Link>
  );
}
