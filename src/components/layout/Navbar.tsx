import React from "react";
import { Bars3Icon } from "@heroicons/react/24/outline";
import classNames from "classnames";
import {Link} from 'react-router-dom'


type Props = {
  onMenuButtonClick(): void;
};
const Navbar = (props: Props) => {

  console.log(window.matchMedia('(prefers-color-scheme: dark)'))
  return (
    <nav
      className={classNames({
        "bg-white text-zinc-500": true, // colors     
        "flex items-center justify-between": true, // layout
        "w-full fixed z-10 px-4 shadow-sm h-16 dark:bg-gray-600": true, //posi tioning & styling 
      })}
    >
      <button className="md:hidden" onClick={props.onMenuButtonClick}>
        <Bars3Icon className="h-6 w-6" /> 
      </button>
      <div className="font-bold text-lg">
      {(window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) ? (
       <Link to={'/'}>
         <img
            src="https://it.konkat.gr/wp-content/uploads/2018/07/cropped-citd_logo_w.png"
            alt="Avin International"
            width={65}
            height={65}
            />
        </Link>
        ):(
          <Link to={'/'}>
          <img
             src="https://it.konkat.gr/wp-content/uploads/2018/07/cropped-citd_logo_w.png"
             alt="Avin International"
             width={65}
             height={65}
             />
         </Link>
        )}
      </div>
      
      <div className="flex-grow"></div>
      {/* {!token && !user ? ( */}
      <ul className="flex items-center gap-6 dark:text-white" >
            Username
      </ul>
      {/*
      ):(
      <ul className="flex it ems-center gap-6 dark:text-white" >
        <Logout />
      </ul>
     )} */}
      
    </nav>
  );
};

export default Navbar;
