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
        "w-full fixed z-10 px-4 shadow-sm h-16 dark:bg-gray-600": true, //positioning & styling
      })}
    >
      <button className="md:hidden" onClick={props.onMenuButtonClick}>
        <Bars3Icon className="h-6 w-6" />
      </button>
      <div className="font-bold text-lg">
      {(window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) ? (
       <Link to={'/'}>
         <img
            src="/img/avininternational_logo_White5.svg"
            alt="Avin International"
            width={200}
            height={200}
            />
        </Link>
        ):(
          <Link to={'/'}>
          <img
             src="/img/avininternational_logo.png"
             alt="Avin International"
             width={200}
             height={200}
             />
         </Link>
        )}
      </div>
      
      <div className="flex-grow"></div>
     {/* {!token && !user ? (
      <ul className="flex items-center gap-6 dark:text-white" >
            <Login />
      </ul>
      ):(
      <ul className="flex items-center gap-6 dark:text-white" >
        <Logout />
      </ul>
     )} */}
      
    </nav>
  );
};

export default Navbar;
