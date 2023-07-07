import React from 'react';
import { useSidebarStore } from '../Store/Store';
import { Link } from 'react-router-dom';
import { DiCode } from "react-icons/di";

const Sidebar: React.FC = () => {
  const { isOpen } = useSidebarStore();

  return (
    <aside className={`w-56 p-4 bg-[#4E73DF] ${isOpen ? 'block' : 'hidden'}`}>
      <h1 className='text-2xl font-bold text-center text-white flex flex-nowrap items-center'>
        <span className='text-5xl'><DiCode /></span>
        CMS Turu
      </h1>
      <hr className='my-4' />
      <ul className='flex flex-col gap-y-2'>
        <Link to="/">
          <li className='text-gray-100/80 hover:text-white'>Home</li>
        </Link>
        <Link to="/manage-field">
          <li className='text-gray-100/80 hover:text-white'>Manage Field</li>
        </Link>
        <Link to="/manage-user">
          <li className='text-gray-100/80 hover:text-white'>Manage User</li>
        </Link>
        <Link to="/logout">
          <li className='text-gray-100/80 hover:text-white'>Logout</li>
        </Link>
      </ul>
    </aside>
  );
};

export default Sidebar;
