import React, { useRef } from "react";
import classNames from "classnames";
import { Link } from "react-router-dom";
import { defaultNavItems } from "./defaultNavItems";
import { useOnClickOutside } from "usehooks-ts";

// define a NavItem prop
export type NavItem = {
  label: string;
  href: string;
  icon: React.ReactNode;
};
// add NavItem prop to component prop
type Props = {
  open: boolean;
  navItems?: NavItem[];
  setOpen(open: boolean): void;
};
const Sidebar = ({ open, navItems = defaultNavItems, setOpen }: Props) => {
  const ref = useRef<HTMLDivElement>(null);
  useOnClickOutside(ref, (e) => {
    setOpen(false);
  });
  return (
    <div
      className={classNames({
        "flex flex-col justify-between": true, // layout
        "bg-blue-900 text-zinc-50": true, // colors
        "md:w-full md:sticky md:top-16 md:z-0 top-0 z-20 fixed": true, // positioning
        "md:h-[calc(100vh_-_64px)] h-full w-[300px]": true, // for height and width
        "transition-transform .3s ease-in-out md:-translate-x-0": true, //animations
        "-translate-x-full dark:bg-gray-700 dark:md:bg-gray-700": !open, //hide sidebar to the left when closed
      })}
      ref={ref}
    >
      <nav className="md:sticky top-0 md:top-16">
        <ul className="py-2 flex flex-col gap-2">
          {navItems.map((item, index) => {
            return (
              <Link key={index} to={item.href}>
                <li
                  className={classNames({
                    "text-indigo-100 hover:bg-red-700": true, //colors
                    "flex gap-4 items-center ": true, //layout
                    "transition-colors duration-300": true, //animation
                    "rounded-md p-2 mx-2": true, //self style
                  })}
                >
                  {item.icon} {item.label}
                </li>
              </Link>
            );
          })}
        </ul>
      </nav>
      {/* account  */}
      
      
          <div className=" p-4">
            <div className="flex gap-4 items-center">
              <img
                src={
                  "/img/redusericon.jpg"
                }
                height={36}
                width={36}
                alt="profile image"
                className="rounded-full"
              />
            <div className="flex flex-col ">
              <span className="text-indigo-50 my-0">Apostolos</span>
              {/* <Link href="/" className="text-indigo-200 text-sm">
                View Profile
              </Link> */}
            </div>
            </div>
          </div>
 
         
        
    </div>
  );
};
export default Sidebar;
