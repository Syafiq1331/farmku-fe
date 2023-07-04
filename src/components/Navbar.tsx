import React from 'react';
import { useSidebarStore } from '../Store/Store';
import { HiMenu } from "react-icons/hi";
import images from '../../public/default.svg';

const getDataUserLocalStorage = () => {
  const user = localStorage.getItem("user");
  if (user) {
    return JSON.parse(user);
  }
  return null;
}

const Navbar: React.FC = () => {
  const { toggleSidebar } = useSidebarStore();
  const image = getDataUserLocalStorage()?.image == null ? images : getDataUserLocalStorage()?.image;

  return (
    <header className="navbar">
      <div className="container mx-auto flex justify-between items-center h-full">
        <button className="navbar-toggle text-2xl" onClick={toggleSidebar}>
          <HiMenu />
        </button>
      </div>
      <p className='w-32 flex items-center'>
        {getDataUserLocalStorage()?.name} | <img className='w-8 ms-2' src={image} alt="" />
      </p>
    </header >
  );
};

export default Navbar;
